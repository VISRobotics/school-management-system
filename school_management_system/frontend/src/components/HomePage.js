import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box, Container, CardMedia, Menu, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import Footer from './Footer'; // Ensure the Footer component is correctly created and imported

import StudentDataEntryPage from "./StudentDataEntryPage";
import FacultyDataEntryPage from "./FacultyDataEntryPage";
import DepartmentDataEntryPage from "./DepartmentDataEntryPage";

// Import the image
import schoolImage from './images/SchoolManagementSystem.png'; // Adjust this path according to your project structure
// Import LoginPage component as well
import LoginPage from './LoginPage';
import { Button } from '@mui/material';
// ... other imports


// Functional component for the login button to use the hook
function LoginButton() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login"); // Your login route
  };

  return (
    <Button color="inherit" onClick={handleLogin}>Login/Signup</Button>
  );
}

export default class HomePage extends Component {
    state = {
        studentMenuAnchorEl: null,
        facultyMenuAnchorEl: null,
    };

    handleStudentMenuOpen = (event) => {
        this.setState({ studentMenuAnchorEl: event.currentTarget });
    };

    handleStudentMenuClose = () => {
        this.setState({ studentMenuAnchorEl: null });
    };

    handleFacultyMenuOpen = (event) => {
        this.setState({ facultyMenuAnchorEl: event.currentTarget });
    };

    handleFacultyMenuClose = () => {
        this.setState({ facultyMenuAnchorEl: null });
    };

    render() {
        const { studentMenuAnchorEl, facultyMenuAnchorEl } = this.state;
        const drawerWidth = 240;

        return (
            <Router>
                <Box sx={{ display: 'flex', textAlign: 'center' }}>
                    <CssBaseline />
                    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        <Toolbar>
                            <Typography variant="h6" noWrap component="div" sx={{ textAlign: 'center', flexGrow: 1 }}>
                                School Management System 
                            </Typography>
                            <LoginButton /> {/* This is the new login button */}
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                        }}
                    >
                        <Toolbar />
                        <Box sx={{ overflow: 'auto' }}>
                            <List>
                                <ListItem button key="Home" component={Link} to="/" sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItem>
                                {['Departments', 'Events'].map((text, index) => (
                                    <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`} sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>
                                        <ListItemIcon>
                                            {index === 0 ? <SchoolIcon /> : index === 1 ? <EventIcon /> : <PeopleIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                                <ListItem button onMouseEnter={this.handleStudentMenuOpen} sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>
                                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                                    <ListItemText primary="Students" />
                                </ListItem>
                                <Menu
                                    anchorEl={studentMenuAnchorEl}
                                    open={Boolean(studentMenuAnchorEl)}
                                    onClose={this.handleStudentMenuClose}
                                    MenuListProps={{ onMouseLeave: this.handleStudentMenuClose }}
                                >
                                    <MenuItem onClick={this.handleStudentMenuClose} component={Link} to="/students/add" sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>Add Student</MenuItem>
                                    <MenuItem onClick={this.handleStudentMenuClose} sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>Delete Student</MenuItem>
                                    <MenuItem onClick={this.handleStudentMenuClose} sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>Update Student</MenuItem>
                                    <MenuItem onClick={this.handleStudentMenuClose} sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>Students List</MenuItem>
                                </Menu>
                                <ListItem button onMouseEnter={this.handleFacultyMenuOpen} sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>
                                    <ListItemIcon><SchoolIcon /></ListItemIcon>
                                    <ListItemText primary="Faculty" />
                                </ListItem>
                                <Menu
                                    anchorEl={facultyMenuAnchorEl}
                                    open={Boolean(facultyMenuAnchorEl)}
                                    onClose={this.handleFacultyMenuClose}
                                    MenuListProps={{ onMouseLeave: this.handleFacultyMenuClose }}
                                >
                                    <MenuItem onClick={this.handleFacultyMenuClose} component={Link} to="/faculty/add" sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>Add Faculty</MenuItem>
                                    <MenuItem onClick={this.handleFacultyMenuClose} sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>Delete Faculty</MenuItem>
                                    <MenuItem onClick={this.handleFacultyMenuClose} sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>Update Faculty</MenuItem>
                                    <MenuItem onClick={this.handleFacultyMenuClose} sx={{ '&:hover': { backgroundColor: 'lightblue' } }}>Faculty List</MenuItem>
                                </Menu>
                            </List>
                        </Box>
                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1, p: 3,justifyContent: 'center' }}>
                        <Toolbar />
                        <Container>
                            <Routes>
                            <Route path="/" element={
                                <Box     sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    height: '70vh', 
                                    textAlign: 'center',
                                    p: 30
                                  }}>
                                    <Typography variant="h4" gutterBottom>
                                    Welcome to the School Management System
                                    </Typography>
                                    <CardMedia
                                    component="img"
                                    height="300"
                                    image={schoolImage}
                                    alt="School Management System"
                                    />
                                    <Typography variant="body1" gutterBottom>
                                    This page is under construction...
                                    </Typography>
                                </Box>
                                } />


                                <Route path="/students/add" element={<StudentDataEntryPage />} />
                                <Route path="/faculty/add" element={<FacultyDataEntryPage />} />
                                <Route path="/departments" element={<DepartmentDataEntryPage />} />
                                <Route path="/login" element={<LoginPage />} />
                                {/* Assume paths for other components like Events */}
                            </Routes>
                        </Container>
                    </Box>
                </Box>
                <Footer />
            </Router>
        );
    }
}
