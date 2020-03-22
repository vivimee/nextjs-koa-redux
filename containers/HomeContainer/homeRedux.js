import { combineReducers } from "redux";
import { createReducer } from "../../store";
import homeTab from "../../components/HomeTab/homeTabRedux";

const initialState = {
  name: "default"
};

const SET_NAME = "SET_NAME";

export const homeActionCreators = {
  initDataOnServer: seconds => async dispatch => {
    const name = await new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.random());
      }, seconds * 1000);
    });
    dispatch({ type: SET_NAME, data: `initDataOnServer-${name}` });
  }
};

const homeContainer = createReducer(initialState, {
  [SET_NAME]: (state, aciton) => {
    return {
      ...state,
      name: aciton.data
    };
  }
});

export default combineReducers({ homeContainer, homeTab });
