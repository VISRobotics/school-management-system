import React, { Component } from "react";
import {render} from "react-dom";
import HomePage from "./HomePage";
import StudentDataEntryPage from "./StudentDataEntryPage";
import FacultyDataEntryPage from "./FacultyDataEntryPage";
import DepartmentDataEntryPage from "./DepartmentDataEntryPage";

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <HomePage />;
    }
}

const appDiv = document.getElementById("app");
render(<App />,appDiv);