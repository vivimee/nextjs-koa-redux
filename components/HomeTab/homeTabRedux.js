import { createReducer } from "../../store";

export const initialState = {
  name: "default"
};

export const SET_HOME_NAME = "SET_HOME_NAME";

export const homeTabActionCreators = {
  setHomeTabName: () => async dispatch => {
    const name = await new Promise(resolve => {
      setTimeout(() => {
        resolve("this is home tab name");
      }, 200);
    });
    dispatch({ type: SET_HOME_NAME, data: name });
  }
};

const homeTab = createReducer(initialState, {
  [SET_HOME_NAME](state, action) {
    return {
      ...state,
      name: action.data
    };
  }
});

export default homeTab;
