// Register.js

import React, { useState} from "react";
import "./register.css";
import { Link, useNavigate} from "react-router-dom";
import { register } from '../../services/api';

export const Register = (props) => {
    const {setisLoggedin} = props;
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const nav = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email);

        const register_response = await register(email, pass,name,phoneNumber);
        if(register_response.msg==="Register sucessful"){
            //setisLoggedin(true)
            nav("/login")
        }
        else{
            alert("Unable to login: "+register_response.msg);
        }
    }

    return (
        <div className="auth-form-container-register">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="123-456-7890" id="phoneNumber" name="phoneNumber" />

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <button type="submit">Register</button>
            </form>
            <Link to="/login"> <button className="link-btn" >Already have an account? Login here.</button></Link>
        </div>
    );
}
