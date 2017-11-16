import React from 'react';

class AddSurvey extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="page-title">Preview</div>
        <div className="wrapper preview">
          <div className="survey-step-1">
            <div className="question-item">
              <p className="question">Which method can be applied to detect the purity of metal?</p>
              <div className="options">
              <div className="form-group">
                <label className="form-label">Gender</label>
                <div className="form-control-wrapper">
                  <input type="radio" className="form-control" name="question1" id="q1option1" value="Boyle's Law" />
                  <label className="form-check-label" htmlFor="q1option1">Boyle's Law</label>
                </div>
                <div className="form-control-wrapper">
                  <input type="radio" className="form-control" name="question1" id="q1option2" value="Pascal's law"/>
                  <label className="form-check-label" htmlFor="q1option2">Pascal's Law</label>
                </div>
                <div className="form-control-wrapper">
                  <input type="radio" className="form-control" name="question1" id="q1option3" value="Newton's Law"/>
                  <label className="form-check-label" htmlFor="q1option3">Newton's Law</label>
                </div>
                <div className="form-control-wrapper">
                  <input type="radio" className="form-control" name="question1" id="q1option4" value="other"/>
                  <label className="form-check-label" htmlFor="q1option4">Archimidi's Principle</label>
                </div>
                </div>
              </div>
            </div>

            <div className="question-item">
              <p className="question">Which method can be applied to detect the purity of metal?</p>
              <div className="options">
              <div className="form-group">
                <label className="form-label">Gender</label>
                <div className="form-control-wrapper">
                  <input type="checkbox" className="form-control" name="question2" id="q2option1" value="Boyle's Law" />
                  <label className="form-check-label" htmlFor="q2option1">Boyle's Law</label>
                </div>
                <div className="form-control-wrapper">
                  <input type="checkbox" className="form-control" name="question2" id="q2option2" value="Pascal's law"/>
                  <label className="form-check-label" htmlFor="q2option2">Pascal's Law</label>
                </div>
                <div className="form-control-wrapper">
                  <input type="checkbox" className="form-control" name="question3" id="q2option3" value="Newton's Law"/>
                  <label className="form-check-label" htmlFor="q2option3">Newton's Law</label>
                </div>
                <div className="form-control-wrapper">
                  <input type="checkbox" className="form-control" name="question4" id="q2option4" value="other"/>
                  <label className="form-check-label" htmlFor="q2option4">Archimidi's Principle</label>
                </div>
                </div>
              </div>
            </div>

            <div className="question-item">
              <p className="question">Which method can be applied to detect the purity of metal?</p>
              <div className="options">
              <div className="question-item">
              <p className="question">Which method can be applied to detect the purity of metal?</p>
              <div className="options">
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
              </div>
            </div>
            </div>
            </div>
          </div>
          <div className="footer-navigation">
            <button className="button-primary">Proceed Next <i className="icon-arrow-forward"></i></button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddSurvey;