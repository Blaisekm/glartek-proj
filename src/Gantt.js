/*global gantt*/
import React, { Component } from "react";
import "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

export default class Gantt extends Component {
  componentDidMount() {
    //default columns definition
    gantt.config.columns = [
      { name: "text", label: "Teams", width: "*", tree: true, align: "left" },
      { name: "start_date", label: "Start time", align: "center" },
      { name: "duration", label: "Tasks", align: "center" },
      { name: "add", label: "", width: 44 }
    ];

    gantt.attachEvent("onAfterTaskAdd", (id, task) => {
      if (this.props.onTaskUpdated) {
        this.props.onTaskUpdated(id, "inserted", task);
      }
    });

    gantt.attachEvent("onAfterTaskUpdate", (id, task) => {
      if (this.props.onTaskUpdated) {
        this.props.onTaskUpdated(id, "updated", task);
      }
    });

    gantt.attachEvent("onAfterTaskDelete", id => {
      if (this.props.onTaskUpdated) {
        this.props.onTaskUpdated(id, "deleted");
      }
    });

    gantt.attachEvent("onAfterLinkAdd", (id, link) => {
      if (this.props.onLinkUpdated) {
        this.props.onLinkUpdated(id, "inserted", link);
      }
    });

    gantt.attachEvent("onAfterLinkUpdate", (id, link) => {
      if (this.props.onLinkUpdated) {
        this.props.onLinkUpdated(id, "updated", link);
      }
    });

    gantt.attachEvent("onAfterLinkDelete", (id, link) => {
      if (this.props.onLinkUpdated) {
        this.props.onLinkUpdated(id, "deleted");
      }
    });

    gantt.config.layout = {
      css: "gantt_container",
      cols: [
       {
         width:400,
         min_width: 300,
     
         // adding horizontal scrollbar to the grid via the scrollX attribute
         rows:[
          {view: "grid", scrollX: "gridScroll", scrollable: true, scrollY: "scrollVer"}, 
          {view: "scrollbar", id: "gridScroll"}  
         ]
       },
       {resizer: true, width: 1},
       {
         rows:[
          {view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer"},
          {view: "scrollbar", id: "scrollHor"}
         ]
       },
       {view: "scrollbar", id: "scrollVer"}
      ]
    };

    gantt.init(this.ganttContainer);
    gantt.parse(this.props.tasks);
  }
  
  

  setZoom(value) {
    switch (value) {
      case "Hours":
        gantt.config.scale_unit = "day";
        gantt.config.date_scale = "%d %M";

        gantt.config.scale_height = 60;
        gantt.config.min_column_width = 30;
        gantt.config.subscales = [{ unit: "hour", step: 1, date: "%H" }];
        break;
      case "Days":
        gantt.config.min_column_width = 70;
        gantt.config.scale_unit = "week";
        gantt.config.date_scale = "#%W";
        gantt.config.subscales = [{ unit: "day", step: 1, date: "%d %M" }];
        gantt.config.scale_height = 60;
        break;
      case "Months":
        gantt.config.min_column_width = 70;
        gantt.config.scale_unit = "month";
        gantt.config.date_scale = "%F";
        gantt.config.scale_height = 60;
        gantt.config.subscales = [{ unit: "week", step: 1, date: "#%W" }];
        break;
      default:
        break;
    }
    this.setZoom(this.props.zoom);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.zoom !== nextProps.zoom;
  }

  componentDidUpdate() {
    gantt.render();
  }

  render() {
    return (
      <div
        ref={input => {
          this.ganttContainer = input;
        }}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}
