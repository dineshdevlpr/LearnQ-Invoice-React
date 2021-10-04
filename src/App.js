import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




// Importing Auth Routes
// import Register from "./routes/register";
// import Login from "./routes/login";
// import Forgot from "./routes/forgot";
// import Reset from "./routes/reset";
// import Success from "./routes/success";

//  importing invoice routes
import Home from "./components/home/home";
import Create from "./components/invoiceRoutes/createinvoice";
import CreatedInvoices from "./components/invoiceRoutes/createdinvoices";


function App() {
  return (
    <Router>
      <>
        
          <Switch>
            {/* <Route path="/register" component={Register} exact={true} ></Route>
            <Route path="/login" component={Login} exact={true} ></Route>
            <Route path="/forgot" component={Forgot} exact={true} ></Route>
            <Route path="/reset/:randomString" component={Reset} exact={true} ></Route>
            <Route path="/success" component={Success} exact={true} ></Route> */}
            
            <Route path="/" component={Home} exact={true} ></Route>
            <Route path="/createinvoice" component={Create} exact={true} ></Route>
            <Route path="/createdinvoices" component={CreatedInvoices} exact={true} ></Route>

          </Switch>
        
      </>
    </Router>
  );
}

export default App;