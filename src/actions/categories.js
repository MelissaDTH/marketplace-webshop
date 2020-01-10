import request from "superagent";

export const CATEGORY_FETCHED = "CATEGORY_FETCHED";
export const ALL_CATEGORIES = "ALL_CATEGORIES";

const baseUrl = "http://localhost:4000";

// GET ALL CATEGORIES
function allCategories(categories) {
  return {
    type: ALL_CATEGORIES,
    payload: categories
  };
}

export const getCategories = () => (dispatch, getState) => {
  const state = getState();
  const { categories } = state;

  if (!categories.length) {
    request(`${baseUrl}/category`)
      .then(response => {
        const action = allCategories(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

//GET ONE CATEGORY
const categoryFetched = category => ({
  type: CATEGORY_FETCHED,
  payload: category
});

export const loadCategory = categoryId => (dispatch, getState) => {
  // console.log("getState", getState().category);

  if (getState().category.length) return;

  request(`${baseUrl}/category/${categoryId}`)
    .then(response => {
      // console.log("action", response);
      dispatch(categoryFetched(response.body));
    })
    .catch(console.error);
};
