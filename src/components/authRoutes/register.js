import React, { useState } from 'react'
import {Link , useHistory} from "react-router-dom";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fetchData = await fetch("https://learnq-invoice.herokuapp.com/auth/register", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (fetchData.status === 200) {
        alert("Successfully Registered")
        history.push("/login")
    }else {
        console.error("Error Occured");
    }
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Register</h3>
                                <div className="form-group">
                                    <label for="email" className="text-info">Email:</label><br/>
                                    <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Password:</label><br/>
                                    <input type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                                <div className="form-group">
                                    <Link to="/login" className="text-muted">Already Registered ? Click here to Login</Link><br/> <br/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}