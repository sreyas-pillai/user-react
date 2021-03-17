import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"

 const EditUser = () => {

  
  const [user,setUser] = useState({
    name: "",
    username:" ",
    email:""
  });


  const{name,username,email} = user;

  const {id} = useParams();


  const onInputChange = e => {
    setUser({...user,[e.target.name]: e.target.value})
  }
 
  useEffect(()=>{
    loadUser();
  },[]);

  const onSubmit= async e =>{
    e.preventDefault();    //stops default behaviour
    await axios.put(`http://localhost:3001/users/${id}`,user);
    alert("Record Edited successfully!")
  };


    const loadUser = async () =>{
     const result = await axios.get(`http://localhost:3001/users/${id}`);
     setUser(result.data);

     }


   return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)} >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
     
          <button className="btn btn-danger btn-block">Edit User</button>
        </form>
      </div>
    </div>
     


    
  );
 } 

export default EditUser;