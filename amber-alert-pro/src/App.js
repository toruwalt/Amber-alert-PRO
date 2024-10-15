// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importing routing components
import SideNav from './components/SideNav'; // Import SideNav component
import Home from './components/Home'; // Import Home component
import Login from './components/Login'; // Import Login component
import ReportMissing from './components/ReportMissing'; // Import ReportMissing component
import SignUp from './components/SignUp'; // Import SignUp component
import ContactPolice from './components/ContactPolice'; // Import ContactPolice component

// Main App component that sets up routing for the application
const App = () => {
    return (
        <Router>
            <SideNav /> {/* Render side navigation */}
            <Switch>
                {/* Define routes for different components */}
                <Route path="/" exact component={Home} /> {/* Home route */}
                <Route path="/report-missing" component={ReportMissing} /> {/* Report Missing route */}
                <Route path="/contact-police" component={ContactPolice} /> {/* Contact Police route */}
                <Route path="/log-in" component={Login} /> {/* Login route */}
                <Route path="/sign-up" component={SignUp} /> {/* Sign Up route */}
            </Switch>
        </Router>
    );
};

export default App; // Export App component

