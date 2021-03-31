import React from 'react';
import "./hotel.css";

const panel_hotel=()=>{
    return(<div>
    <section id="org">
    <div class="container2">
    <div class="title">Registration Form Of Hotel's </div>
    <div class="content2">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
          <h6>Full Name(organisation name)</h6>
            
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div class="input-box">
            <h6>Location</h6>
            <input type="text" placeholder="Enter your location" required />
          </div>
          <div class="input-box">
          <h6>Email</h6>
            
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div class="input-box">
          <h6>Phone Number</h6>
            
            <input type="text" placeholder="Enter your number" required/>
          </div>
         
          <div class="input-box">
          <h6>Password</h6>
            
            <input type="text" placeholder=" password" required />
          </div>
        </div>
        
        <div class="button">
          <input type="submit" value="Register"/>
        </div>
      </form>
    </div>
  </div>
</section>
    </div>)
}
export default panel_hotel;