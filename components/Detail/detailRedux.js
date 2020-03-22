import {createReducer} from "../../store";

const initialState = {
  name: "detail"
};

const SET_DETAIL_NAME = "SET_DETAIL_NAME";

export const detailActions = {
  setDetail: () => async dispatch => {
    const name = await new Promise(resolve => {
      setTimeout(() => {
        resolve("halo detail redux");
      }, 200);
    });
    dispatch({ type: SET_DETAIL_NAME, data: name });
  }
};

const detail = createReducer(initialState, {
  [SET_DETAIL_NAME](state, action) {
    return {
      ...state,
      name: action.data
    };
  }
});

export default detail;
