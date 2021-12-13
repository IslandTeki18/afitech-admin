import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./utils/protectedRoute/ProtectedRoute";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";
import LoginPage from "./pages/loginPage/LoginPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import ProjectListPage from "./pages/projectListPage/ProjectListPage";
import ServiceListPage from "./pages/serviceListPage/ServiceListPage";
import TestimonialListPage from "./pages/testimonialListPage/TestimonialListPage";
import EmployeeListPage from "./pages/employeeListPage/EmployeeListPage";
import BlogListPage from "./pages/blogListPage/BlogListPage";
import BlogDetailsPage from "./pages/blogDetailsPage/BlogDetailsPage";
import BlogEditPage from "./pages/blogEditPage/BlogEditPage";

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
                <ProtectedRoute exact isAuth={isAuth} path="/service-list">
                    <ServiceListPage />
                </ProtectedRoute>
                <ProtectedRoute exact isAuth={isAuth} path="/testimonial-list">
                    <TestimonialListPage />
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
            </main>
            {isAuth && <Footer />}
        </Router>
    );
}

export default App;
