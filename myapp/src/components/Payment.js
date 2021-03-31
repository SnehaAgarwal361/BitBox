import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { isAuthenticated } from '../auth/helper';
import Setget from '../SimpleStorage.json'
import "./Payment.css";
import {Redirect} from 'react-router-dom';


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
    
    let address='0xF427d37DC53b4b2E68a569FdE31741D59bBB5649';
    
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
      alert(`${amount} Successfully Donated`)
      
    }

    const getAmt=event=>{
      event.preventDefault();
      setget.methods.get().call().then((result)=>setAmot(Web3.utils.fromWei(result, 'ether')));
      alert(`${amt} Successfully Donated`)
    }
if(isAuthenticated)
{
    return (<div>
    
    
    <section id="background">
<div ng-app="app" class="container">
  <form ng-controller="PaymentFormCtrl" class="payment-form" name="paymentForm">
    <div class="notification">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAABJdJREFUWAnNWN1rHFUUP/fuuJsQP2qatrhQxCbs5rFaFezLtn4QLRWFCtIq/gXNqiT1wY8qVPtgEwq7/Q/UBsGID9IaqSbrQ9GH4osP2ZhYSzEQP8BUajbr7lx/vzs742Y6003KLmYgmbnnnnN+vznn3nPPrJINXDumTvXc2ZUa0qIOiJJ+JZIWo9LWhTKLRmRRjCy4Ys5dq6xOLQ0du75e9/DV+hooFe53RL1lRD2llHS1thAxRipKzPmamBPzufz3rWxuSuS+r8buTTpd7+Htj0BRGTEubheVcT8TV12q1tXiX4nfFwlyR70vnUyYtGizxyj9LKjsVaI0ogQzOVutVd64/NjolThCsUQyM0W8vZpABO7i24FGobZSGV8YOvZrnLNmef/Uqe1Od9cIUpdnFOFj2RhzeG7f8PlmPf85kshgqTBilHrfvpExkzWpvrqQG7nqG23k3l8a3+lI8jRe6hAjqox5bTaXHw/7uIEISSCiYwypct03Z/flT4aNbmU8OFN43Wj9LgCxdNzRMJk1RGw6tHwOXRBHGHPDH98KaJxNplR8nunmUsZqO9icJu0bcWHaNYFwMBLtJkEc+qRvppxYxPTxHf+Bu8NbmGayvI50DHxdyDmOGsUi3I0AXkcIvzP1+snyo6+UfZ9Rd6Y6Wyo+wDVjd6TIi9SzEWGd4Bbl7uDCjHLQLIOjlx1HzyCFB5HbBCK9A2ReUonED9npwnPNulHPxPB2ohyx2FCyRBJKHbeLCFu01e7IXDi9C7pjAF+q1d1HZnPD6XJuuLdu3ENGyd+i9QfZL4tetY1iAZnFABYxWSipplm2sT+e5NZinYixDcTqNmc/3t5xRZ2Y35//tjFhfszlP4Xft23NSKknAoOYB2IRk9WaHDTPDhrDycX1FCvUl+3Wt2t+CWOYuvnZyhTOoBaXh4UqDWx7ftkDDEa2bLcwbve0j0kO+JN+C4Czo91ALf35mDzJB78pYrupTLUq2Z8ePzoXZ7xt+p3be3XfWVTcnShISdSCCnTrIf0E8s40V7EQr/5ZWTl8s1Zg14UzmWRSgG/mHNtPwMo/RUOOg2Gvuvsh5PNpqOLy/geTTQ8g6I92b0klH14SmfYF4Tsxt0ofD5N0UFl7r3UHHsIGHKMkB7pR81GyVjbNmFgjxvYT//T03BPlrJOyABMc2LhYIrap6SRqhG8fkxw0e0yrg84qQrezIi0PWgBw0Gx0OfDau87ihr2jOD5DGTlodtv2AEKPyfYurNypsYdl9hKbHLTd58p8wR7B9phxyK57GQddLW76Bjl1aRNzEYuY7PTJwW5ZHsUJpS9hvazWZDUTdwIPnCts091qa4zvNWJ3xfwxfyD/2xphY+D1sak5lJwUTu09/NwIake2dOZDFKwX0MRN4lhv2VNEAaxXhn7mEzZGSMtH5dzR/xojOuB3ByaWqcBGd71ON6pH3w0Sy8T07YOIULApmmcSYVfN7w6wA2k10c7INCIxYX0Do7mDJ/aaiFDAa1N8YHlUGmn6vz85fTKb4iPcJ8O7V2fUcTbZXn/bPBv9jB3Yvp8lwhCd/KHmXykoU2GwolhLAAAAAElFTkSuQmCC"  class="notification__icon"/>
      <span class="notification__text">
      We do not store your payment data, but transfer it directly via encrypted payment system
      </span>
    </div>
    <div class="card-type clearfix">
      
      <div class="card-type__icons">
      <h6>Powered By Ethereum</h6>
      </div>
    </div>
    <input type="text" class="card-input card-input--full" placeholder="Card number" ng-model="card.number" value={account} readOnly card-number/>
    <input type="text" class="card-input card-input--full" placeholder="Name of holder" ng-model="card.holder" card-holder value={amount} onChange={handleChange} />
    
    <button class="payment-form__button" ng-disabled="paymentForm.$invalid" onClick={setAmt}>
      DONATE
    </button>

    <button class="payment-form__button" ng-disabled="paymentForm.$invalid" onClick={getAmt}>
      Check Donated Amount
    </button>
    <br /><br />
    <div class="payment-form__agreement">
       your can pay for ₹50: FOR 2 
   Times meals for needy person.
    </div>
  </form>
</div>

</section>
    </div>);
    
}
else{
  return <Redirect to="/" />;
}
}
export default Payment;