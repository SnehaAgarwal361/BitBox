import React, { useState } from 'react';
import {Form, Button,Navbar,Nav,FormControl, Container} from 'react-bootstrap';
import { food } from '../auth/helper';
import "./style.css"

const Food_collect=()=>{

const [values,setValues]=useState({
  amount:"",
  time:""
})
const handleChange=name=>event=>{
  setValues({...values,error:false, [name]:event.target.value})
}
const onSubmit=()=>{
  
}


if(JSON.parse(localStorage.getItem("jwt")).user.role==0)
{
    return(<div>
    <Container fluid>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Food Finders</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Amount of food" className="mr-sm-2" value={values.amount} onChange={handleChange("amount")}/>
      <FormControl type="text" placeholder="Time for the food to remain fresh" className="mr-sm-2" value={values.time} onChange={handleChange("time")}/>
      <Button variant="outline-success">Post</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </Container>
 <div className="card1">
        <div className="card-img"></div>
        <div className="card-text">
            
            <h2>Post 1</h2>
            <h3>HOTEL D-GRAND</h3>
            <p>Pilibhit Bypass Road Bareilly</p>
            <p>2kgs</p>
            <p>3hrs</p> 
            <div className="sub">
                <input type="submit" id="collect" nameName="collect" value="Collect Food"/>
            </div>
        </div>
        <div className="card-stats">
            <div className="stats">
                <div className="value">4<sup>m</sup></div>
                <div className="type">read</div>
            </div>
            <div className="stats border">
                <div className="value">512</div>
                <div className="type">views</div>
            </div>
            <div className="stats">
                <div className="value">4</div>
                <div className="type">comments</div>
            </div>
        </div>
    </div>
    <div className="card1">
        <div className="card-img2"></div>
        <div className="card-text">
            
            <h2>Post 2</h2>
            <h3>HOTEL RAJMAHAL</h3>
            <p>Pilibhit Bypass Road Bareilly</p>
            <p>5kgs</p>
            <p>6hrs</p> 
            <div className="sub">
                <input type="submit" id="collect" name="collect" value="Collect Food"/>
            </div>
        </div>
        <div className="card-stats1">
            <div className="stats">
                <div className="value">10<sup>m</sup></div>
                <div className="type">read</div>
            </div>
            <div className="stats border">
                <div className="value">670</div>
                <div className="type">views</div>
            </div>
            <div className="stats">
                <div className="value">6</div>
                <div className="type">comments</div>
            </div>
        </div>
    </div>
    <div className="card1">
        <div className="card-img3"></div>
        <div className="card-text">
            
            <h2>Post 3</h2>
            <h3>HOTEL SKYDECK</h3>
            <p>Stadium Road Haldwani</p>
            <p>7kgs</p>
            <p>3hrs</p> 
            <div className="sub">
                <input type="submit" id="collect" nameName="collect" value="Collect Food"/>
            </div>
        </div>
        <div className="card-stats2">
            <div className="stats">
                <div className="value">12<sup>m</sup></div>
                <div className="type">read</div>
            </div>
            <div className="stats border">
                <div className="value">40</div>
                <div className="type">views</div>
            </div>
            <div className="stats">
                <div className="value">6</div>
                <div className="type">comments</div>
            </div>
        </div>
    </div>
    </div>
  )
    }
}
export default Food_collect;