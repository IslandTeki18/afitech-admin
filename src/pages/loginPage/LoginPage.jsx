import { useEffect, useState } from "react";
import "./LoginPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/user.actions";
import InputLabel from "../../components/inputLabel/InputLabel";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  function onSubmitForm(e) {
    e.preventDefault();
    dispatch(login(userName, password));
    navigate("/dashboard");
  }
  return (
    <div className="rsLoginPage">
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="bg-secondary col-lg-6 d-none d-xl-block" />
          <div className="fullScreen col-md-12 col-xl-6 d-flex align-items-center">
            <div className="container">
              <div className="row">
                {loading ? (
                  <div className="d-flex justify-content-center">
                    <Loader />
                  </div>
                ) : (
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <div className="card p-md-5 shadow-lg border-0">
                      <div className="card-body">
                        <h1 className="text-center pb-md-3">AFI ADMIN</h1>
                        {error && <Message variant="danger">{error}</Message>}
                        <form onSubmit={onSubmitForm}>
                          <div className="mb-4">
                            <InputLabel
                              type="text"
                              labelText="Username"
                              placeholder="Username..."
                              id="loginUsernameInput"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <InputLabel
                              type="password"
                              labelText="Password"
                              placeholder="Password..."
                              id="loginPasswordInput"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div className="d-grid">
                            <button
                              className="btn btn-primary"
                              disabled={!userName || !password}
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
