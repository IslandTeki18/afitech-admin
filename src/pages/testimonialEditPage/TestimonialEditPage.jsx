import React from "react";
import "./TestimonialEditPage.scss";
import { Link } from "react-router-dom";
import InputLabel from "../../components/inputLabel/InputLabel";

const TestimonialEditPage = () => {
    return (
        <div className="dkTestimonialEditPage">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center my-3">
                    <h2>Testimonial Edit Page</h2>
                    <Link className="btn btn-secondary" to="/testimonial/details">
                        back
                    </Link>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="my-3">
                                <img
                                    src="https://via.placeholder.com/700x400"
                                    alt="placeholder"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="testimonialImageInputLabel"
                                    type="file"
                                    labelText="Image"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="activeChecked"
                                    type="checkbox"
                                    isToggle
                                    labelText="Is Testimonial Active"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-3">
                                <InputLabel
                                    inputId="testimonialNameInputLabel"
                                    type="text"
                                    labelText="Name of Client"
                                    placeholder="First Name, Last Name"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="testimonialCompanyNameInputLabel"
                                    type="text"
                                    labelText="Company Name"
                                    placeholder="Company Name..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="testimonialClientCompanyPositionInputLabel"
                                    type="text"
                                    labelText="Client Position in Company"
                                    placeholder="CEO, HR Manager, Founder..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="testimonialCompanyWebsiteInputLabel"
                                    type="text"
                                    labelText="Company Website"
                                    placeholder="https://www.example.io"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="testimonialCompanyLocationInputLabel"
                                    type="text"
                                    labelText="Company Location"
                                    placeholder="City, State"
                                />
                            </div>
                            <div className="mb-3 d-flex flex-column">
                                <label
                                    htmlFor="testimonialDesc"
                                    className="pb-2"
                                >
                                    Testimonial
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Testimonial Description..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-6 d-grid ">
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                        <div className="col-6 d-grid">
                            <Link
                                to="/testimonial-list"
                                className="btn btn-secondary"
                            >
                                cancel
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TestimonialEditPage;
