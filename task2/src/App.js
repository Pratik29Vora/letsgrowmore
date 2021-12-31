import React, { useState } from "react";
import "./App.css";

function App() {
  let list = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
  ];
  
  let [users , setUser] = useState([]);
  
  const loadUsers = async(i)=>{
    document.getElementById('data').style.transition = '0.5s';
    document.getElementById('data').style.display = 'block';
    const response = await fetch (list);
    const jsonResponse = await response.json();
    setUser(jsonResponse);  
  }


  return (
    <div className="App">
      <header className="App-header">
        <h2 id="heading">Hackitout</h2>
         <button onClick={loadUsers}>Get Users</button>
        </header>
        <div id="data">
          <ul>
            {list.map(({id , first_name , last_name , email , avatar})=>{
              return (
                <li key={id}>
                  <img src={avatar} alt="" />
                  <p> ID : {id}</p>
                  <p>Name : {first_name} {last_name}</p>
                  <p>Email : {email}</p>
                </li>
              )
            })}
          </ul>
        </div>
    </div>
  );
}

export default App;