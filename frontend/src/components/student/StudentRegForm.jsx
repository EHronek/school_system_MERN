import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

import "./studentForm.css"

const StudentRegForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        lastName: '',
        gender: '',
        email: '',
        nationality: '',
        contact: ''
    });

    const genders = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ];

    const handleChange = (field, value) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleSubmit = () => {
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            secondName: '',
            lastName: '',
            gender: '',
            email: '',
            nationality: '',
            contact: ''
        });
    };

    return (
        <div className="card p-4 ">
            <Card className="pt-2 pl-2" title="Student Registration Form">
                <form className="p-fluid horizontal-grid-form" >
                    <div className="field">
                        <label htmlFor="firstName">First Name</label>
                        <InputText
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                            placeholder="Enter First Name"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="secondName">Second Name</label>
                        <InputText
                            id="secondName"
                            value={formData.secondName}
                            onChange={(e) => handleChange('secondName', e.target.value)}
                            placeholder="Enter Second Name"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="lastName">Last Name</label>
                        <InputText
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                            placeholder="Enter Last Name"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="gender">Gender</label>
                        <Dropdown
                            id="gender"
                            value={formData.gender}
                            options={genders}
                            onChange={(e) => handleChange('gender', e.value)}
                            placeholder="Select Gender"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <InputText
                            id="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="contact">Contact</label>
                        <InputText
                            id="contact"
                            value={formData.contact}
                            onChange={(e) => handleChange('contact', e.target.value)}
                            placeholder="Enter Contact Number"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="nationality">Nationality</label>
                        <InputText
                            id="nationality"
                            value={formData.nationality}
                            onChange={(e) => handleChange('nationality', e.target.value)}
                            placeholder="Enter Nationality"
                        />
                    </div>
                    <div className="mt-4">
                        <Button label="Submit" className="p-button-success mr-2 ml-3" onClick={handleSubmit} />
                        <Button label="Reset" className="p-button-secondary mt-3 ml-3" onClick={handleReset} />
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default StudentRegForm;
