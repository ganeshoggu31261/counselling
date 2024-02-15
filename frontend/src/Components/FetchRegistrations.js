import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchRegistrations = () => {
    const [res, setRes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/retrieve', )
            .then(response => {
                setRes(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        
        
        <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                {res.map((data) =>{
                    return(
                        <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.password}</td>
                    </tr>
                    )
                })}           
        </table>
    );
};

export default FetchRegistrations;