import React, { Component } from 'react'
import { fontFamily } from '@material-ui/system'
import './styling.css';
import axios from 'axios';
class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com', title: 'fag'},
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com', title: 'fag'},
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com', title: 'fag'},
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' , title: 'fag'}
         ]
      }
   }
   

   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email, title } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
             <td>{title}</td>
          </tr>
       )
    })
 }
 renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
 


 render() {
    
    return (
       <div>
          <h1 id='title'>Locations</h1>
          <table id='students'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }

}

export default Table