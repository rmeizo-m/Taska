export const ADD_CITY = 'ADD_SITY';
export const ADD_IP = 'ADD_IP';
export const ADD_STREETS = 'ADD_STREETS'

export const getCity = async (dispatch, ip) => {
  const response = await fetch(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ip}`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token bde17d5b126cf2a8071ea9a0b28d55ecfa87d7c1"
            }
          }
        )

  const {
    location:{
      data: {
        city
      }
    }
  } = await response.json();

  dispatch({type: ADD_CITY, payload: city})
}

export const getIp = async (dispatch) => {
  const response = await fetch("https://api.ipify.org?format=json")
  const {ip} = await response.json();

  dispatch({type: ADD_IP, payload: ip})

  getCity(dispatch, ip)
}

export const showStreet = async (city, value, dispatch) => {
  const response = await fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token bde17d5b126cf2a8071ea9a0b28d55ecfa87d7c1"
    },
    body: JSON.stringify({query: `${city} ${value}`})
  })

  const valueCity = await response.json()

  dispatch({type: ADD_STREETS, payload: valueCity.suggestions})
}