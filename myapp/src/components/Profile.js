import React, { useState } from 'react';
import { Redirect } from 'react-router';

import dp1 from "../assets/dp1.jpg"
import { authenticate, isAuthenticated, Logout, update } from '../auth/helper';
import "./style1.css"

const Profile=()=>{
    const [values, setValues]= useState({
        first_name:JSON.parse(localStorage.getItem("jwt")).user.first_name,
        last_name:JSON.parse(localStorage.getItem("jwt")).user.last_name,
        address:JSON.parse(localStorage.getItem("jwt")).user.address,
        city:JSON.parse(localStorage.getItem("jwt")).user.city,
        telephone:JSON.parse(localStorage.getItem("jwt")).user.telephone,
        mobile:JSON.parse(localStorage.getItem("jwt")).user.mobile,
        img:JSON.parse(localStorage.getItem("jwt")).user.img,
        email:JSON.parse(localStorage.getItem("jwt")).user.email

    })

    const loggingOut=()=>{
        Logout();
    }
    

    const onSubmit=event=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('img', values.img);
        setValues({...values,error: false,loading: true})
        const {first_name,last_name, city, address, telephone, mobile, email, img }=values;
        update( {email,first_name,last_name, city, address, telephone, mobile})
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
            .catch(err=>console.log("update failed"));
    }

    const handleChange=name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }
    const handlePhoto = (e) => {
        setValues({...values, img: e.target.files[0]});
    }
    
    

    if(isAuthenticated()){
    return(<div>
        <section id="profile">
    <div class="account-pg">
        <div class="profile">
            <div class="profile-det">
                <img src={values.img} />
                <h2>{values.first_name}</h2>
                <h2>{values.last_name}</h2>
                <p>{JSON.parse(localStorage.getItem("jwt")).user.email}</p>
                
            </div>
            <br/>
            <br/>
            <br />
            <br />
            <ul>
                <li><a href=""class="active">Account <span></span></a></li>
                <li><a href="">Change Password<span></span></a></li>
                <li><a href="">Food Donated<span></span></a></li>
                <li><a href="">Delete Account<span></span></a></li>
                <li><a href="/" onClick={loggingOut}>Logout<span></span></a></li>
            </ul>
        </div>
        <div class="account-det"><br />
            <br /><br /><br /><br />
            <h2>Enter Account Details:</h2>
    <div class="billing-detail">
    <form  class="checkout" encType="multiport/form-data">
        <div class="form-inline">
            <div class="form-grp">
            <label>First Name</label>
             <input type="text" name="fname" value={values.first_name} onChange={handleChange("first_name")}/>  
        </div>
        <div class="form-grp">
            <label>Last Name</label>
             <input type="text" name="lname" value={values.last_name} onChange={handleChange("last_name")}/>  
        </div>
        </div>
        
        <div class="form-grp">
            <label>City</label>
            <input type="text" name="lname" value={values.city} onChange={handleChange("city")}/>
        </div> 
        
        
        <div class="form-grp">
            <label>Address</label>
            <input name="address" text="text" value={values.address} onChange={handleChange("address")}/> 
        </div>
        <div class="form-inline">					
            <div class="form-grp">
                <label>Telephone</label>
                <input type="text" id="tel" name="tel" minlength="11" maxlength="11" value={values.telephone} onChange={handleChange("telephone")}/>
            </div>
            <div class="form-grp">
                <label>Mobile</label>
                <input type="text" id="mobile" name="mobile" minlength="11" maxlength="11" value={values.mobile} onChange={handleChange("mobile")}/>
            </div>
        </div>
        <br />
        
        <div class="form-grp">
            <label>Set DP</label>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />
        </div>
        <div class="form-grp">
            <label></label>
            <input type="submit" id="update" name="update" value="Update" onClick={onSubmit}/>
        </div>
    </form>
</div>
</div>
</div>
</section>
    </div>);
    }
    else{
        return <Redirect to="/" />
    }
}
export default Profile;