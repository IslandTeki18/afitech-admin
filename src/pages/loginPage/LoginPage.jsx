import { useState } from "react";
import "./LoginPage.scss";
import InputLabel from "../../components/inputLabel/InputLabel";

const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function onSubmitForm() {
        console.log(email);
        console.log(password);
    }
    return (
        <div className="rsLoginPage">
            <div className="container-fluid ps-md-0">
                <div className="row g-0">
                    <div className="bg-secondary col-lg-6" />
                    <div className="col-lg-6 maxHeightVH d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <div className="card p-5">
                                        <div className="card-body">
                                            <form onSubmit={onSubmitForm}>
                                                <h1 className="text-center">
                                                    Welcome back!
                                                </h1>
                                                <div className="mb-4">
                                                    <InputLabel
                                                        type="email"
                                                        labelText="Email"
                                                        placeholder="Email..."
                                                        id="loginEmailInput"
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
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
                                                            !email || !password
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
