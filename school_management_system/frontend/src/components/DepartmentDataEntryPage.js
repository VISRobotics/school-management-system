import React, { Component } from "react";
import axios from 'axios';
import { TextField, Button, Typography, Paper } from '@mui/material';

export default class DepartmentDataEntryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentid: '', // Not needed for creation but useful for updates
            departmentname: '',
            departmentcode: '',
            inceptiondate: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { departmentname, departmentcode, inceptiondate } = this.state;
        const departmentData = {
            departmentname,
            departmentcode,
            inceptiondate
        };

        axios.post('/api/departments/', departmentData)
            .then(response => {
                alert('Department added successfully!');
                // Clear form
                this.setState({
                    departmentname: '',
                    departmentcode: '',
                    inceptiondate: ''
                });
            })
            .catch(error => {
                console.error('Error adding department:', error);
                alert('Failed to add department!');
            });
    };

    render() {
        return (
            <Paper style={{ padding: "20px", margin: "20px" }}>
                <Typography variant="h4" style={{ marginBottom: "20px" }}>
                    Department Data Entry Page
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Department Name"
                        name="departmentname"
                        value={this.state.departmentname}
                        onChange={this.handleInputChange}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Department Code"
                        name="departmentcode"
                        value={this.state.departmentcode}
                        onChange={this.handleInputChange}
                        required
                    />
                    <TextField
                        fullWidth
                        type="date"
                        margin="normal"
                        label="Inception Date"
                        name="inceptiondate"
                        value={this.state.inceptiondate}
                        onChange={this.handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
                        Add Department
                    </Button>
                </form>
            </Paper>
        );
    }
}
