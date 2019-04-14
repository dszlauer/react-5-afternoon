import React, { Component } from "react";
// 1. Let's begin by opening src/components/WizardEleven/WizardEleven.js and importing connect from react-redux.
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class WizardEleven extends Component {
  render() {
    console.log("PROPS", this.props);
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>Here is an over view of your form:</p>

          <div>
            <div className="overarching-div">
              <div className="form">
                Name:
                <p className="p2">
                  {this.props.firstName} {this.props.lastName}
                </p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                Email:
                <p className="p2">{this.props.email}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                What type of loan will you be needing?:
                <p className="p2">{this.props.loanType}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                What type of property are you purchasing?:
                <p className="p2">{this.props.propertyType}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                In what city will the property be located?:
                <p className="p2">{this.props.city}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                Type of property the loan is applied to:
                <p className="p2">{this.props.propToBeUsedOn}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                Have you already found your new home?:
                <p className="p2">{String(this.props.found)}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                Currently working with a real estate agent?:
                <p className="p2">{this.props.realEstateAgent}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                Estimated purchase price of the home:
                <p className="p2">{this.props.cost}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                Down payment:
                <p className="p2">{this.props.downPayment}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                Credit score:
                <p className="p2">{this.props.credit}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                Bankruptcy history:
                <p className="p2">{this.props.history}</p>
              </div>
            </div>

            <div className="overarching-div">
              <div className="form">
                Current Address:
                <p className="p2">
                  {this.props.addressOne} {this.props.addressTwo}{" "}
                  {this.props.addressThree}
                </p>
              </div>
            </div>

            <div className="row">
              <Link to="/finish">
                <button>Submit</button>
              </Link>
              <Link to="/">
                <button>Start Over</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// 2. Before we create our connect statement, let's make a mapStateToProps function. Instead of passing the entire state from the store, we are going to pick very specific properties. The list of properties we'll need are listed in the instructions above.
function mapStateToProps(state) {
  console.log("STATE", state);
  return {
    loanType: state.loanType,
    propertyType: state.propertyType,
    city: state.city,
    propToBeUsedOn: state.propToBeUsedOn,
    found: state.found,
    realEstateAgent: state.realEstateAgent,
    cost: state.cost,
    downPayment: state.downPayment,
    credit: state.credit,
    history: state.history,
    addressOne: state.addressOne,
    addressTwo: state.addressTwo,
    addressThree: state.addressThree,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email
  };
}

// 3. Now that we have the parts of state we want, we can create our connect statement.
export default connect(mapStateToProps)(WizardEleven);
