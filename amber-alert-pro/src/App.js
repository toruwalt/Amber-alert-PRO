// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ReportMissing from './pages/ReportMissing';
import ContactPolice from './pages/ContactPolice';
import ViewMissing from './pages/ViewMissing';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report-missing" element={<ReportMissing />} />
            <Route path="/contact-police" element={<ContactPolice />} />
            <Route path="/view-missing" element={<ViewMissing />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        {/* <Footer /> Uncomment if you add a Footer component */}
      </div>
    </Router>
  );
}

export default App;

