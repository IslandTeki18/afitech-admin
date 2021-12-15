import React from "react";
import "./ServiceDetailsPage.scss";
import { Link } from "react-router-dom";

const ServiceDetailsPage = () => {
    return (
        <div className="dkServiceDetailsPage">
            <div className="container fullScreen">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <h2>Service Title Here</h2>
                    <Link to="/service-list" className="btn btn-secondary">
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
                                <h5 className="me-4">Type:</h5>
                                <p>Full Stack Web App</p>
                            </div>
                            <div className="d-flex">
                                <h5 className="me-4">Started:</h5>
                                <p>DD/MM/YYYY</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <h5 className="me-4">Is Available:</h5>
                                <p className="text-danger">False</p>
                            </div>
                            <div className="btn-group">
                                <Link
                                    to="/service/edit"
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
                        <div className="descriptionWrapper mb-4">
                            <h5 className="mb-2"> Short Description:</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="descriptionWrapper mb-4">
                            <h5 className="mb-2"> Long Description:</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <hr className="m-4" />
                        <h4 className="mb-3">Service Features</h4>
                        <div className="mb-4">
                            <h6 className="me-4">Feature One:</h6>
                            <p>
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;
