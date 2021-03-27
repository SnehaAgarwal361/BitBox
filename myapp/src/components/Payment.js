import React, { useEffect, useState } from 'react';
import {Button,Form} from 'react-bootstrap';
import Web3 from 'web3';
import Setget from '../SimpleStorage.json'


const Payment=()=>{

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  });

      const loadWeb3=()=> {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          window.ethereum.enable()
        }
        else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
      }
    
      const loadBlockchainData=()=> {
        const web3 = window.web3
    // Load account
    web3.eth.getAccounts().then(result=>setAccount(result[0]))
    
    // Network ID
    
    let address='0x56d7cbc9948F6BB3B49E71d06AF53a344a5C9B79';
    
    console.log(address);
    if(address) {
      setget=new web3.eth.Contract(Setget.abi, address)
      
      console.log(setget);
      setget.options.address = address;
      
    } else {
      window.alert('Setget contract not deployed to detected network.')
    }
}


    const [amount, setAmount]=useState(0);
    const [account, setAccount]=useState("");
    const [amt,setAmot]=useState("");
    let setget;
    const handleChange=event=>{
        console.log(event.target.value);
        setAmount(event.target.value);
    }

    const setAmt=event=>{
      event.preventDefault();
      const weiValue =new Web3().utils.toWei(amount, 'ether');
      setget.methods.set(weiValue).send({
        from: account
      })
      alert('Property Booked Successfully')
      
    }

    const getAmt=event=>{
      event.preventDefault();
      setget.methods.get().call().then((result)=>setAmot(Web3.utils.fromWei(result, 'ether')));
      
    }

    return (<div>
    
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Payment</Form.Label>
    <h1>{account}</h1>
    <h2>{amt}</h2>
    <Form.Control type="text" placeholder="Enter email" value={amount} onChange={handleChange}/>
    
  </Form.Group>

  <Button variant="primary" type="submit" onClick={setAmt}>
    Set
  </Button>
  <Button variant="primary" type="submit" onClick={getAmt}>
    Get
  </Button>
</Form>
    </div>);
}
export default Payment;