import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
    <tr>
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
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


            </div>
        </div>
    );

}


export default Home;