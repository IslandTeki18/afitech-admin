import {
  TESTIMONIAL_LIST_REQUEST,
  TESTIMONIAL_LIST_SUCCESS,
  TESTIMONIAL_LIST_FAIL,
  TESTIMONIAL_DETAILS_REQUEST,
  TESTIMONIAL_DETAILS_SUCCESS,
  TESTIMONIAL_DETAILS_FAIL,
  TESTIMONIAL_CREATE_REQUEST,
  TESTIMONIAL_CREATE_SUCCESS,
  TESTIMONIAL_CREATE_FAIL,
  TESTIMONIAL_DELETE_REQUEST,
  TESTIMONIAL_DELETE_SUCCESS,
  TESTIMONIAL_DELETE_FAIL,
  TESTIMONIAL_UPDATE_REQUEST,
  TESTIMONIAL_UPDATE_SUCCESS,
  TESTIMONIAL_UPDATE_FAIL,
} from "../constants/testimonial.constants";
import axios from "axios";

const serverUrl =
process.env.NODE_ENV === "production" ? `${process.env.REACT_APP_HEROKU_SERVER_URL}api/testimonials` : 'api/testimonials';

export const listTestimonials = () => async (dispatch) => {
  try {
    dispatch({ type: TESTIMONIAL_LIST_REQUEST });
    const { data } = await axios.get(`${serverUrl}`);
    dispatch({ type: TESTIMONIAL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailTestimonial = (id) => async (dispatch) => {
  try {
    dispatch({ type: TESTIMONIAL_DETAILS_REQUEST });
    const { data } = await axios.get(`${serverUrl}/${id}`);
    dispatch({ type: TESTIMONIAL_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createTestimonial =
  (
    name,
    testimonial,
    clientCompanyPosition,
    companyName,
    companyWebsite,
    companyLocation,
    isActive
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: TESTIMONIAL_CREATE_REQUEST });
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
          name,
          testimonial,
          clientCompanyPosition,
          companyName,
          companyWebsite,
          companyLocation,
          isActive,
        },
        config
      );
      dispatch({ type: TESTIMONIAL_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: TESTIMONIAL_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteTestimonial = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: TESTIMONIAL_DELETE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(`${serverUrl}/${id}`, config);
    dispatch({ type: TESTIMONIAL_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateTestimonial = (testimonial) => async (dispatch, getState) => {
  try {
    dispatch({ type: TESTIMONIAL_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`${serverUrl}/${testimonial._id}`, testimonial, config);
    dispatch({ type: TESTIMONIAL_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
