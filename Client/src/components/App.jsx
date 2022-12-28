import React, { useState, useEffect } from "react";
import Users from "./Users";
import SelectAmountOfUsers from "./SelectAmountOfUsers";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";



function App() {

  const [dataFromApi, setDataFromApi] = useState([]);
  const [numberOfUserToDispley, SetNumberOfUserToDispley] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem(data[0], JSON.stringify(data[1]));
  }, [data]);



  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=' + numberOfUserToDispley.toString() + '&seed=942c16b4d3bf0533')
      .then(function (response) {
        setDataFromApi(response.data.results.filter((user) => {
          return !localStorage.getItem(user.login.uuid);
        }));
      });
  }, [numberOfUserToDispley]);


  function handleChangeDisplayingUser(num){
    SetNumberOfUserToDispley(num);
  }

  function deleteUser (uuid){
    setData([uuid, "deleted"]);
  }

  useEffect(() => {
    setDataFromApi(prev => {
      return prev.filter((user) => {
        return !localStorage.getItem(user.login.uuid);
      });
    });
  }, [data]);


  function UpdateUser (uuid) {
    setData([uuid, {}]);
  }


  return (
    <div className="container">
      <div style = {{textAlign: "center", margin: "10px"}}>
        <SelectAmountOfUsers func = {handleChangeDisplayingUser} />
      </div>
      <Users data = {dataFromApi} delete = {deleteUser} update = {UpdateUser}/>
    </div>
  );
}

export default App;
