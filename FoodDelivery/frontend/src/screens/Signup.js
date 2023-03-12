import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios  from "axios"
export default function Signup() {
    const [Credentials,setcredentials] = useState({
        name:"",
        password:"",
        email:"",
        location:""
    })
    const update=(event)=>
    {
        setcredentials({...Credentials,[event.target.name]:event.target.value})
    }

    // const [name,setname] = useState("");
    // const [password,setpassword] = useState("");
    // const [email,setemail] = useState("");
    // const [location,setlocation] = useState("");
    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            axios.post("http://localhost:5000/api/createuser",{
             Credentials
            })
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <div className='container'>
                <form  action="POST">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Username</label>
                        <input type="text"  className="form-control" name="name" onChange={update} value={Credentials.name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={Credentials.email} onChange={update} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">location</label>
                        <input type="text" className="form-control"  name="location" onChange={update} value={Credentials.location} />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control"  name="password" onChange={update} value={Credentials.password}/>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </div>
    )
}
