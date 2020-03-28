import React, { useEffect, useState } from 'react';
import '../../App';
import './Friends.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Friends = (props) => {
    const [data, setData] = useState([]); 
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => setData(data))
          })
    
    
    const [photos, setPhotos] = useState([]); 

    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(photos => setPhotos(photos))
    })
    
    const user = {salary: 300}; 

    return (
        <div className="friends">
            <div className="user">
               {data.map(data =>(
                  <div>
                    {photos.slice(0,1).map(photos => (
                <img src={photos.thumbnailUrl} alt=""/>
                ))}
                    <h2>{data.username}</h2>
                    <h3>{data.email}</h3>
                    <h3><small>"Salary: {user.salary}"</small></h3>
                    <button 
                    className="main-button" 
                    onClick = {() => props.handleAddProduct(props.product)}
                    > 
                        <FontAwesomeIcon icon={faUserFriends} /> add to cart</button>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Friends;