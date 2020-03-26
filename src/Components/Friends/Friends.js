import React, { useEffect } from 'react';
import '../../App';
import './Friends.css'; 

const Friends = () => {

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => showUserNames(data))
    
          function showUserNames(data){
            let usersHTML = ''; 
            data.forEach(user => {
              usersHTML = usersHTML + `<div style={{
                background-color: lightsalmon;
                color: lightseagreen;
                margin-left: 30%;
              }className="user-all">
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"alt="" />
                <h2>${user.name}</h2>
                <p>Email: ${user.email}</p>
                <p>Salary: 10</small></p>
                    <button className="main-button">Count</button>
                <br/> 
              </div>`
            });
            const userContainer = document.getElementById('user-container'); 
            userContainer.innerHTML = usersHTML; 
          }
          })
    return (
        <div className="friends">
            <div className>
              
            </div>
            <div id="user-container" className="user-container">
                <div>
                    <h2> </h2>
                </div>
                
            </div>
        </div>
    );
};

export default Friends;