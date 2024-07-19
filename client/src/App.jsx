import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AboutUs from "./screens/AboutUs";
import ConfirmPayment from "./screens/ConfirmPayment";
import Form from "./screens/Form";
import Home from "./screens/Home";
import HowBook from "./screens/HowBook";
import LabExperiment from "./screens/LabExperiment";
import Login from "./screens/Login";
import Payment from "./screens/Payment";
import Report from "./screens/Report";

import Footer from "./components/Footer";
import Headers from "./components/Headers";

function LandingPage() {
  const [redirectTo, setRedirectTo ] = useState(null);

  if (redirectTo) return <Navigate to = {redirectTo} />;
  return <div> Loading... </div>
}

function App() {
  //const [showPopup, setShowPopup] = useState(false);
  //if(loading) return <div> Loading... </div>
  return (
    <section className="bg-Hero bg-cover font-[Poppins] md:bg-top bg-center p-0 m-0">
    <Headers />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/home" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/form" element = {<Form />} />
        <Route path = "/aboutUs" element = {<AboutUs />} />
        <Route path = "/payment" element = {<Payment />} />
        <Route path = "/confirmPayment" element = {<ConfirmPayment />} />
        <Route path = "/labExperiment" element = {<LabExperiment />} />
        <Route path = "/report" element = {<Report />} />
        <Route path = "/howBook" element = {<HowBook />} />
      </Routes>
    <Footer  />
    </section>
  );
}


export default App;
