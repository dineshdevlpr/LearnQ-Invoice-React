import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import loader from '../../loader.svg'


export default function Create() {

    // invoiceNumber, tutorFName, tutorLName, tutorEmail, studentFName, studentLName, studentEmail, classTitle, startTime, endTime, feePerHour, discount, createdOn

    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [tutorFName, setTutorFName] = useState("");
    const [tutorLName, setTutorLName] = useState("");
    const [tutorEmail, setTutorEmail] = useState("");
    const [studentFName, setStudentFName] = useState("");
    const [studentLName, setStudentLName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [classTitle, setClassTitle] = useState("");
    const [startTime , setStartTime] = useState("");
    const [endTime , setEndTime] = useState("");
    const [feePerHour, setFeePerHour] = useState("");
    const [discount, setDiscount] = useState("");
    const [createdOn, setCreatedOn] = useState("");

    
    var [isLoading , setIsLoading] = useState(false)

    // const authToken = localStorage.getItem("authToken")
    const history = useHistory();

    // if (!authToken){
    //     alert("No Token Found. Try Log in.")
    //     history.push("/login")
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        await fetch("https://learnq-invoice.herokuapp.com/invoice/createinvoice", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
            invoiceNumber,
            tutorFName,
            tutorLName,
            tutorEmail,
            studentFName,
            studentLName,
            studentEmail,
            classTitle,
            startTime,
            endTime,
            feePerHour,
            discount,
            createdOn}),
        headers: {
          "Content-type": "application/json",
        //   "Authorization" : authToken
        },
      })
      .then(response => response.json())
      .then(data => {
        alert("Invoice Successfully Created")
        history.push("/")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
    
    }

    return (
        <>
        {isLoading ? (<div className="text-center"><img src={loader} alt='fetching data'/></div>) : (<div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Create Invoice</h3>
                                <div className="form-group">
                                    <label for="invoiceNumber" className="text-info">Enter an unique Invoice Number</label><br/>
                                    <input type="text" id="invoiceNumber" name="invoiceNumber" required onChange={(e) => setInvoiceNumber(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="tutorFName" className="text-info">Enter Tutor's First Name</label><br/>
                                    <input type="text" id="tutorFName" name="tutorFName" required onChange={(e) => setTutorFName(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="tutorLName" className="text-info">Enter Tutor's Last Name</label><br/>
                                    <input type="text" id="tutorLName" name="tutorLName" required onChange={(e) => setTutorLName(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="tutorEmail" className="text-info">Enter Tutor's Email ID</label><br/>
                                    <input type="email" id="tutorEmail" name="tutorEmail" required onChange={(e) => setTutorEmail(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="studentFName" className="text-info">Enter Student's First Name</label><br/>
                                    <input type="text" id="studentFName" name="studentFName" required onChange={(e) => setStudentFName(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="studentLName" className="text-info">Enter Student's Last Name</label><br/>
                                    <input type="text" id="studentLName" name="studentLName" required onChange={(e) => setStudentLName(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="studentEmail" className="text-info">Enter Student's Email ID</label><br/>
                                    <input type="email" id="studentEmail" name="studentEmail" required onChange={(e) => setStudentEmail(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="classTitle" className="text-info">Enter Class Title</label><br/>
                                    <input type="text" id="classTitle" name="classTitle" required onChange={(e) => setClassTitle(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="startTime" className="text-info">Select Class Start Time</label><br/>
                                    <input type="time" id="startTime" name="startTime" required onChange={(e) => setStartTime(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="endTime" className="text-info">Select Class End Time</label><br/>
                                    <input type="time" id="endTime" name="endTime" required onChange={(e) => setEndTime(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="feePerHour" className="text-info">Enter Fee Per Hour</label><br/>
                                    <input type="number" step="any" id="feePerHour" name="feePerHour" required onChange={(e) => setFeePerHour(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="discount" className="text-info">Enter Discount in Percentage</label><br/>
                                    <input type="number" step="any" id="discount" name="discount" required onChange={(e) => setDiscount(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="createdOn" className="text-info">Select Date</label><br/>
                                    <input type="date" id="createdOn" name="createdOn" required onChange={(e) => setCreatedOn(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>) }
            
        </>
    )
}