import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./utils/protectedRoute/ProtectedRoute";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";
import LoginPage from "./pages/loginPage/LoginPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import ProjectListPage from "./pages/projectListPage/ProjectListPage";

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
            </main>
            {isAuth && <Footer />}
        </Router>
    );
}

export default App;
