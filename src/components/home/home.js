import React from 'react'
import { Link } from "react-router-dom";
import "./home.css"


function Home() {

    return (
        <>
            <div className="container">
                <h1>Welcome to the Invoice Landing Page</h1>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12 mt-5">
                        <div className="form-group">
                                    <Link to="/createinvoice" className="text-muted"><h3>▶ Create Invoice</h3></Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <Link to="/createdinvoices" className="text-muted"><h3>▶ View Created Invoices</h3></Link><br/> <br/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home