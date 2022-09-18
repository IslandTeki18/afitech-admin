import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "./app/store";

import DashboardPage from "./pages/dashboardPage/DashboardPage";
import ProjectListPage from "./pages/projectListPage/ProjectListPage";
import ProjectEditPage from "./pages/projectEditPage/ProjectEditPage";
import ProjectDetailsPage from "./pages/projectDetailsPage/ProjectDetailsPage";
import Services from "./pages/services/Services";
import ServiceListPage from "./pages/services/serviceListPage/ServiceListPage";
import ServiceEditPage from "./pages/services/serviceEditPage/ServiceEditPage";
import ServiceDetailsPage from "./pages/services/serviceDetailsPage/ServiceDetailsPage";
import TestimonialListPage from "./pages/testimonialListPage/TestimonialListPage";
import TestimonialEditPage from "./pages/testimonialEditPage/TestimonialEditPage";
import TestimonialDetailsPage from "./pages/testimonialDetailsPage/TestimonialDetailsPage";
import BlogListPage from "./pages/blogListPage/BlogListPage";
import BlogDetailsPage from "./pages/blogDetailsPage/BlogDetailsPage";
import BlogEditPage from "./pages/blogEditPage/BlogEditPage";
import EmployeeListPage from "./pages/employeeListPage/EmployeeListPage";
import EmployeeEditPage from "./pages/employeeEditPage/EmployeeEditPage";
import EmployeeDetailsPage from "./pages/employeeDetailsPage/EmployeeDetailsPage";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DashboardPage />} />
          <Route path="projects" element={<ProjectListPage />}>
            <Route path=":projectId/edit" element={<ProjectEditPage />} />
            <Route path=":id" element={<ProjectDetailsPage />} />
          </Route>

          <Route path="services" element={<Services />}>
            <Route path="list" element={<ServiceListPage />} />
            <Route path=":serviceId/edit" element={<ServiceEditPage />} />
            <Route path=":id" element={<ServiceDetailsPage />} />
          </Route>

          <Route path="testimonials" element={<TestimonialListPage />}>
            <Route
              path=":testimonialId/edit"
              element={<TestimonialEditPage />}
            />
            <Route path=":id" element={<TestimonialDetailsPage />} />
          </Route>

          <Route path="blog-list" element={<BlogListPage />}>
            <Route path=":id" element={<BlogDetailsPage />} />
            <Route path=":blogId/edit" element={<BlogEditPage />} />
          </Route>

          <Route path="employee-list" element={<EmployeeListPage />}>
            <Route element={<EmployeeEditPage />} path=":employeeId/edit" />
            <Route path=":id" element={<EmployeeDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
