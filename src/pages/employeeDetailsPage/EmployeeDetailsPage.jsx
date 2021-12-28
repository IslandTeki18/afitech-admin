import { useEffect } from "react";
import "./EmployeeDetailsPage.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailEmployee } from "../../actions/employee.actions";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const employeeDetails = useSelector((state) => state.employeeDetails);
  const { loading, error, employee } = employeeDetails;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(detailEmployee(id));
  }, [dispatch, id]);
  return (
    <div className="dkEmployeeDetailsPage">
      <div className="container fullScreen">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h2>
            {employee.firstName} {employee.lastName}
          </h2>
          <Link to="/employee-list" className="btn btn-secondary">
            back
          </Link>
        </div>
        <div className="row">
          {error && <Message variant="danger">{error}</Message>}
          {loading ? (
            <div className="d-flex justify-content-center">
              <Loader />
            </div>
          ) : (
            <>
              <div className="col-lg-6">
                <div className="mb-3">
                  <img
                    src="https://via.placeholder.com/700x400"
                    alt="placeholder"
                    className="img-fluid mb-3"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <h5 className="me-4">Email:</h5>
                    <p>{employee.email}</p>
                  </div>
                  <div className="d-flex">
                    <h5 className="me-4">Created:</h5>
                    <p>
                      {new Date(employee.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }
                      )}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <h5 className="me-4">Is Active:</h5>
                    <p
                      className={`text-${
                        employee.isActive ? "success" : "danger"
                      }`}
                    >
                      {employee.isActive ? "Yes" : "No"}
                    </p>
                  </div>
                  <Link
                    to={`/employee/${employee._id}/edit`}
                    className="btn btn-secondary"
                  >
                    Edit
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex mb-4">
                    <h5 className="me-4">First Name:</h5>
                    <p>{employee.firstName}</p>
                  </div>
                  <div className="d-flex mb-4">
                    <h5 className="me-4">Last Name:</h5>
                    <p>{employee.lastName}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex mb-4">
                    <h5 className="me-4">Phone:</h5>
                    <p>{employee.phone}</p>
                  </div>
                  <div className="d-flex mb-4">
                    <h5 className="me-4">Position:</h5>
                    <p>{employee.position}</p>
                  </div>
                </div>
                <div className="aboutEmployeeWrapper mb-4">
                  <h5 className="mb-2">About Employee:</h5>
                  <p>{employee.aboutEmployee}</p>
                </div>

                <hr />
                <h3 className="mb-4">Social Media Links</h3>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex">
                    <h5 className="me-4">Youtube:</h5>
                    <p>urlToYoutube.com</p>
                  </div>
                  <div className="d-flex">
                    <h5 className="me-4">Twitter:</h5>
                    <p>urlToTwitterAccount.com</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex">
                    <h5 className="me-4">LinkedIn:</h5>
                    <p>urlToLinkedInAccount.com</p>
                  </div>
                  <div className="d-flex">
                    <h5 className="me-4">Facebook:</h5>
                    <p>urlToFacebookAccount.com</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex">
                    <h5 className="me-4">Instagram:</h5>
                    <p>urlToInstagramAccount.com</p>
                  </div>
                  <div className="d-flex">
                    <h5 className="me-4">Github:</h5>
                    <p>urlToGithubAccount.com</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsPage;
