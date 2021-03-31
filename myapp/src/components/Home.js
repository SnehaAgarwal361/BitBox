import React from 'react';
import a from '../assets/6.jpg';
import b from '../assets/12.jpg';
import c from '../assets/13.jpg';
import d from '../assets/18.jpg';
import e from '../assets/20.jpg';
import f from '../assets/Feeding-India_Blogpost_Artboard-2.png';
import "./home.css";
import { isAuthenticated } from '../auth/helper/index';
import Avatar from '@material-ui/core/Avatar';
import {Dropdown} from 'react-bootstrap';


const Home=()=>{

    if(isAuthenticated())
        {
            return(<div>
                <div className="banner">
                    <div className="nav">
                        <h1>Food Finders</h1>
                        <ul>
                            <li><a href="/">Home</a> </li>
                            <li><a href="/Food">Food</a> </li>
                            <li><a href="#">For NGO</a> </li>
                            <li><a href="/Donate">Donate</a> </li>
                            <li><a href="/Team">Team</a> </li>
                            <li><a href="#">Location</a> </li>
                            <li><Avatar><a href="/Profile">V</a></Avatar></li>
                        </ul>
                    </div>
            
                    <div className="content1">
                        <h1>Feed Every Child</h1>
                        <p>
                            Reliable food and nutrition for underserved children across India
                        </p>
            
                        <div>
                            <button type="button" ><a href="/Donate">Donate Now</a> </button>
                        </div>
            
            
                    </div>
                  
            
                </div>
            
                <div className="mission">
                    <h1>OUR MISSION: ZERO HUNGER</h1><br /><br />
                    <p>Food Finders will work towards the joint mission of ‘better food for more people’
                        <br /> ‘zero hunger’ to take the dream of ending hunger a step closer to reality.
                    </p>
                </div>
            
                <div className="container-fluid">
                    <h2>Drivers of our mission</h2>
                    <br /><br />
                    <div className="box">
                        <img src={c} alt="image" />
                        <div>
                            <h3>Hotels & Restaurants</h3>
                            <p>They help us to provide extra leftover food which can be served to needy ones.</p>
                        </div>
            
                    </div>
                    <br /><br />
                    <div className="box">
                        <img src={d} alt="image" />
                        <div>
                            <h3>Weddings</h3>
                            <p>Provide reliable food that can be accessible by poor people.</p>
                        </div>
            
                    </div>
                    <br /><br />
            
                    <div className="box">
                        <img src={a} alt="image" />
                        <div>
                            <h3>NGO</h3>
                            <p>Our NGO partners helps in distribution of food in time to undernourished and malnourished.</p>
                        </div>
            
                    </div>
                    <br /><br />
                    <div className="box">
                        <img src={e} alt="image" />
                        <div>
                            <h3>Volunteering</h3>
                            <p>Our Vounteering initiatives help us amplify our impact and spread the word about the cause..</p>
                        </div>
            
                    </div>
                    <div className="clearfix"></div>
                </div>
            
                <div className="para">
                    <h1>Support Us</h1>
                    <p>Your contribution will go a long way in ensuring a reliable supply of meals for the needy ones as welll as our daily wager
                         community during the current lockdowns in the region.</p><br />
                         <button type="button" className="but"><span></span>Donate Now </button>
            
                </div>
            
                <div className="image">
                    <img src={f} alt="" style={{"width":"100%"}}/>
            
                </div>
            
               
            
                <br></br><br></br>
            
                <footer className="footer">
            
                        
                    <div className="foot">                              
                        <address className="address">
                            <h3>Food Finders</h3>
                            <p>Ronihi Sector14, New Delhi</p>
                            <p>Email: <a href="mailto:xxxxxxxx">foodfinders@gmail.com</a></p>
                            <p>Phone: <a href="tel:xxxxxxxx">9087654321</a></p>
            
                        </address>
            
                    </div>
                    <div className="foot">
                        <h3>Who we are </h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="foot">
                        <h3>Get involved</h3>
                        <ul>
                            <li><a href="#">Donate</a></li>
                            <li><a href="#">Request Food</a></li>
                            <li><a href="#">NGO</a></li>
                            <li><a href="#">Support Us</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>
                    <div className="foot">
            
                        <h3>Social</h3>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i>
                                Facebook</a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i>
                                Twitter</a></li>
                            <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                LinkedIn</a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i>
                                Instagram</a></li>
                        </ul>
                    </div>
                
                    <div className="clearfix"></div>
                 
                </footer>
                
                
                <div className="copy">
                    <p><small>Copyright &copy; 2021. All rights are reserved</small></p>
                </div>
             
                
            </div>
            )
        }
        else{
            return(<div>
                <div className="banner">
                    <div className="nav">
                        <h1>Food Finders</h1>
                        <ul>
                            <li><a href="/">Home</a> </li>
                            <li><a href="/Food">Food</a> </li>
                            <li><a href="#">For NGO</a> </li>
                            <li><a href="/Donate">Donate</a> </li>
                            <li><a href="/Team">Team</a> </li>
                            <li><a href="/Login">Login</a> </li>
                            <li><a href="/Register">Register</a> </li>
                            <li><a href="/Hotel_Restaurant_R">Register Organisation</a> </li>
                            <li><a href="/Register">Register NGO</a> </li>
                        </ul>
                    </div>
            
                    <div className="content1">
                        <h1>Feed Every Child</h1>
                        <p>
                            Reliable food and nutrition for underserved children across India
                        </p>
            
                        <div>
                        <button type="button" ><a href="/Donate">Donate Now</a> </button>
                        </div>
            
            
                    </div>
                  
            
                </div>
            
                <div className="mission">
                    <h1>OUR MISSION: ZERO HUNGER</h1><br /><br />
                    <p>Food Finders will work towards the joint mission of ‘better food for more people’
                        <br /> ‘zero hunger’ to take the dream of ending hunger a step closer to reality.
                    </p>
                </div>
            
                <div className="container-fluid">
                    <h2>Drivers of our mission</h2>
                    <br /><br />
                    <div className="box">
                        <img src={c} alt="image" />
                        <div>
                            <h3>Hotels & Restaurants</h3>
                            <p>They help us to provide extra leftover food which can be served to needy ones.</p>
                        </div>
            
                    </div>
                    <br /><br />
                    <div className="box">
                        <img src={d} alt="image" />
                        <div>
                            <h3>Weddings</h3>
                            <p>Provide reliable food that can be accessible by poor people.</p>
                        </div>
            
                    </div>
                    <br /><br />
            
                    <div className="box">
                        <img src={a} alt="image" />
                        <div>
                            <h3>NGO</h3>
                            <p>Our NGO partners helps in distribution of food in time to undernourished and malnourished.</p>
                        </div>
            
                    </div>
                    <br /><br />
                    <div className="box">
                        <img src={e} alt="image" />
                        <div>
                            <h3>Volunteering</h3>
                            <p>Our Vounteering initiatives help us amplify our impact and spread the word about the cause..</p>
                        </div>
            
                    </div>
                    <div className="clearfix"></div>
                </div>
            
                <div className="para">
                    <h1>Support Us</h1>
                    <p>Your contribution will go a long way in ensuring a reliable supply of meals for the needy ones as welll as our daily wager
                         community during the current lockdowns in the region.</p><br />
                         <button type="button" className="but"><span></span>Donate Now </button>
            
                </div>
            
                <div className="image">
                    <img src={f} alt="" style={{"width":"100%"}}/>
            
                </div>
            
               
            
                <br></br><br></br>
            
                <footer className="footer">
            
                        
                    <div className="foot">                              
                        <address className="address">
                            <h3>Food Finders</h3>
                            <p>Ronihi Sector14, New Delhi</p>
                            <p>Email: <a href="mailto:xxxxxxxx">foodfinders@gmail.com</a></p>
                            <p>Phone: <a href="tel:xxxxxxxx">9087654321</a></p>
            
                        </address>
            
                    </div>
                    <div className="foot">
                        <h3>Who we are </h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="foot">
                        <h3>Get involved</h3>
                        <ul>
                            <li><a href="#">Donate</a></li>
                            <li><a href="#">Request Food</a></li>
                            <li><a href="#">NGO</a></li>
                            <li><a href="#">Support Us</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>
                    <div className="foot">
            
                        <h3>Social</h3>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i>
                                Facebook</a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i>
                                Twitter</a></li>
                            <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                LinkedIn</a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i>
                                Instagram</a></li>
                        </ul>
                    </div>
                
                    <div className="clearfix"></div>
                 
                </footer>
                
                
                <div className="copy">
                    <p><small>Copyright &copy; 2021. All rights are reserved</small></p>
                </div>
             
                
            </div>)
        }
    
    
}
export default Home;