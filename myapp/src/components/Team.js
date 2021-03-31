import React from 'react';
import v from "../assets/vidit.jpeg";
import s1 from "../assets/sanskriti.jpeg";
import s2 from "../assets/sneha.jpeg";
import a from "../assets/arpit.jpg";
import "./team.css";

const Team=()=>{
    return(<div><div class="container4">
    <h1 class="heading"><span>Meet</span>Our Team</h1>
    <div class="profiles">
        <div class="profile">
            <img src={v} class="profile-img" alt="img"/>
            <h2>Vidit Singh Gautam</h2>
            <h3>Fullstack Developer</h3>
            <h3>Blockchain Developer</h3>
            <div class="sym">
                <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                
            </div>
         

        </div>

        <div class="profile">
            <img src={s1} class="profile-img"alt="img"/>
            <h2>Sanskriti Negi</h2>
            <h3>Frontend Developer</h3>
            <div class="sym">
                <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                
            </div>

        </div>

        <div class="profile">
            <img src={s2} class="profile-img" alt="img"/>
            <h2>Sneha Agarwal</h2>
            <h3>Frontend Developer</h3>
            <div class="sym">
                <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                
            </div>
        </div>

        <div class="profile">
            <img src={a} class="profile-img" alt="img"/>
            <h2>Arpit Garg</h2>
            <h3>Frontend Developer</h3>
            <div class="sym">
                <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                
            </div>

        </div>

    </div>
</div></div>);
}
export default Team;