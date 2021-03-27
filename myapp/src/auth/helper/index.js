const API="http://localhost:8000/api/";


export const register=user=>{
    console.log(user);
    return fetch(`${API}signup`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
}

export default register;

export const login=user=>{
    return fetch(`${API}signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    }).then(response=>{
        //console.log(response.json());
        return response.json();
    })
    .catch(err=>console.log(err))
}


export const authenticate=(data,next)=>{
    
    if(typeof window!==undefined)
    {
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}


export const Logout=next=>{
    if(typeof window!==undefined)
    {
        localStorage.removeItem("jwt");
        next();
        return fetch(`${API}signout`,{
            method:"GET",
        }).then(response=>
            console.log("Logout Success"))
        .catch(err=>console.log(err))
    }
}

export const isAuthenticated=()=>{
    if(typeof window==undefined)
    {
        return false;
    }
    if(localStorage.getItem("jwt"))
    {
        return JSON.parse(localStorage.getItem("jwt"));
    }else{
        return false;
    }
}