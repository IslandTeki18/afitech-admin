import React from "react";
import "./ProjectDetailsPage.scss";
import { Link } from "react-router-dom";

const ProjectDetailsPage = () => {
    return (
        <div className="dkProjectDetailsPage">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <h2>Project Title Here</h2>
                    <Link to="/project-list" className="btn btn-secondary">
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
                                <h5 className="me-4">Author:</h5>
                                <p>John Doe</p>
                            </div>
                            <div className="d-flex">
                                <h5 className="me-4">Created:</h5>
                                <p>DD/MM/YYYY</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <h5 className="me-4">Is Published:</h5>
                                <p className="text-danger">False</p>
                            </div>
                            <div className="btn-group">
                                <Link
                                    to="/project/edit"
                                    className="btn btn-secondary"
                                >
                                    Edit
                                </Link>
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <h5 className="me-4">Slug:</h5>
                            <p>PRJ-001-FSW</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex mb-4">
                            <h5 className="me-4">Title:</h5>
                            <p>Lorem Ipsom</p>
                        </div>
                        <div className="d-flex mb-4">
                            <h5 className="me-4">Project Type:</h5>
                            <p>Lorem Ipsom</p>
                        </div>
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
                        <div className="d-flex mb-4">
                            <h5 className="me-4">Project Status:</h5>
                            <p>Lorem Ipsom</p>
                        </div>
                        <div className="d-flex mb-4">
                            <h5 className="me-4">Project URL:</h5>
                            <Link to="/project-list">Link to website</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
