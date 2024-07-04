import { SignedIn, UserButton } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Auth } from "./screens/auth";
import { Dashboard } from "./screens/dashboard";


function App() {

  return <Router>
    <div className="app-container">
      <div className="navbar">
        <link to = "/"> Dashboard </link>
        <SignedIn>
            <UserButton appearance={{baseTheme: dark}}/>
        </SignedIn>
      </div>
      <Routes>
        <Route path = "/" element = {
            <Dashboard/>
          }
        />
        <Route path = "/auth" element = {<Auth/>} />
      </Routes>
    </div>
  </Router>
}

export default App
