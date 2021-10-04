import { useState, useEffect } from "react";

export default function FindInvoiceByNumber() {

    let [invoiceNumber, setInvoiceNumber] = useState([]);
    let [data, setdata] = useState([]);
  // const authToken = localStorage.getItem("authToken")

  

  useEffect(() => {
    async function fetchData() {
      let fetchData = await fetch(
        "https://learnq-invoice.herokuapp.com/invoice/findinvoice",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-type": "application/json",
            // "Authorization" : authToken
          },
        }
      );
      let invoice = await fetchData.json();

      setdata([invoice]);
    }
    fetchData();
  }, [invoiceNumber]);

  return (
    <>

<div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Find Invoice</h3>
                                <div className="form-group">
                                    <label for="invoiceNumber" className="text-info">Enter Invoice Number</label><br/>
                                    <input type="text" id="invoiceNumber" name="invoiceNumber" required onChange={(e) => setInvoiceNumber(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


    {/* <div className="container" id="List__Container">
            <div className="row">
                <div className=" col-lg-12 text-center mt-4 ">
                    <div className="card">
                        <div className="card-body">
                        <h1>List of Invoices Created</h1>
                        </div>              
                    </div>             
                </div>
            </div>
            </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
}
