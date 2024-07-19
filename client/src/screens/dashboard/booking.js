import React, { useState } from "react";
import { useLocation } from "react-router-dom";
//import { useAuth } from "../contexts/authContext";

const Form = () => {
    const backendUrl = process.env.REACT_APP_BASE_URL;
    //const { currentUser } = useAuth();
    const location = useLocation();

    const [formData, setFormData] = useState ({
        Name: "",
        Designation: "",
        PhoneNumber: "",
        StudentNo: "",
        Parking: "",
        Commotion: "",
        ExperimentList: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        alert('Booking form submitted successfully !');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name:</label>
                <input
                    type = "text"
                    name = "Name"
                    value={formData.Name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Designation:</label>
                <input
                    type = "text"
                    name = "Designation"
                    value={formData.Designation}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Phone Number:</label>
                <input
                    type = "text"
                    name = "PhoneNumber"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Number of Students performing experiment: </label>
                <input
                    type = "text"
                    name = "StudentNo"
                    value={formData.StudentNo}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Parking:</label>
                <select
                    name = "Parking"
                    value={formData.Parking}
                    onChange={handleChange}
                >
                    <option value = "">Select an Option</option>
                    <option value = "yes">Yes</option>
                    <option value = "no">No</option> 
                </select>
            </div>

            <div>
                <label>Chance of Commotion:</label>
                <select
                    name = "Commotion"
                    value={formData.Commotion}
                    onChange={handleChange}
                >
                    <option value = "yes">Yes</option>
                    <option value = "no">No</option> 
                </select>
            </div>

            <div>
                <label>Select the experiment:</label>
                <select
                    name = "ExperimentList"
                    value={formData.ExperimentList}
                    onChange={handleChange}
                >
                    <option value = "yes">Yes</option>
                    <option value = "no">No</option> 
                </select>
            </div>
            <div className="mt-8 my-10 flex justify-center">
                <button 
                    type = "submit"
                    className="bg-color text-white px-6 py-2 rounded-lg w-80 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mb-4"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Form;
