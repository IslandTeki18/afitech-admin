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
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
} from "../constants/project.constants";

export const projectListReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_ALL_REQUEST:
      return { loading: true, projects: [] };
    case PROJECT_ALL_SUCCESS:
      return { loading: false, projects: action.payload.projects };
    case PROJECT_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const projectDetailsReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PROJECT_DETAILS_SUCCESS:
      return { loading: false, project: action.payload };
    case PROJECT_DETAILS_FAIL:
      return { loading: false, error: action.payloads };
    default:
      return state;
  }
};

export const projectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_REMOVE_REQUEST:
      return { loading: true };
    case PROJECT_REMOVE_SUCCESS:
      return { loading: false, success: true };
    case PROJECT_REMOVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const projectCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_CREATE_REQUEST:
      return { loading: true };
    case PROJECT_CREATE_SUCCESS:
      return { loading: false, project: action.payload, success: true };
    case PROJECT_CREATE_SUCCESS:
      return { loading: false, error: action.payload };
    case PROJECT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const projectUpdateReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_UPDATE_REQUEST:
      return { loading: false };
    case PROJECT_UPDATE_SUCCESS:
      return { loading: true, success: true, project: action.payload };
    case PROJECT_UPDATE_FAIL:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};
