import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import User from "./User";

function Users(props) {

    return (
        <Table striped hover>
            <thead style = {{backgroundColor : "#17B169", color : "white"}}>
            <tr >
                <th>SN</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map((user, index) => {
                return (<User 
                key = {index + 1}
                sn = {index + 1} 
                firstName = {user.name.first} 
                lastName = {user.name.last} 
                eMail = {user.email} 
                phone = {user.phone}
                gender = {user.gender}/>
                );
            })}
            </tbody>
        </Table>
    );
}

export default Users;


