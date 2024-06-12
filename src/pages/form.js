import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [computerId, setComputerId] = useState('');
  const [fileName, setFileName] = useState('');
  const [problemDescription, setProblemDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { firstName, lastName, email, department, computerId, fileName, problemDescription };
    console.log(form);

    // clear form
    setFirstName('');
    setLastName('');
    setEmail('');
    setDepartment('');
    setDepartment('');
    setComputerId('');
    setFileName('');
    setProblemDescription('');
  };

  
  return(
    <div className="form">
    <h1>IT Service Ticket</h1>
    <h4>Please provide the details of the problem</h4>
      
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label><br></br>
        
        <label for="first-name">First Name</label>
        <input required type='text' id='first-name' name='first-name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>

        <label for="last-name">Last Name</label>
        <input required type='text' id='last-name' name='last-name' value={lastName} onChange={(e) => setLastName(e.target.value)}></input><br></br>

        <label for="email">E-mail</label>
        <input required type='email' id='email' name='email' placeholder='myname@example.com' value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
        
        <label for="department">Department</label>
        <select id="department" name="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="Human Resources">Human Resources</option>
          <option value="Accounting">Accounting</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="IT">IT</option>
          <option value="Legal">Legal</option>
        </select><br></br>

        <label for="computerId">Computer ID</label>
        <input required type='text' inputMode='numeric' id='computerId' name='computerId' placeholder='xxxxxx' maxLength="6" size='4' value={computerId} onChange={(e) => setComputerId(e.target.value)}></input>
        <br></br>

        <label for="fileName">Upload a file:</label>
        <input type="file" id="fileName" name="fileName" accept="image/*,.pdf" value={fileName} onChange={(e) => setFileName(e.target.value)}></input>
        <br></br>

        <label for="problemDescription">Describe the Problem</label><br></br>
        <textarea id="problemDescription" name='problemDescription' rows='10' cols='40' value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)}></textarea>
        <br></br>

        <input required type='submit' id='submit-btn' value="Submit"></input>
      </form>
    </div>
  );
};

export default Form;