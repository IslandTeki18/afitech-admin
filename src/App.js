import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./utils/protectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";
import LoginPage from "./pages/loginPage/LoginPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import ProjectListPage from "./pages/projectListPage/ProjectListPage";
import ProjectEditPage from "./pages/projectEditPage/ProjectEditPage";
import ProjectDetailsPage from "./pages/projectDetailsPage/ProjectDetailsPage";
import ServiceListPage from "./pages/serviceListPage/ServiceListPage";
import ServiceEditPage from "./pages/serviceEditPage/ServiceEditPage";
import ServiceDetailsPage from "./pages/serviceDetailsPage/ServiceDetailsPage";
import TestimonialListPage from "./pages/testimonialListPage/TestimonialListPage";
import TestimonialEditPage from "./pages/testimonialEditPage/TestimonialEditPage";
import TestimonialDetailsPage from "./pages/testimonialDetailsPage/TestimonialDetailsPage";
import BlogListPage from "./pages/blogListPage/BlogListPage";
import BlogDetailsPage from "./pages/blogDetailsPage/BlogDetailsPage";
import BlogEditPage from "./pages/blogEditPage/BlogEditPage";
import EmployeeListPage from "./pages/employeeListPage/EmployeeListPage";
import EmployeeEditPage from "./pages/employeeEditPage/EmployeeEditPage";
import EmployeeDetailsPage from "./pages/employeeDetailsPage/EmployeeDetailsPage";

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      {userInfo && <Header />}
      <main>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <ProtectedRoute exact isAuth={userInfo} path="/dashboard">
          <DashboardPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/project-list">
          <ProjectListPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/project/:projectId/edit">
          <ProjectEditPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/project/:id">
          <ProjectDetailsPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/service-list">
          <ServiceListPage />
        </ProtectedRoute>
        <ProtectedRoute isAuth={userInfo} path="/service/edit">
          <ServiceEditPage />
        </ProtectedRoute>
        <ProtectedRoute isAuth={userInfo} path="/service/details">
          <ServiceDetailsPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/testimonial-list">
          <TestimonialListPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/testimonial/edit">
          <TestimonialEditPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/testimonial/details">
          <TestimonialDetailsPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/blog-list">
          <BlogListPage />
        </ProtectedRoute>
        <ProtectedRoute isAuth={userInfo} path="/blog/details">
          <BlogDetailsPage />
        </ProtectedRoute>
        <ProtectedRoute isAuth={userInfo} path="/blog/edit">
          <BlogEditPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/employee-list">
          <EmployeeListPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/employee/edit">
          <EmployeeEditPage />
        </ProtectedRoute>
        <ProtectedRoute exact isAuth={userInfo} path="/employee/details">
          <EmployeeDetailsPage />
        </ProtectedRoute>
      </main>
      {userInfo && <Footer />}
    </Router>
  );
}

export default App;
