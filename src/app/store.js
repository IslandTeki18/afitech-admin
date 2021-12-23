import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userDetailsReducer,
  userUpdateReducer,
} from "../reducers/user.reducers";
import {
  projectListReducer,
  projectDetailsReducer,
  projectCreateReducer,
  projectDeleteReducer,
  projectUpdateReducer,
} from "../reducers/project.reducers";
import {
  blogListReducer,
  blogDetailsReducer,
  blogCreateReducer,
  blogRemoveReducer,
  blogUpdateReducer,
} from "../reducers/blog.reducers";
import {
  serviceListReducer,
  serviceDetailsReducer,
  serviceCreateReducer,
  serviceDeleteReducer,
  serviceUpdateReducer,
} from "../reducers/service.reducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  projectList: projectListReducer,
  projectDetails: projectDetailsReducer,
  projectDelete: projectDeleteReducer,
  projectCreate: projectCreateReducer,
  projectUpdate: projectUpdateReducer,
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  blogRemove: blogRemoveReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  serviceList: serviceListReducer,
  serviceDetails: serviceDetailsReducer,
  serviceDelete: serviceDeleteReducer,
  serviceCreate: serviceCreateReducer,
  serviceUpdate: serviceUpdateReducer,
});

const currentUserFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: currentUserFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
