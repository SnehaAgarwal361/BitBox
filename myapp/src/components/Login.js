import React, { useState } from 'react';
import "./Styles.css"
import {Redirect} from 'react-router-dom';
import { isAuthenticated, login, authenticate } from '../auth/helper/index';

const Login=()=>{

    const [show,setShow]=useState(0);
    const showPass=()=>{
        if(show==0)
        setShow(1);
        else
        setShow(0);
    }

    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })

    const {email, password, error, loading, didRedirect}=values;
    const {user}=isAuthenticated();

    const handleChange=name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }

    const onSubmit=event=>{
        event.preventDefault();
        setValues({...values,error: false,loading: true})
        login({email,password})
            .then(data=>{
                if(data.error)
                setValues({...values,error: data.error,loading: false})
                else{
                    authenticate(data,()=>{
                        setValues({...values,didRedirect:true})
                        console.log(data);
                    })
                }
            })
            .catch(err=>console.log("signin failed"));
    }

    const performRedirect=()=>{
        if(didRedirect)
        {
            if(user&&user.role==1)
            {
                return <p className="text-white text-center">Redirect to admin</p>
            }
            else{
                return <Redirect to="/" />;
            }
        }
        if(isAuthenticated())
        {
            return <Redirect to="/" />
        }
        
    }
    if(show==0){
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
            <header>Login Form</header>
            <form action="#">
                <div className ="field space">
                    <span className="fas fa-user"></span>
                    <input type="text" required placeholder="Email or Phone"  value={email} onChange={handleChange("email")}/>
                </div>
                <div className ="field">
                    <span className="fas fa-lock"></span>
                    <input type="password" value={password} className="password" required placeholder="Password" onChange={handleChange("password")}/>
                    <span className="show" style={{"color":"#3498db"}} onClick={showPass}>SHOW</span>
                </div>
                <div className="pass">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className ="field">
                    <input type="submit" value="LOGIN" onClick={onSubmit}/>
                </div>
                <div className="login">Or Login with</div>
                <div className="link">
                    <div className="facebook">
                        <i className="fab fa-facebook-f"><span style={{"color":"white"}}>Facebook</span> </i>
                    </div>
                    <div className="google">
                        <i className="fab fa-google"><span style={{"color":"white"}}>Google</span> </i>
                    </div>
                </div>
                <div className="signup">Don't have account?
                    <a href="#">Signup Now</a>
                </div>
                <p className="text-white text-center">{JSON.stringify(values)}</p>
        {performRedirect()}
            </form>
        </div> 
    </div>
    </div>)}
    else{
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
                <header>Login Form</header>
                <form action="#">
                    <div className ="field space">
                        <span className="fas fa-user"></span>
                        <input type="text" required placeholder="Email"  value={email} onChange={handleChange("email")} />
                    </div>
                    <div className ="field">
                        <span className="fas fa-lock"></span>
                        <input type="text" className="password" value={password} required placeholder="Password" onChange={handleChange("password")} />
                        <span className="show" style={{"color":"#222"}} onClick={showPass}>Hide</span>
                    </div>
                    <div className="pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className ="field">
                        <input type="submit" value="LOGIN" onClick={onSubmit}/>
                    </div>
                    <div className="login">Or Login with</div>
                    <div className="link">
                        <div className="facebook">
                            <i className="fab fa-facebook-f"><span style={{"color":"white"}}>Facebook</span> </i>
                        </div>
                        <div className="google">
                            <i className="fab fa-google"><span style={{"color":"white"}}>Google</span> </i>
                        </div>
                    </div>
                    <div className="signup">Don't have account?
                        <a href="#">Signup Now</a>
                    </div>
                </form>
                <p className="text-white text-center">{JSON.stringify(values)}</p>
        {performRedirect()}
            </div> 
        </div>
        </div>)
    }
}
export default Login;