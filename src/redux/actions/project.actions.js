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
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
} from "../constants/project.constants";
import axios from "../../utils/http-common";

const serverUrl =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_HEROKU_SERVER_URL}api/projects`
    : "api/projects";

export const listProjects = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_ALL_REQUEST });
    const { data } = await axios.get(`${serverUrl}`);
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
    const { data } = await axios.get(`${serverUrl}/${id}`);
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

export const createProject =
  (
    title,
    slug,
    shortDescription,
    longDescription,
    projectType,
    projectStatus,
    projectUrl
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PROJECT_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `${serverUrl}`,
        {
          title,
          slug,
          shortDescription,
          longDescription,
          projectType,
          projectStatus,
          projectUrl,
        },
        config
      );
      dispatch({ type: PROJECT_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PROJECT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_REMOVE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(`${serverUrl}/${id}`, config);
    dispatch({ type: PROJECT_REMOVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROJECT_REMOVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProject = (project) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `${serverUrl}/${project._id}`,
      project,
      config
    );
    dispatch({ type: PROJECT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROJECT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
