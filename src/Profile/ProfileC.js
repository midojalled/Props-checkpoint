import React from 'react'
import './style.css'


const  handleClick = (e) => {
    e.preventDefault();
    alert(" I am Abdelhamid Jalled");
  }
 function ProfileC(props) {
    return (
        <div className="pr">
            {props.x.map((profile)=> (
                <div>
                     <img width="300px" src={profile.image} className="image" alt="product image" />
                     <br></br>
                     <a href="/" onClick={handleClick }>Click for my FullName</a>
      <p>{profile.bio}</p>
      <h4 className="profession">{profile.profession}</h4>
      </div>
            ))}
        </div>
    );
            }
export default ProfileC