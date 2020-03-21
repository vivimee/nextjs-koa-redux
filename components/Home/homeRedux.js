import createReducer from "../../lib/createReducer";

export const initialState = {
  name: "home"
};

export const SET_HOME_NAME = "SET_HOME_NAME";

export const homeActions = {
  setHome: () => async dispatch => {
    const name = await new Promise(resolve => {
      setTimeout(() => {
        resolve("halo redux");
      }, 200);
    });
    dispatch({ type: SET_HOME_NAME, data: name });
  }
};

const home = createReducer(initialState, {
  [SET_HOME_NAME](state, action) {
    return {
      ...state,
      name: action.data
    };
  }
});

export default home;
