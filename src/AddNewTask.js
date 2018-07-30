/*global gantt*/
import React, { Component, Button } from "react";
import "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

export default class AddNewTask extends Component {

    componentDidMount() {
        var taskId = gantt.createTask({
            id:10,
            text:"Task #5",
            start_date:"02-09-2013",
            duration:28
        }, "project_2", 2);

return(taskId)
    }
    render(){
        return(
            <Button onClick={gantt.createTask} text="Create New Task"/>
           
        )
    }
}