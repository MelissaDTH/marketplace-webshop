import request from "superagent";
const baseUrl = 'http://localhost:4000'

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const JWT = "JWT";

// LOGIN
export const login = (username, password) => (dispatch) => {
  request
    .post(`${baseUrl}/login`)
    .send({ username, password })
    .then(response => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.body.jwt
      });
    })
    .catch(console.error);
};

// SIGNUP
export const signup = (username, password) => (dispatch) => {
  request
    .post(`${baseUrl}/signup`)
    .send({ username, password })
    .then(response => {
      dispatch(
        {
          type: SIGNUP_SUCCESS,
          payload: response.body
        }
      )
    })
    .catch(console.error)
}

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

//JWT  dispatches the JWT from the /login response body inside an action with type JWT.
export const loginJWT = (username, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ username, password })
    .then(response => {
      const action = jwt(response.body.jwt);

      dispatch(action);
    });
};
