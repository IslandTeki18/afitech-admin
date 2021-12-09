import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";

function App() {

  // TODO: If the user is logged out then only show the login screen and nothing else.
  // TODO: Have a redirect that if the user isn't logged in it'll redirect them to the Login Page
    return (
        <Router>
            <Header />
            <main>
                <h1>Hello world</h1>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
