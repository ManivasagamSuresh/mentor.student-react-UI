import { Button } from "bootstrap";
import React from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Config } from "./Config";

function CreateStaff() {
  let useparams = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      dept: "",
    },

    onSubmit: async (values) => {
      try {
        console.log(values);
        const userdata = await axios.post(
          `${Config.api}/createMentor`,values);
        alert("Success");
        formik.resetForm()
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={formik.handleSubmit}>
          <div className="col-lg-12">
            <label>Name : </label>
            <input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              // onBlur={formik.handleBlur}
              type="text"
              className="form-control"
              style={{ width: "350px" }}
            />
          </div>
          <div className="col-lg-12">
            <label>Department : </label>
            <input
              name="dept"
              onChange={formik.handleChange}
              value={formik.values.dept}
              onBlur={formik.handleBlur}
              type="text"
              className="form-control"
              style={{ width: "350px" }}
            />
          </div>
          <div className="col-lg-12">
            <button type="submit" className="btn btn-primary mt-5 ms-10">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>  
  )
}

export default CreateStaff