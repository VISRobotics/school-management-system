import React, { Component } from "react";
import axios from 'axios';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default class StudentDataEntryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            searchTerm: '',
            studentid: '',
            firstname: '',
            lastname: '',
            surname: '',
            dateofbirth: '',
            dateofjoining: '',
            departmentid: '',
            governmentid: '',
            standard: ''
        };
    }

    componentDidMount() {
        this.fetchStudents();
    }

    fetchStudents = () => {
        axios.get('/api/students/')
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(error => console.error('Error fetching students:', error));
    };

    handleFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newStudent = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            surname: this.state.surname,
            dateofbirth: this.state.dateofbirth,
            dateofjoining: this.state.dateofjoining,
            departmentid: this.state.departmentid,
            governmentid: this.state.governmentid,
            standard: this.state.standard
        };
    
        axios.post('/api/students/', newStudent)
            .then(() => {
                alert('New Student added successfully!');
                this.fetchStudents();  // Reload the list after adding
            })
            .catch(error => {
                console.error('Error adding student:', error);
                alert('Failed to add student!');
            });
    };
    

    render() {
        return (
            <Paper style={{ padding: "20px", margin: "20px" }}>
                <Typography variant="h4" style={{ marginBottom: "20px" }}>Student Data Entry Page</Typography>
                <form onSubmit={this.handleSubmit} style={{ marginBottom: "20px" }}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="First Name"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.handleFieldChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Last Name"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleFieldChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Surname"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleFieldChange}
                    />
                    <TextField
                        fullWidth
                        type="date"
                        margin="normal"
                        label="Date of Birth"
                        name="dateofbirth"
                        value={this.state.dateofbirth}
                        onChange={this.handleFieldChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        fullWidth
                        type="date"
                        margin="normal"
                        label="Date of Joining"
                        name="dateofjoining"
                        value={this.state.dateofjoining}
                        onChange={this.handleFieldChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Department ID"
                        name="departmentid"
                        value={this.state.departmentid}
                        onChange={this.handleFieldChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Government ID"
                        name="governmentid"
                        value={this.state.governmentid}
                        onChange={this.handleFieldChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Standard"
                        name="standard"
                        value={this.state.standard}
                        onChange={this.handleFieldChange}
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
                        Add Student
                    </Button>
                </form>
            </Paper>
        );
    }
}
