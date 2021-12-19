import {
  PROJECT_ALL_REQUEST,
  PROJECT_ALL_SUCCESS,
  PROJECT_ALL_FAIL,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_REMOVE_REQUEST,
  PROJECT_REMOVE_SUCCESS,
  PROJECT_REMOVE_FAIL,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_RESET,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
} from "../constants/project.constants";
import axios from "axios";

export const listProjects = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_ALL_REQUEST });
    const { data } = await axios.get(
      "https://protected-oasis-46723.herokuapp.com/api/projects"
    );
    dispatch({ type: PROJECT_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROJECT_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailsProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://protected-oasis-46723.herokuapp.com/api/projects/${id}`
    );
    dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
