import request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const ALL_COMMENTS = 'ALL_COMMENTS'
export const NEW_COMMENT = 'NEW_COMMENT'

// GET ALL COMMENTS
function allComments (comments) {
  return {
    type: ALL_COMMENTS,
    payload: comments
  }
}

export const getComments = productId => dispatch => {
  request(`${baseUrl}/products/${productId}/comments`)
    .then(response => {
      const action = allComments(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// CREATE NEW COMMENT
function newComment (comment) {
  return {
    type: NEW_COMMENT,
    payload: comment
  }
}

export const createComment = data => (dispatch, getState) => {
  const state = getState()
  const { login } = state
  
  request
    .post(`${baseUrl}/comments`)
    .set('Authorization', `Bearer ${login}`)
    .send(data)
    .then(response => {      
      const action = newComment(response.body)

      dispatch(action)
    })
    .catch(console.error)
}
