// 1. Our store will need an initial state when it loads for the first time. Let's create a constant variable called initialState that will have all of our state's initial values. The property list is listed above in the instructions.
const initialState = {
  loanType: "Home Purchase",
  propertyType: "Single Family Home",
  city: "",
  propToBeUsedOn: "",
  found: false,
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: "",
  history: "",
  addressOne: "",
  addressTwo: "",
  addressThree: "",
  firstName: "",
  lastName: "",
  email: ""
};

// 3. Before we create the action creators our store needs to determine how to update state, we need to create our action types. We'll put these action types in between our initialState and reducer function. We'll need two types for this step. One type for updating the loan type and one type for updating the property type.
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_AGENT = "UPDATE_AGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWN_PAYMENT = "UPDATE_DOWN_PAYMENT";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_ADDRESS_1 = "UPDATE_ADDRESS_1";
const UPDATE_ADDRESS_2 = "UPDATE_ADDRESS_2";
const UPDATE_ADDRESS_3 = "UPDATE_ADDRESS_3";
const UPDATE_FIRST = "UPDATE_FIRST";
const UPDATE_LAST = "UPDATE_LAST";
const UPDATE_EMAIL = "UPDATE_EMAIL";

// 2. Now that we have an initial state we can update our reducer function to have a state and action parameter. Using es6 default parameters we can default the state parameter to initialState. This will happen when the store is first created.
// 5. The last thing we need to do is update the reducer function to use a switch statement on the action.type. This is how our reducer will determine which part of state to update. Since we need to keep state immutable we will make use of Object.assign. Let's start by adding a switch statement to our reducer. The default case for this switch should just return state.
// 6. To add our action types to our reducer all we have to do is: case actionTypeVariableGoesHere. We'll then use Object.assign to get the previous value of state and update its loanType or propertyType property to the value on the payload.
function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOAN_TYPE:
      return Object.assign({}, state, { loanType: action.payload });
    case UPDATE_PROPERTY_TYPE:
      return Object.assign({}, state, { propertyType: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_PROP:
      return Object.assign({}, state, { propToBeUsedOn: action.payload });
    case UPDATE_FOUND:
      return Object.assign({}, state, { found: action.payload });
    case UPDATE_AGENT:
      return Object.assign({}, state, { realEstateAgent: action.payload });
    case UPDATE_COST:
      return Object.assign({}, state, { cost: action.payload });
    case UPDATE_DOWN_PAYMENT:
      return Object.assign({}, state, { downPayment: action.payload });
    case UPDATE_CREDIT:
      return Object.assign({}, state, { credit: action.payload });
    case UPDATE_HISTORY:
      return Object.assign({}, state, { history: action.payload });
    case UPDATE_ADDRESS_1:
      return Object.assign({}, state, { addressOne: action.payload });
    case UPDATE_ADDRESS_2:
      return Object.assign({}, state, { addressTwo: action.payload });
    case UPDATE_ADDRESS_3:
      return Object.assign({}, state, { addressThree: action.payload });
    case UPDATE_FIRST:
      return Object.assign({}, state, { firstName: action.payload });
    case UPDATE_LAST:
      return Object.assign({}, state, { lastName: action.payload });
    case UPDATE_EMAIL:
      return Object.assign({}, state, { email: action.payload });
    default:
      return state;
  }
}

// 4. Now that we have our two action types we can create action creators that use them. All an action creator does is return an object with a type and payload property. The payload will equal the value of the parameter in this case. The action creator for loan type will have a loanType parameter and the action creator for property type will have a property parameter. We also export these action creators so other components can use them. Let's add them under the reducer function.
export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  };
}

export function updatePropertyType(property) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateProp(prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  };
}

export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  };
}

export function updateAgent(agent) {
  return {
    type: UPDATE_AGENT,
    payload: agent
  };
}

export function updateCost(cost) {
  return {
    type: UPDATE_COST,
    payload: cost
  };
}

export function updateDownPayment(payment) {
  return {
    type: UPDATE_DOWN_PAYMENT,
    payload: payment
  };
}

export function updateCredit(credit) {
  return {
    type: UPDATE_CREDIT,
    payload: credit
  };
}

export function removeFromShoppingCartremoveFromShoppingCartremoveFromShoppingCart(
  history
) {
  return {
    type: UPDATE_HISTORY,
    payload: history
  };
}

export function updateAddress1(address) {
  return {
    type: UPDATE_ADDRESS_1,
    payload: address
  };
}
export function updateAddress2(address) {
  return {
    type: UPDATE_ADDRESS_2,
    payload: address
  };
}
export function updateAddress3(address) {
  return {
    type: UPDATE_ADDRESS_3,
    payload: address
  };
}

export function updateFirst(first) {
  return {
    type: UPDATE_FIRST,
    payload: first
  };
}
export function updateLast(last) {
  return {
    type: UPDATE_LAST,
    payload: last
  };
}
export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
}

export default reducer;
