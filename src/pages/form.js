import React from 'react';
import './form.css';

const form = () => (
    <div className="form">
    <h1>IT Service Ticket</h1>
    <h4>Please provide the details of the problem</h4>
      
      <form id='form'>
        
        
        <label for="name">Name</label><br></br>
        
        <label for="first-name">First Name</label>
        <input type='text' id='first-name' name='first-name'></input>

        <label for="last-name">Last Name</label>
        <input type='text' id='last-name' name='last-name'></input><br></br>

        <label for="email">E-mail</label>
        <input type='email' id='email' name='email' placeholder='myname@example.com'></input><br></br>
        
        <label for="department">Department</label>
        <select id="department" name="department">
          <option value="Human Resources">Human Resources</option>
          <option value="Accounting">Accounting</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="IT">IT</option>
          <option value="Legal">Legal</option>
        </select><br></br>

        <label for="computer-id">Computer ID</label>
        <input type='text' inputMode='numeric' id='computer-id' name='computer-id' placeholder='xxxxxx' maxLength="6" size='4'></input>
        <br></br>

        <label for="file-name">Upload a file:</label>
        <input type="file" id="file-name" name="file-name" accept="image/*,.pdf"></input>
        <br></br>

        <label for="describe-the-problem">Describe the Problem</label><br></br>
        <textarea id="describe-the-problem" name='describe-the-problem' rows='10' cols='40'></textarea>
        <br></br>

        <input type='submit' id='submit-btn' value="Submit"></input>
      </form>
    </div>
);

export default form;