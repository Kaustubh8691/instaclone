import React, { useState } from "react";
// import "card.css";
import './card.css';

export default function Card({ people }) {
    // const {name,location,likes,description,PostImage}=obj;
    console.log(people);
    const [likes,setlikes]=useState(0);
    
    return people.map((person, index) => {
        return (
            <div className="card" key={index}>
                <div className="headr">
                    {console.log(person)}
                    <div className="name">
                        <h3>{person.author}</h3>
                        <p>{person.location}</p>
                    </div>
                    <div className="more">....</div>
                </div>
                <div className="cardimage">
                    {console.log(
                        'http://localhost:8080/user' + '/images/' + person.postImage

                    )}
                    <img className="card-image" src={'https://instaclone-back-10x.herokuapp.com/user' + '/images/' + person.postImage} alt="images" width="100%" />
                </div>
                <div className="foot">
                    <div>
                        <span>{"\u2661"}</span>
                        <span>{"\u27A2"}</span>
                    </div>
                    {/* <div className="date">{person.date}</div> */}

                    <div className="date">{String(new Date()).split("GMT")[0]}</div>
                </div>
                <div className="like-content">
                    <p >{person.likes } likes</p>
                    <p className="content">{person.description}</p>
                </div>
            </div>

        );

    });

}