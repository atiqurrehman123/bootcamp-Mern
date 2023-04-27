import React from 'react'
import {cardlist} from "../cardlist"
const Profile = () => {
    console.log(cardlist,"cardlist")
  return (
    <div>
        {cardlist.map(card=>{
            return (
              <React.Fragment>
                <h1>name:{card.name}</h1>
                <img src={card.imageUrl} alt="profileImage" style={{width:`${card.imageSize}px`,height:`${card.imageSize}px`}} />
                <button>Add To Cart</button>
              </React.Fragment>
            );
        })}
       
    </div>
  )
}

export default Profile