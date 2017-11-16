import React from 'react';

class AddSurvey extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="page-title">Add Survey</div>
        <div className="wrapper add-survey">
          <div className="survey-step-1">
                <div className="form-group">
                  <label className="form-label">Survey Name</label>
                  <input type="text" className="form-control" placeholder="Eg: Customer Survey" required/>
                </div>

                <div className="form-group">
                  <label className="form-label">Survey Category</label>
                  <select className="form-control" name="category" id="category">
                    <option value="1">Politics</option>
                    <option value="2">Science and Technology</option>
                    <option value="3">Entertainment</option>
                    <option value="4">Sports</option>
                  </select>
                </div>
          </div>
          <div className="footer-navigation">
            <button className="button-secondary"><i className="icon-arrow-back"></i> Return Back</button>
            <button className="button-primary">Proceed Next <i className="icon-arrow-forward"></i></button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddSurvey;