import React from "react";
import "./TestimonialDetailsPage.scss";
import { Link } from "react-router-dom";

const TestimonialDetailsPage = () => {
    return (
        <div className="dkTestimonialDetailsPage">
            <div className="container fullScreen">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <h2>Client Name Here</h2>
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
                                <h5 className="me-4">Name:</h5>
                                <p>John Doe</p>
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
                                    to="/testimonial/edit"
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
                        <div className="d-flex mb-2">
                            <h5 className="me-4">Position at Company:</h5>
                            <p>Lorem Ipsom</p>
                        </div>
                        <div className="d-flex mb-2">
                            <h5 className="me-4">Company Website:</h5>
                            <p>Lorem Ipsom</p>
                        </div>
                        <div className="d-flex mb-2">
                            <h5 className="me-4">Company Location:</h5>
                            <p>Lorem Ipsom</p>
                        </div>
                        <div className="testimonialWrapper mb-4">
                            <h5 className="mb-2"> Testimonail:</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodox
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

export default TestimonialDetailsPage;
