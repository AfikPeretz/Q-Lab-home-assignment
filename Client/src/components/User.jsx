import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Male, Female } from "react-gender";
import UpdatedInput from "./UpdatedInput";


function User(props) {

    function handleDeleteClick(){
        props.delete(props.uuid);
    }

    function handleUpdateClick(){
        props.update(props.uuid);
    }

    return (
        <tr>
            <td>{props.sn}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.eMail}</td>
            <td>{props.phone}</td>
            <td><div style = {{ height: "30px", width: "10px"}}>{props.gender == "female" ? <Female color="#f378ac"/> : <Male color="#419fcf" />}</div></td>
            <th><Button variant="primary" size="sm" onClick = {handleUpdateClick} >Update</Button></th>
            <th><Button variant="danger" size="sm" onClick = {handleDeleteClick} >Delete</Button></th>
        </tr>
    );
}

export default User;