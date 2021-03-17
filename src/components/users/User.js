
import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import '../../App.css'

export default function User() {
  const formik = useFormik({
    initialValues: {
      name: "",
      username:"",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),

      username: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),  
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:3001/users",values);
    }
  });


  return (
    <div className="Container">

     <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Add User Validation with Formik + Yup</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <p>{formik.errors.name}</p>
          )}
        </div>

        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username && (
            <p>{formik.errors.username}</p>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control form-control-lg"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        
        <div>
          <button className="btn btn-primary btn-block"type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}


