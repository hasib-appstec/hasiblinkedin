import React, {useEffect} from 'react';


import {useState} from 'react';
import {Alert, Typography} from '@mui/material';
import axios, {Axios} from 'axios';
import {toast} from 'react-toastify';
import "./Login.css"
import logo from "../Assets/logo.png"
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'


function Login() {



  const initialValues = {email: "", password: ""}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }

  // let navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues))
    // setFormValues(...formValues)
    setIsSubmit(true)
    // navigate("/navbar")


    // // let item = {email, password}
    // const response = await fetch("http://192.168.1.13:3233/api/registration", {
    //   method: "POST",
    //   // body: JSON.stringify(item),
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   }
    // })
    // console.log(response);

    // axios.get("http://192.168.1.13:3232/api/signin", formValues
    // )

    //   .then(res => console.log(res)).catch(err => console.log(err))

    // axios.get("http://192.168.1.13:3232/api/signin", formValues, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer'
    //   },
    // })
    //   .then((response) => {
    //     console.log('response', response.data)

    //   })
    //   .catch((error) => {
    //     alert('error', error.response)


    //   })








  };



  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit)
      console.log(formValues);
  }, [formErrors])



  const validate = (values) => {
    const errors = {}
    // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

    if (!values.email) {
      errors.email = "email is required!"
    } else if (!values.email) {
      errors.email = "This is not valid email"
    }

    if (!values.password) {
      errors.password = "Password is required!"
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors
  }

  return (


    <div className="wrapper">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="text-center mt-4 name"> LinkedIn </div>
      <form className="p-3 mt-3" >
        <div className="form-field d-flex align-items-center" >
          <span className="far fa-user"></span>
          <input type="text" name="email" id="email" placeholder="Email" value={formValues.email}
            onChange={handleChange} />
        </div>
        <div><Typography style={{color: "red"}}>{formErrors.email}</Typography></div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input type="password" name="password" id="password" placeholder="Password" value={formValues.password}
            onChange={handleChange} />
        </div>
        <div><Typography style={{color: "red"}}>{formErrors.password}</Typography></div>
        <button className="btn mt-3" onClick={handleClick}>Login</button>
      </form>
      <div className="text-center fs-6">
        <Link to="./navbar">Forget password?</Link> or <a href="#">Sign up</a>
      </div>
    </div>




  );
}

export default Login