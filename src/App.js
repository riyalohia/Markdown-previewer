import React from 'react';
import {Div} from './Div';
import {Textarea} from './Textarea';
import {  MarkdownPreview  } from 'react-marked-markdown';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    var val = "Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a line break.\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\n*[Herman Fassett](https://freecodecamp.com/hermanfassett)*";
    this.state = {value : val};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
     var va = e.target.value
     this.setState({
      value:va
     }); 
  }
  render(){
    return(
        <div className="container-fluid">
        <Div />
          <div className="row">
            <div className="col-md-6">
              <center><Textarea onchange={this.handleChange} value={this.state.value}/></center>
            </div>
            <div className="col-md-6">
            <MarkdownPreview value={this.state.value}/>
            </div>
          </div>
        </div>
      );
  }
}

export default App;
