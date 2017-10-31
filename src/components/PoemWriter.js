import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textArea: "",
      renderDiv: true
    };
  }

  handleTextArea(ev){
    this.setState({
      textArea: ev.target.value
    }, this.poemLogic.bind(this))


  }

  poemLogic(){
    let lines = this.state.textArea.split("\n")
    if (lines.length !== 3){
      return console.log("Poem needs 3 lines! not ", lines.length);
    }
    lines = lines.map(line => line.split(" "))
    const line1 = lines[0].filter(el => el !== "")
    const line2 = lines[1].filter(el => el !== "")
    const line3 = lines[2].filter(el => el !== "")
    console.log("line 1", line1, "\nline 2", line2, "\nline 3", line3);
    let errorString = ""

    if(line1.length !== 5){
      errorString += "Your first line has the wrong number of words\n"
    }
    if(line2.length !== 3){
      errorString += "Your second line has the wrong number of words\n"
    }
    if(line3.length !== 5){
      errorString += "Your third line has the wrong number of words"
    }
    if (errorString.length > 0){

      this.setState({
        renderDiv: true
      })

    } else {
      this.setState({
        renderDiv: false
      })

    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.textArea}
          onChange={this.handleTextArea.bind(this)}
        />
        <p>{this.state.textArea}</p>
        {this.state.renderDiv &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
