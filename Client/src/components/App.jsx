import React, { useState, useEffect } from "react";
import Users from "./Users";
import SelectAmountOfUsers from "./SelectAmountOfUsers";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";



function App() {

  const [dataFromApi, setDataFromApi] = useState([]);
  const [numberOfUserToDispley, SetNumberOfUserToDispley] = useState(10);


  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=' + numberOfUserToDispley.toString() + '&seed=942c16b4d3bf0533')
      .then(function (response) {
        setDataFromApi(response.data.results);
      });
  }, [numberOfUserToDispley]);


  function HandleChangeDisplayingUser(num){
    SetNumberOfUserToDispley(num);
  }


  return (
    <div className="container">
      <div style = {{textAlign: "center", margin: "10px"}}>
        <SelectAmountOfUsers func = {HandleChangeDisplayingUser} />
      </div>
      <Users data = {dataFromApi} />
    </div>
  );
}

export default App;
