import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./utils/protectedRoute/ProtectedRoute";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";
import LoginPage from "./pages/loginPage/LoginPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";

function App() {
    // TODO: If the user is logged out then only show the login screen and nothing else.
    // TODO: Have a redirect that if the user isn't logged in it'll redirect them to the Login Page
    return (
        <Router>
            <Header />
            <main>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <ProtectedRoute exact isAuth={false} path="/dashboard">
                    <DashboardPage />
                </ProtectedRoute>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
