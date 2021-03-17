import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


//get users
const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data.reverse());
  };

//delete users

const deleteUser = async id =>{
  await axios.delete(`http://localhost:3001/users/${id}`);
  loadUsers();
  alert("User deleted")
}


    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page User</h1>
                <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
        users.map((user,index)=>(
          <tr>
              <th scope="row">{index+1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                  <Link class="btn btn-primary mr-2" to= {`/users/${user.id}`}> ADD-formik </Link>
                  <Link class="btn btn-outline-primary mr-2"  to= {`/users/edit/${user.id}`} >Edit </Link>
                  <Link class="btn btn-danger" onClick={()=> deleteUser(user.id)}>Delete</Link>
              </td>
          </tr>

      ))
      }








    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
       <td>
                  <Link class="btn btn-primary mr-2" >
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    
                  >
                    Delete
                  </Link>
                </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>
                  <Link class="btn btn-primary mr-2" >
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    
                  >
                    Delete
                  </Link>
                </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>
                  <Link class="btn btn-primary mr-2" >
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    
                  >
                    Delete
                  </Link>
                </td>
    </tr> */}
  </tbody>
</table>


            </div>
        </div>
    );

}


export default Home;