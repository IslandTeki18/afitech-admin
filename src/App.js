import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./utils/protectedRoute/ProtectedRoute";
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
import BlogListPage from "./pages/blogListPage/BlogListPage";
import BlogDetailsPage from "./pages/blogDetailsPage/BlogDetailsPage";
import BlogEditPage from "./pages/blogEditPage/BlogEditPage";
import EmployeeListPage from "./pages/employeeListPage/EmployeeListPage";
import EmployeeEditPage from "./pages/employeeEditPage/EmployeeEditPage";

function App() {
    // Hardcode Auth for now
    let isAuth = true;
    return (
        <Router>
            {isAuth && <Header />}
            <main>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <ProtectedRoute exact isAuth={isAuth} path="/dashboard">
                    <DashboardPage />
                </ProtectedRoute>
                <ProtectedRoute exact isAuth={isAuth} path="/project-list">
                    <ProjectListPage />
                </ProtectedRoute>
                <ProtectedRoute isAuth={isAuth} path="/project/edit">
                    <ProjectEditPage />
                </ProtectedRoute>
                <ProtectedRoute isAuth={isAuth} path="/project/details">
                    <ProjectDetailsPage />
                </ProtectedRoute>
                <ProtectedRoute exact isAuth={isAuth} path="/service-list">
                    <ServiceListPage />
                </ProtectedRoute>
                <ProtectedRoute isAuth={isAuth} path="/service/edit">
                    <ServiceEditPage />
                </ProtectedRoute>
                <ProtectedRoute isAuth={isAuth} path="/service/details">
                    <ServiceDetailsPage />
                </ProtectedRoute>
                <ProtectedRoute exact isAuth={isAuth} path="/testimonial-list">
                    <TestimonialListPage />
                </ProtectedRoute>
                <ProtectedRoute exact isAuth={isAuth} path="/testimonial/edit">
                    <TestimonialEditPage />
                </ProtectedRoute>
                <ProtectedRoute exact isAuth={isAuth} path="/blog-list">
                    <BlogListPage />
                </ProtectedRoute>
                <ProtectedRoute isAuth={isAuth} path="/blog/details">
                    <BlogDetailsPage />
                </ProtectedRoute>
                <ProtectedRoute isAuth={isAuth} path="/blog/edit">
                    <BlogEditPage />
                </ProtectedRoute>
                <ProtectedRoute exact isAuth={isAuth} path="/employee-list">
                    <EmployeeListPage />
                </ProtectedRoute>
                <ProtectedRoute exact isAuth={isAuth} path="/employee/edit">
                    <EmployeeEditPage />
                </ProtectedRoute>
            </main>
            {isAuth && <Footer />}
        </Router>
    );
}

export default App;
