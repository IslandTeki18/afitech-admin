import React from "react";
import "./EmployeeDetailsPage.scss";
import { Link } from "react-router-dom";

const EmployeeDetailsPage = () => {
    return (
        <div className="dkEmployeeDetailsPage">
            <div className="container fullScreen">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <h2>FirstName LastName Here</h2>
                    <Link to="/employee-list" className="btn btn-secondary">
                        back
                    </Link>
                </div>
                <div className="row">
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
                                <p>employee@email.com</p>
                            </div>
                            <div className="d-flex">
                                <h5 className="me-4">Created:</h5>
                                <p>DD/MM/YYYY</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <h5 className="me-4">Is Active:</h5>
                                <p className="text-danger">False</p>
                            </div>
                            <div className="btn-group">
                                <Link
                                    to="/employee/edit"
                                    className="btn btn-secondary"
                                >
                                    Edit
                                </Link>
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex mb-4">
                                <h5 className="me-4">First Name:</h5>
                                <p>Lorem Ipsom</p>
                            </div>
                            <div className="d-flex mb-4">
                                <h5 className="me-4">Last Name:</h5>
                                <p>Lorem Ipsom</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex mb-4">
                                <h5 className="me-4">Phone:</h5>
                                <p>801-555-5555</p>
                            </div>
                            <div className="d-flex mb-4">
                                <h5 className="me-4">Position:</h5>
                                <p>Full Stack Web Developer</p>
                            </div>
                        </div>
                        <div className="aboutEmployeeWrapper mb-4">
                            <h5 className="mb-2">About Employee:</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
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
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetailsPage;
