import React from "react";
import "./ServiceEditPage.scss";
import { Link } from "react-router-dom";
import InputLabel from "../../components/inputLabel/InputLabel";

const ServiceEditPage = () => {
    return (
        <div className="dkServiceEditPage">
            <div className="container">
                <h2>Service Edit Page</h2>
                <Link className="btn btn-secondary" to="/service-list">
                    back
                </Link>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="my-3">
                                {/* Images */}
                                <img
                                    src="https://via.placeholder.com/700x400"
                                    alt="placeholder"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="serviceImageInputLabel"
                                    type="file"
                                    labelText="Image"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="serviceTypeInputLabel"
                                    type="text"
                                    labelText="Service Type"
                                    placeholder="Service Type..."
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-3">
                                <InputLabel
                                    inputId="serviceTitleInputLabel"
                                    type="text"
                                    labelText="Title"
                                    placeholder="Title..."
                                />
                            </div>
                            <div className="mb-3 d-flex flex-column">
                                <label
                                    htmlFor="serviceShortDesc"
                                    className="pb-2"
                                >
                                    Short Description
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Short Description..."
                                />
                            </div>
                            <div className="mb-3 d-flex flex-column">
                                <label
                                    htmlFor="serviceLongDesc"
                                    className="pb-2"
                                >
                                    Long Description
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Long Description..."
                                />
                            </div>
                            <p>Put Service Features Here.</p>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="availableChecked"
                                    type="checkbox"
                                    isToggle
                                    labelText="Is Available"
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
                                to="/service-list"
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

export default ServiceEditPage;
