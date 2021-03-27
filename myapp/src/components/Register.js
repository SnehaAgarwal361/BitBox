import React, { useState } from 'react';
import register from "../auth/helper/index";
import {Redirect} from 'react-router-dom';
const Register=()=>{
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        error:"",
        success:false
    });

    const {username, email, password, error, success}=values;

    const handleChange=name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }

    const onSubmit=event=>{
        event.preventDefault();
        setValues({...values,error:false});
        register({username,email,password})
        .then(data=>{
            if(data.error)
            setValues({...values, error:data.error, success:false})
            else
            setValues({
                ...values,
                username:"",
                email:"",
                password:"",
                error:"",
                success:true});
                <Redirect path="/Login"></Redirect>
        }
        )
        .catch(err=>console.log("Error in Signup"));
    };

    const performRedirect=()=>{
        if(success)
        {
            return <Redirect to="/Login" />;
        }
        else{
            return <Redirect to="/Register" />;
        }
        
        
    }

    return(<div>
        <div className="bg-img">
        <div className="nav">
            <h1>Food Finders</h1>
            <ul>
                <li><a href="#">Home</a> </li>
                <li><a href="#">Food</a> </li>
                <li><a href="#">For NGO</a> </li>
                <li><a href="#">Donate</a> </li>
                <li><a href="#">Team</a> </li>
                <li><a href="/Login">Login</a> </li>
                <li><a href="/Register">Register</a> </li>
            </ul>
        </div>
        <div className="content">
            <header>Signup Form</header>
            <form action="#">
            <div className ="field space">
                    <span className="fas fa-user"></span>
                    <input type="text" required placeholder="Username" value={username} onChange={handleChange("username")}/>
                </div>
                <div className ="field space">
                    <span className="fas fa-user"></span>
                    <input type="text" required value={email} id="" placeholder="Email" onChange={handleChange("email")} />
                </div>
                <div className ="field">
                    <span className="fas fa-lock"></span>
                    <input type="password" class="password" required value={password} placeholder="Password" onChange={handleChange("password")} />
                    <span className="show">SHOW</span>
                </div>
                
                <div className ="field">
                    <input type="submit" className="x" value="SIGNUP" onClick={onSubmit} />
                </div>
                <div className="login">Or Signup with</div>
                <div className="link">
                    <div className="facebook">
                        <i className="fab fa-facebook-f"><span>Facebook</span> </i>
                    </div>
                    <div className="google">
                        <i className="fab fa-google"><span>Google</span> </i>
                    </div>
                </div>
                {performRedirect()}
            </form>
        </div> 
    </div>
    </div>)
}
export default Register;