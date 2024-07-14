import React, { useState } from 'react';
import './Report.css';

const Report = () => {
    const [userData, setUserData] = useState({
        name: '',
        designation: '',
        date: '',
        schoolName: '',
        numStudents: '',
        expenses: '',  // Added expenses field
        experiments: [],
        studentList: null
    });

    const [visits, setVisits] = useState([]);

    const handleInputChange = (e, index = null) => {
        const { name, value, files } = e.target;

        if (name === 'experimentName') {
            const experiments = [...userData.experiments];
            experiments[index] = value;
            setUserData({ ...userData, experiments });
        } else if (name === 'studentList') {
            setUserData({ ...userData, studentList: files[0] });
        } else {
            setUserData({ ...userData, [name]: value });
        }
    };

    const addExperiment = () => {
        setUserData({ ...userData, experiments: [...userData.experiments, ''] });
    };

    const removeExperiment = (index) => {
        const experiments = userData.experiments.filter((_, i) => i !== index);
        setUserData({ ...userData, experiments });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add the new visit to the visits list
        setVisits([userData, ...visits]);
        // Clear the form
        setUserData({
            name: '',
            designation: '',
            date: '',
            schoolName: '',
            numStudents: '',
            expenses: '',  // Clear expenses field
            experiments: [],
            studentList: null
        });
    };

    return (
        <div className="report-container">
            <h1>Bus Usage Report</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex-box">
                    <div className="form-group">
                        <label>School Name:</label>
                        <input type="text" name="schoolName" value={userData.schoolName} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <input type="date" name="date" value={userData.date} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label>Expenses:</label>
                        <input type="number" name="expenses" value={userData.expenses} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label>Number of Students:</label>
                        <input type="number" name="numStudents" value={userData.numStudents} onChange={handleInputChange} required />
                    </div>
                </div>
                <div className="experiments-section">
                    <h2>Experiments Conducted</h2>
                    {userData.experiments.map((experiment, index) => (
                        <div key={index} className="experiment">
                            <div className="form-group experiment_list">
                                <label>S.No {index + 1}:</label>
                                <input
                                    type="text"
                                    name="experimentName"
                                    placeholder="Experiment Name"
                                    value={experiment}
                                    onChange={(e) => handleInputChange(e, index)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="remove-btn"
                                    onClick={() => removeExperiment(index)}
                                >
                                    &#x2715;
                                </button>
                            </div>
                        </div>
                    ))}
                    <button type="button" className="btn_bc" onClick={addExperiment}>Add Experiment</button>
                </div>
                <div className="form-group">
                    <label>Upload Student List (Image/PDF):</label>
                    <input type="file" name="studentList" accept=".pdf,.jpg,.jpeg,.png" onChange={handleInputChange} required />
                </div>
                <button type="submit" className="btn_bc">Save</button>
            </form>
            <div className='Pastvisits'>
                <h2>Past Visits</h2>
                <div className="visits-table-container">
                    <table className="visits-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>School Name</th>
                                <th>No. of Students</th>
                                <th>Experiments</th>
                                <th>Expenses</th> {/* Added header for expenses */}
                                <th>Student List</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visits.map((visit, index) => (
                                <tr key={index}>
                                    <td data-label="Date">{visit.date}</td>
                                    <td data-label="School Name">{visit.schoolName}</td>
                                    <td data-label="No. of Students">{visit.numStudents}</td>
                                    <td data-label="Experiments">{visit.experiments.join(', ')}</td>
                                    <td data-label="Expenses">{visit.expenses}</td> {/* Added data for expenses */}
                                    <td data-label="Student List">
                                        {visit.studentList && (
                                            <a href={URL.createObjectURL(visit.studentList)} target="_blank" rel="noopener noreferrer">
                                                View
                                            </a>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Report;
