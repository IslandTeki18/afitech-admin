import {
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAIL,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_CREATE_FAIL,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_DELETE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
} from "../constants/employee.constants";
import axios from "axios";

const serverUrl = process.env.NODE_ENV === "production" ? `${process.env.REACT_APP_HEROKU_SERVER_URL}api/employee` : 'api/blogs';

export const listEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_LIST_REQUEST });
    const { data } = await axios.get(`${serverUrl}`);
    dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailEmployee = (id) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_DETAILS_REQUEST });
    const { data } = await axios.get(`${serverUrl}/${id}`);
    dispatch({ type: EMPLOYEE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createEmployee =
  (firstName, lastName, phone, email, isActive, position, aboutEmployee) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: EMPLOYEE_CREATE_REQUEST });
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
        {
          firstName,
          lastName,
          phone,
          email,
          isActive,
          position,
          aboutEmployee,
        },
        config
      );
      dispatch({ type: EMPLOYEE_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteEmployee = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: EMPLOYEE_DELETE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(`${serverUrl}/${id}`, config);
    dispatch({ type: EMPLOYEE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateEmployee = (blog) => async (dispatch, getState) => {
  try {
    dispatch({ type: EMPLOYEE_UPDATE_REQUEST });
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
    dispatch({ type: EMPLOYEE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
