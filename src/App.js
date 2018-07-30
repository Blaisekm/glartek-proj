import React, { Component } from 'react';
import Gantt from './Gantt';
import Toolbar from './Toolbar';
import MessageArea from './MessageArea';
import './App.css';
 

var data = {
  data: [
    {id: 1, text: 'Team #1', start_date: '15-04-2017', duration: 3, progress: 0.6},
    {id: 2, text: 'Team #2', start_date: '18-04-2017', duration: 3, progress: 0.4}
  ],
  links: [
    {id: 1, source: 1, target: 2, type: '0'}
  ]
};


//   this.handleZoomChange = this.handleZoomChange.bind(this);
//   this.logTaskUpdate = this.logTaskUpdate.bind(this);
//   this.logLinkUpdate = this.logLinkUpdate.bind(this);


// var addMessage = function(message) {
//   var messages = this.state.messages.slice();
//   var prevKey = messages.length ? messages[0].key: 0;

//   messages.unshift({key: prevKey + 1, message});
//   if(messages.length > 40){
//     messages.pop();
//   }
//   this.setState({messages});
// }

// var logTaskUpdate= function(id, mode, task) {
//   let text = task && task.text ? ` (${task.text})`: '';
//   let message = `Task ${mode}: ${id} ${text}`;
//   this.addMessage(message);
// }

// var logLinkUpdate= function(id, mode, link) {
//   let message = `Link ${mode}: ${id}`;
//   if (link) {
//     message += ` (source: ${link.source}, target: ${link.target})`;
//   }
//   this.addMessage(message)
// }
 
class App extends Component {
  render() {
    
    // var constructor= function(props) {
    //   super(props);
    //   this.state = {
    //     currentZoom: 'Days',
    //     messages: []
    //   };
    
    return (
      <div>
        {/* <Toolbar
      zoom={this.state.currentZoom}
      onZoomChange={this.handleZoomChange}
    /> */}
        <div className="gantt-container">
          <Gantt tasks={data}
          // zoom={this.state.currentZoom}
          // onTaskUpdated={this.logTaskUpdate}
          // onLinkUpdated={this.logLinkUpdate}
          />
          </div>

          {/* <MessageArea
            messages={this.state.messages}
        /> */}
        </div>
        
        
      
    );
   
  }
}
export default App;
