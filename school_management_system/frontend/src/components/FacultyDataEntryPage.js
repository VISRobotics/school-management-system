import React, { Component } from "react";
import axios from 'axios';
import { TextField, Button, Typography, Paper } from '@mui/material';

export default class FacultyDataEntryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facultyid: '', // Usually not needed for creation, useful for updates
            firstname: '',
            lastname: '',
            surname: '',
            departmentid: '',
            dateofjoining: '',
            yearsofexperience: '',
            governmentid: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const facultyData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            surname: this.state.surname,
            departmentid: this.state.departmentid,
            dateofjoining: this.state.dateofjoining,
            yearsofexperience: parseInt(this.state.yearsofexperience, 10),
            governmentid: this.state.governmentid
        };

        axios.post('/api/faculty/', facultyData)
            .then(response => {
                alert('Faculty added successfully!');
                this.setState({
                    firstname: '',
                    lastname: '',
                    surname: '',
                    departmentid: '',
                    dateofjoining: '',
                    yearsofexperience: '',
                    governmentid: ''
                });
            })
            .catch(error => {
                console.error('Error adding faculty:', error);
                alert('Failed to add faculty!');
            });
    };

    render() {
        return (
            <Paper style={{ padding: "20px", margin: "20px" }}>
                <Typography variant="h4" style={{ marginBottom: "20px" }}>Faculty Data Entry Page</Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="First Name"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Last Name"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Surname"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleInputChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Department ID"
                        name="departmentid"
                        value={this.state.departmentid}
                        onChange={this.handleInputChange}
                        required
                    />
                    <TextField
                        fullWidth
                        type="date"
                        margin="normal"
                        label="Date of Joining"
                        name="dateofjoining"
                        value={this.state.dateofjoining}
                        onChange={this.handleInputChange}
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Years of Experience"
                        type="number"
                        name="yearsofexperience"
                        value={this.state.yearsofexperience}
                        onChange={this.handleInputChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Government ID"
                        name="governmentid"
                        value={this.state.governmentid}
                        onChange={this.handleInputChange}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
                        Add Faculty
                    </Button>
                </form>
            </Paper>
        );
    }
}
