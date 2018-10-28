import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {

  state = {
    output: 'No data yet',
    addData: {
      name: '',
      role: ''
    }
  }

  handleInput = (e, name) => {
    const newAddData = { ...this.state.addData }
    newAddData[name] = e.target.value
    this.setState({ addData: newAddData })
  }

  clickHandler = () => {
    axios.get('http://localhost:8080/employees')
      .then(response => {
        this.setState({
          output: response.data._embedded
        });
        console.log(this.state);
      })
  }

  addStudentHandler = (e) => {
    e.preventDefault();
    const data = this.state.addData;
    if (data.name === '' || data.role === '') {
      alert('Write and and role')
    } else {
      axios.post('http://localhost:8080/employees', data)
        .then(response => {
          console.log(response);
          this.setState({
            addData: {
              name: '',
              role: ''
            }
          })
        });
    }
    
  } 

  deleteStudentHandler = (id) => {
    axios.delete('http://localhost:8080/employees/' + id)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          alert(err)
        })
  }



  render() {
    let students = this.state.output.employeeList;
    
    return (
      <div className="App">
        <h1>Students</h1>
        <div className="Container">

          <div className="Student">
            <form>
              <input 
                onChange={(e) => this.handleInput(e, 'name')} 
                type="text" 
                name="name"
                value={this.state.addData.name} 
                placeholder="Student name" />

              <input 
                onChange={(e) => this.handleInput(e, 'role')}
                type="text" 
                name="role" 
                value={this.state.addData.role}
                placeholder="Student role" />

              <button onClick={this.addStudentHandler}>Add Student</button>

            </form>
            <div></div>
          </div>

          <div className="Students">
            <button onClick={this.clickHandler}>Get all students</button>
            <p>
              {students ? 
               students.map(student => (
                <div className="StudentList">
                  <div onClick={() => this.deleteStudentHandler(student.id)}>{student.name} with role of {student.role}</div>
                </div>
              )):null}
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
