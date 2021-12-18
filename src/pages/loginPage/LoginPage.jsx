import { useEffect, useState } from "react";
import "./LoginPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../actions/user.actions";
import InputLabel from "../../components/inputLabel/InputLabel";

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userLogin = useSelector((state) => state.userLogin);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (userLogin.userInfo) {
            history.push("/dashboard");
        }
    }, [history, userLogin.userInfo]);

    function onSubmitForm(e) {
        e.preventDefault();
        dispatch(login(userName, password));
        history.push("/dashboard");
    }
    return (
        <div className="rsLoginPage">
            <div className="container-fluid ps-md-0">
                <div className="row g-0">
                    <div className="bg-secondary col-lg-6 d-none d-xl-block" />
                    <div className="fullScreen col-md-12 col-xl-6 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <div className="card p-md-5">
                                        <div className="card-body">
                                            <h1 className="text-center pb-md-3">
                                                Welcome back!
                                            </h1>
                                            <form onSubmit={onSubmitForm}>
                                                <div className="mb-4">
                                                    <InputLabel
                                                        type="text"
                                                        labelText="Username"
                                                        placeholder="Username..."
                                                        id="loginUsernameInput"
                                                        value={userName}
                                                        onChange={(e) =>
                                                            setUserName(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <InputLabel
                                                        type="password"
                                                        labelText="Password"
                                                        placeholder="Password..."
                                                        id="loginPasswordInput"
                                                        value={password}
                                                        onChange={(e) =>
                                                            setPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="d-grid">
                                                    <button
                                                        className="btn btn-primary"
                                                        disabled={
                                                            !userName ||
                                                            !password
                                                        }
                                                        type="submit"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
