import React from 'react';

const MySurveys = () => (
  <div className="container">
    <div className="dummy-component">
      <h1>Pro Verison Pricing Table</h1>
    </div>
    <div className="wrpper" style={{maxWidth: "600", margin: "0 auto"}}>
      <table>
        <tr>
          <th>Standard</th>
          <th>Premium</th>
        </tr>
        <tr>
          <td>Unlimited Surveys</td>
          <td>Unlimited Surveys</td>
        </tr>
        <tr>
          <td>Unlimited Questions</td>
          <td>Unlimited Questions</td>
        </tr>
        <tr>
          <td>5000 Responses / Month</td>
          <td>Unlimited Responses / Month</td>
        </tr>
        <tr>
          <td>Download Max. 5 Reports / Month</td>
          <td>Download Unlimited Reports / Month</td>
        </tr>
        <tr>
          <td>RS.4000 / year</td>
          <td>Rs.7500 / year</td>
        </tr>
        <tr>
          <td><button className="button-primary">Buy Now</button></td>
          <td><button className="button-primary">Buy Now</button></td>
        </tr>
      </table>
    </div>
  </div>
)

export default MySurveys;