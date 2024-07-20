import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [computerId, setComputerId] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [tickets, setTickets] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ description: '', image: '' });
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = { firstName, lastName, department, computerId, problemDescription, image };
    setTickets([...tickets, newTicket]);

    // clear form
    setFirstName('');
    setLastName('');
    setDepartment('');
    setDepartment('');
    setComputerId('');
    setProblemDescription('');
    setImage('');
  };

  const handleRemoveTicket = (index) => {
    setTickets(tickets.filter((_, i) => i !== index));
  };

  const handleDetailsClick = (ticket) => {
    setPopupContent({ description: ticket.problemDescription, image: ticket.image });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent({ description: '', image: '' });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
   }

  return(
    <div className="form">
    <div className='header'>
      <h1>IT Service Ticket</h1>
      <h4>Please provide the details of the problem</h4>
    </div>
      
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label><br></br>
        
        <label for="first-name" className='required'>First Name</label>
        <input required type='text' id='first-name' name='first-name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>

        <label for="last-name" className='required'>Last Name</label>
        <input required type='text' id='last-name' name='last-name' value={lastName} onChange={(e) => setLastName(e.target.value)}></input><br></br>
  
        <label for="department" className='required'>Department</label>
        <select required id="department" name="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value='' disabled>Select Department</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Accounting">Accounting</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="IT">IT</option>
          <option value="Legal">Legal</option>
        </select><br></br>

        <label for="computerId" className='required'>Computer ID</label>
        <input required type='text' inputMode='numeric' id='computerId' name='computerId' placeholder='xxxxxx' maxLength="6" size='4' value={computerId} onChange={(e) => setComputerId(e.target.value)}></input>
        <br></br>

        <label for="fileName">Upload a file:</label>
        <input type="file" id="file-btn" name="fileName" accept="image/*" onChange={onImageChange}></input>
        <br></br>

        <label for="problemDescription" className='required'>Describe the Problem</label><br></br>
        <textarea id="problemDescription" name='problemDescription' rows='10' cols='40' value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)}></textarea>
        <br></br>

        <input required type='submit' id='submit-btn' value="Submit"></input>
      </form>

      <div className='dashboard'>
        <table>
          <caption><b>Tickets Dashboard</b></caption>
          <thead>
            <tr>
              <th>Ticket Number</th>
              <th>Computer ID</th>
              <th>Department</th>
              <th>Reported By</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ticket.computerId}</td>
                <td>{ticket.department}</td>
                <td>{`${ticket.firstName} ${ticket.lastName}`}</td>
                <td>
                  <button type='button' id='handleDetails' onClick={() => handleDetailsClick(ticket)}>Details</button>
                </td>
                <td>
                  <button type='button' id='cancelTicket' onClick={ () => handleRemoveTicket(index)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Problem Details</h2>
            <p>{popupContent.description}</p>
            {popupContent.image && <img src={popupContent.image} id='uploadedImg'alt="Uploaded file" />}
            <button type="button" id='close' onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;