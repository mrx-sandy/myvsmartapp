import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mob_no: '',
        address: '',
        password: '',
        cpassword: ''
    });
    console.log(formData)
    const onInputChange = (e) => {
      
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        fetch('https://vsmart.ajspire.com/api/userregister', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Registered Successfully!");
      })
      
        .catch((error) => {
            console.log("Error", error);
        });
    };

    return (<div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
              <ToastContainer />

  <div className="user-form-logo">
    <a href="/"><img src="https://vsmart.ajspire.com/images\logo1.png" alt="logo" /></a>
  </div>
  <div className="user-form-card">
    <div className="user-form-title">
      <h2>Join Now!</h2>
      <p>Setup A New Account In A Minute</p>
    </div>
    <div className="user-form-group">
      <img style={{width: '100px'}} className="responsiv" src="https://vsmart.ajspire.com/images\images.jpg" alt />
      <form action="/register" method="POST" className="user-form">
        <input type="hidden" name="_token" defaultValue="HV4xRRmiDs07Lv0jijqCv5duvcsUvE73WDAL2yTV" />                                <div className="form-group">
          <span>Name</span>
          <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" onChange={(e)=>onInputChange(e)}  />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input type="email" className="form-control" name="email" placeholder="Enter your email" onChange={(e)=>onInputChange(e)}  />
        </div>
        <div className="form-group">
          <span>Mobile No</span>
          <input type="number" className="form-control" name="mob_no" placeholder="Enter your Number"  onChange={(e)=>onInputChange(e)} />
        </div>
        <div className="form-group">
          <span>Address</span>
          <input type="text" className="form-control" name="address" placeholder="Enter your address" onChange={(e)=>onInputChange(e)} />
        </div>
        <div className="form-group">
          <span>Password</span>
          <input type="password" className="form-control" name="password" placeholder="Enter your password"onChange={(e)=>onInputChange(e)} />
        </div>
        <div className="form-group">
          <span>Password Confirm</span>
          <input type="password" className="form-control" name="confirm_password" placeholder="Enter repeat password" onChange={(e)=>onInputChange(e)} />
        </div>
        {/* <div className="form-group">
          <span>Select Franchise</span>
          <select name="franchise_id" id="order" className="form-control select2" data-live-search="true">
            <option value selected>Choose Franchise</option>
            <option value={2059 }>
              Pimple Gurav Branch ,
              Maharashtra colony, Galli No-2,Amarnath Family Restaurant, Near Kalpataru Society,Pimple-Gurav-411061
            </option>
            <option value={2058 }>
              Indapur Branch ,
              Ingale Peth, near Bhargavrao Garden,Old Kacheri road,Indapur -413106
            </option>
            <option value={2054 }>
              Wai Branch ,
              Songirwadi,Bavdhan naka,Wai-412803
            </option>
            <option value={2 }>
              Satara Branch ,
              Satara
            </option>
          </select>
        </div> */}
        <div className="form-check mb-3"><input className="form-check-input" type="checkbox" defaultValue id="check" /><label className="form-check-label" htmlFor="check">Accept all the <a href="#">Terms &amp; Conditions</a></label></div>
        <button className="glow-on-hover" type="submit" onClick={(e)=>onSubmit(e)}><h3>Register</h3></button>      </form>
    </div>
  </div>
  <div className="user-form-remind">
    <p>Already Have An Account?<a href="/user-login">login here</a></p>
  </div>
  <div className="user-form-footer">
    <p> <a target="blank" href="/"> Vs Mart </a>| © Copyright by <a target="blank" href="https://www.ajspire.com">Ajspire Technologies Pvt.Ltd</a></p>
  </div>
</div>

    );
}

export default Register;
