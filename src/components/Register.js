import React from 'react';
import {Link} from 'react-router-dom';
import DayPicker from 'react-day-picker';

class Register extends React.Component {
  state = {
    selectedDay: new Date(),
  };
  handleDayClick = day => {
    this.setState({
      selectedDay: day,
    });
  };
  render(){
    return(
      <div className="container-fluid register">
        <div className="register-wrapper">
          <h1 className="page-title">Survey App</h1>
          <div className="register-form">
            <h2>Just fill this form for instant signup</h2>
            <div className="wrapper">
              <form action="">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" name="name" id="name" required/>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="text" className="form-control" placeholder="Email" name="emailId" id="emailId" required/>
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile Number</label>
                  <input type="number" className="form-control" placeholder="Mobile" minLength="10" maxLength="10" name="dob" id="dob"/>
                </div>

                <div className="form-group">
                  <label className="form-label">Date of Birth</label>
                  <DayPicker
                    onDayClick={this.handleDayClick}
                    selectedDays={this.state.selectedDay}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <div className="form-control-wrapper inline">
                    <input type="radio" className="form-control" name="gender" id="gender1" value="male" defaultChecked />
                    <label className="form-check-label" htmlFor="gender1">Male</label>
                  </div>
                  <div className="form-control-wrapper inline">
                    <input type="radio" className="form-control" name="gender" id="gender2" value="female"/>
                    <label className="form-check-label" htmlFor="gender2">Female</label>
                  </div>
                  <div className="form-control-wrapper inline">
                    <input type="radio" className="form-control" name="gender" id="gender3" value="other"/>
                    <label className="form-check-label" htmlFor="gender3">Other</label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Location</label>
                  <select className="form-control" name="city" id="city">
                    <option value="1">Chennai</option>
                    <option value="2">Bengaluru</option>
                    <option value="3">Hyderabad</option>
                    <option value="4">Mumbai</option>
                    <option value="5">Delhi</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Highest Educational Qualification</label>
                  <select className="form-control" name="education" id="education">
                    <option value="1">SSLC</option>
                    <option value="2">Higher Secondary</option>
                    <option value="3">Under Graduate</option>
                    <option value="4">Post Graduate</option>
                    <option value="5">PhD</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Password" name="password" id="password" minLength="6" maxLength="12" required/>
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" placeholder="Password" name="password2" id="password2" minLength="6" maxLength="12" required/>
                </div>

                <div className="form-group">
                  <button className="button-primary" type="submit">Register</button>
                </div>
              </form>
            </div> 
            <p className="footer-link">
              Already a member? - <Link to="/login">Login Here</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;