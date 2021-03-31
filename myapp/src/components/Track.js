import React, { useEffect, useState } from 'react';

const Track=()=>{

    const [data,setData]=useState("");
    useEffect(()=>{
        echoAr();
    })
    var data2;
    const echoAr=()=>{
        fetch(`https://console.echoar.xyz/query?key=lucky-sound-7602`,{
            method:"GET",
        }).then(response=>response.json()
    ).then(data1=>setData(data1)).catch(err=>console.log(err));
    }

    return(<div>
    
    </div>);
}
export default Track;