import {WITHDRAW_MONEY,DEPOSITE_MONEY} from "../actions/bank-actions"

const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case WITHDRAW_MONEY:
      return state - action.payload;
      break;
    case DEPOSITE_MONEY:
      return state + action.payload;
      break;
    default:
      return state;
      break;
  }
};

export default bankReducer