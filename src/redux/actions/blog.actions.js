import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_REMOVE_REQUEST,
  BLOG_REMOVE_SUCCESS,
  BLOG_REMOVE_FAIL,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
} from "../constants/blog.constants";
import axios from "../../utils/http-common";

const serverUrl =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_HEROKU_SERVER_URL}api/blogs`
    : "api/blogs";

export const listBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_LIST_REQUEST });
    const { data } = await axios.get(`${serverUrl}`);
    dispatch({ type: BLOG_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_DETAILS_REQUEST });
    const { data } = await axios.get(`${serverUrl}/${id}`);
    dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createBlog =
  (title, type, shortDescription, longDescription, content) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: BLOG_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `${serverUrl}`,
        { title, type, shortDescription, longDescription, content },
        config
      );
      dispatch({ type: BLOG_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: BLOG_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteBlog = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOG_REMOVE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(`${serverUrl}/${id}`, config);
    dispatch({ type: BLOG_REMOVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_REMOVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateBlog = (blog) => async (dispatch, getState) => {
  try {
    dispatch({ type: BLOG_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`${serverUrl}/${blog._id}`, blog, config);
    dispatch({ type: BLOG_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
