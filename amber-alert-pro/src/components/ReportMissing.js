// src/components/ReportMissing.js
import React from 'react';
import childPulledFromRiver from '../images/child pulled from river.jpg';

// ReportMissing component for reporting a missing person
const ReportMissing = () => {
    return (
        <div id="main-content">
            <div id="report-form">
                <h1>Report Missing Person</h1>
                <div id="alert-box-background">
                    <h2>Instructions:</h2>
                    <p>Please fill out the form below to report a missing person. Attach a clear picture of the missing person if available.</p>
                </div>
                {/* Form for reporting a missing person */}
                <form id="missing-person-form" action="submit_report.php" method="POST" encType="multipart/form-data">
                    {/* Input for person's name */}
                    <label htmlFor="person-name">Person's Name:</label><br />
                    <input type="text" id="person-name" name="person-name" required /><br /><br />

                    {/* Dropdown for last seen location */}
                    <label htmlFor="last-seen-location">Last Seen Location:</label><br />
                    <select id="last-seen-location" name="last-seen-location" required>
                        <option value="">Select Location</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Houston">Houston</option>
                        <option value="Phoenix">Phoenix</option>
                    </select><br /><br />

                    {/* Text area for description */}
                    <label htmlFor="description">Description:</label><br />
                    <textarea id="description" name="description" rows="4" required></textarea><br /><br />

                    {/* Input for uploading a picture */}
                    <label htmlFor="image">Upload Picture:</label><br />
                    <input type="file" id="image" name="image" accept="image/*" required /><br /><br />

                    <img id="image-preview" src="#" alt="Image Preview" style={{ display: 'none', width: '200px', height: 'auto' }} /><br /><br />

                    {/* Submit button for reporting */}
                    <button type="submit">Submit Report</button>
                </form>
            </div>
        </div>
    );
};

export default ReportMissing; // Export ReportMissing component

