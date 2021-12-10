import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
    // TODO: If the user is logged out then only show the login screen and nothing else.
    // TODO: Have a redirect that if the user isn't logged in it'll redirect them to the Login Page
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path="/">
                        <LoginPage />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
