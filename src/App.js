import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {showStreet} from './redux/action'

const App = () => {
  const { url: { ip, city, streets }} = useSelector(store => store)
  const dispatch = useDispatch()

  console.log("Улица",streets)

  const searchStreetHandler = (e) => {
    if (e.key === "Enter") {
      showStreet(city, e.target.value, dispatch)
    }
  }

  return (
    <div className="App">
      <div className="card">
        <div>Ваш город: {city} </div>
        <div>Ваш ip: {ip}</div> 
        <input onKeyPress={searchStreetHandler} placeholder="Введите улицу"/>
        <div>
          <select>
            {
              streets.map(street => {
                return (
                  <option>{street.value}</option>
                )
              })
            }
          </select>
        </div>
        
      </div>
    </div>
  )

}

export default App;