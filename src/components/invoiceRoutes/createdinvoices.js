import { useState, useEffect } from "react";

export default function CreatedInvoices () {

    let [data, setdata] = useState([])
    // const authToken = localStorage.getItem("authToken")

  
    useEffect( () => {
        async function fetchData() {
        let fetchData = await fetch("https://learnq-invoice.herokuapp.com/invoice/createdinvoices", {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-type": "application/json",
            // "Authorization" : authToken
          },
        })
        let invoices = await fetchData.json();
       
        setdata([...invoices]);
    }
    fetchData();
    }, [])
    
    return <>
        <div className="container" id="List__Container">
            <div className="row">
                <div className=" col-lg-12 text-center mt-4 ">
                    <div className="card">
                        <div className="card-body">
                        <h1>List of Invoices Created</h1>
                        </div>              
                    </div>             
                </div>
            </div>
         <br/>
            <div class="row">
                {
                    data.map((obj) => {
                        return <div className="col-md-3 mt-2">
                            <div class="card  mb-3 d-flex align-items-stretch h-100" id="List__cards">
                                <div class="card-body text-dark">
                                    <h6 className="card-text"><b>Invoice Number : {obj.invoiceNumber}</b></h6>
                                    <h6 className="card-text"><b>Tutor's First Name : {obj.tutorFName}</b></h6>
                                    <h6 className="card-text"><b>Tutor's Last Name : {obj.tutorLName}</b></h6>
                                    <h6 className="card-text"><b>Tutor's Email ID : {obj.tutorEmail}</b></h6>
                                    <h6 className="card-text"><b>Student's First Name : {obj.studentFName}</b></h6>
                                    <h6 className="card-text"><b>Student's Last Name : {obj.studentLName}</b></h6>
                                    <h6 className="card-text"><b>Student's Email Id : {obj.studentEmail}</b></h6>
                                    <h6 className="card-text"><b>Class Title : {obj.classTitle}</b></h6>
                                    <h6 className="card-text"><b>Class Start Time : {obj.startTime}hrs</b></h6>
                                    <h6 className="card-text"><b>Class End Time : {obj.endTime}hrs</b></h6>
                                    <h6 className="card-text"><b>Fee Per Hour : Rs.{obj.feePerHour}</b></h6>
                                    <h6 className="card-text"><b>Discount in Percentage : {obj.discount}%</b></h6>
                                    <h6 className="card-text"><b>Created On : {obj.createdOn}</b></h6><hr></hr>
                                    <div className="card-text text-dark"><b>Total Hours : {parseInt(obj.endTime)-parseInt(obj.startTime)}hrs</b></div>
                                    <div className="card-text bg-transparent"><b>Total Amount : Rs.{obj.feePerHour*(parseInt(obj.endTime)-parseInt(obj.startTime))}</b></div>
                                    <div className="card-text bg-transparent"><b>Discount Amount : - Rs.{(obj.feePerHour*(parseInt(obj.endTime)-parseInt(obj.startTime))*(obj.discount/100))}</b></div>
                                    <div className="card-text bg-transparent"><b>Total Amount Payable : Rs.{(obj.feePerHour*(parseInt(obj.endTime)-parseInt(obj.startTime))-(obj.feePerHour*(parseInt(obj.endTime)-parseInt(obj.startTime))*(obj.discount/100)))}</b></div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}