import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

export default function Login() {
    let navigate=useNavigate()
    const [Credentials,setcredentials] = useState({
        password:"",
        email:""

    })

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const response =  axios.post("http://localhost:5000/api/loginuser",{
          Credentials
        }).then((response)=>{
          if(response.data.success == "true")
          {
                localStorage.setItem("authtoken",response.data.authtoken);
               navigate("/");
          }
          else{
            alert("incorrect email or password");
          }
        })

        // const response = await fetch("http://localhost:5000/api/loginuser",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
        //         email:Credential.email,
        //         password:Credential.password,
        //     })
        // })
        // const data = await response.json();
        // // if(!json.success){
        // //     alert("Enter valid crendentials");
        // // }
        // if(data.success){
        //   alert("Enter valid crendentials");
        // }
    }
    

    const update=(event)=>
    {
        setcredentials({...Credentials,[event.target.name]:event.target.value})
    }

    return (
        <div>
            <div className='container'>
                <form action="POST">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={Credentials.email} onChange={update} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control"  name="password" onChange={update} value={Credentials.password}/>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>New user</Link>
                </form>
            </div>
        </div>
    )
}

