import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";

function SelectAmountOfUsers(props) {

    function handleChange(event) {
      props.func(event.target.id);
    }

    return (
      <Dropdown size="sm">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Number Of Users
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleChange} id = "10">10</Dropdown.Item>
          <Dropdown.Item onClick={handleChange} id = "20">20</Dropdown.Item>
          <Dropdown.Item onClick={handleChange} id = "30">30</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  
  export default SelectAmountOfUsers;