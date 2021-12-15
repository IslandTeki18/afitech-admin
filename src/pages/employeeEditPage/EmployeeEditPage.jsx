import React from "react";
import "./EmployeeEditPage.scss";
import { Link } from "react-router-dom";
import InputLabel from "../../components/inputLabel/InputLabel";

const EmployeeEditPage = () => {
    return (
        <div className="dkEmployeeEditPage">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-4">
                    <h2>Employee Edit Page</h2>
                    <Link className="btn btn-secondary" to="/employee/details">
                        back
                    </Link>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <img
                                    src="https://via.placeholder.com/700x400"
                                    alt="placeholder"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="employeeImageInputLabel"
                                    type="file"
                                    labelText="Image"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="employeeFirstNameInputLabel"
                                    type="text"
                                    labelText="First Name"
                                    placeholder="First Name..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="employeeLastNameInputLabel"
                                    type="text"
                                    labelText="Last Name"
                                    placeholder="Last Name..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="employeePositionInputLabel"
                                    type="text"
                                    labelText="Company Position"
                                    placeholder="Position..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="activeChecked"
                                    type="checkbox"
                                    isToggle
                                    labelText="Is Active"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3 d-flex flex-column">
                                <label htmlFor="aboutEmployee" className="pb-2">
                                    About Employee
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="About Employee..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="employeePhoneInputLabel"
                                    type="tel"
                                    labelText="Phone"
                                    placeholder="Phone..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="employeeEmailInputLabel"
                                    type="email"
                                    labelText="Email"
                                    placeholder="Email..."
                                />
                            </div>
                            <hr className="m-4" />
                            <div className="mb-3">
                                <h5 className="mb-3">Social Media Links</h5>
                                <InputLabel
                                    inputId="employeeSMLFacebookInputLabel"
                                    type="text"
                                    labelText="Facebook"
                                    placeholder="Facebook Page Url..."
                                />
                                <InputLabel
                                    inputId="employeeSMLFacebookInputLabel"
                                    type="text"
                                    labelText="Github"
                                    placeholder="Github Profile Url..."
                                />
                                <InputLabel
                                    inputId="employeeSMLFacebookInputLabel"
                                    type="text"
                                    labelText="Instagram"
                                    placeholder="Instagram Profile Url..."
                                />
                                <InputLabel
                                    inputId="employeeSMLFacebookInputLabel"
                                    type="text"
                                    labelText="LinkedIn"
                                    placeholder="LinkedIn Profile Url..."
                                />
                                <InputLabel
                                    inputId="employeeSMLFacebookInputLabel"
                                    type="text"
                                    labelText="Twitter"
                                    placeholder="Twitter Account Url..."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-6 d-grid ">
                            <button type="submit" className="btn btn-success">
                                Save
                            </button>
                        </div>
                        <div className="col-6 d-grid">
                            <Link
                                to="/employee-list"
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

export default EmployeeEditPage;
