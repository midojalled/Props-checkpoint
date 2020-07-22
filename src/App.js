import React from 'react';
import ProfileC from'./Profile/ProfileC.js'
import './App.css';
const profile =[
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnTPndLSFHM9SS8t1wJYeBjfurdYsg8MVYsg&usqp=CAU",
    fullName: "Abdelhamid Jalled" ,
    bio: "I am studying web development because i love doing this",
  profession: "Footballler and Gamer"  }
]
function App() {
  return (
    <div className="App">
      <ProfileC x={profile} />
    </div>
  );
}

export default App;
