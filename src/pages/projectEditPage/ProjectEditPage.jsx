import React from "react";
import "./ProjectEditPage.scss";
import { Link } from "react-router-dom";
import InputLabel from "../../components/inputLabel/InputLabel";

const ProjectEditPage = () => {
    return (
        <div className="dkProjectEditPage">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-4">
                    <h2>Project Edit Page</h2>
                    <Link className="btn btn-secondary" to="/project/details">
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
                                    inputId="projectImageInputLabel"
                                    type="file"
                                    labelText="Image"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="projectTypeInputLabel"
                                    type="text"
                                    labelText="Project Type"
                                    placeholder="Project Type..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="projectStatusInputLabel"
                                    type="text"
                                    labelText="Project Status"
                                    placeholder="Project Status..."
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-3">
                                <InputLabel
                                    inputId="projectTitleInputLabel"
                                    type="text"
                                    labelText="Title"
                                    placeholder="Title..."
                                />
                            </div>
                            <div className="mb-3 d-flex flex-column">
                                <label
                                    htmlFor="projectShortDesc"
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
                                    htmlFor="projectLongDesc"
                                    className="pb-2"
                                >
                                    Long Description
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Long Description..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="projectSlugInputLabel"
                                    type="text"
                                    labelText="Slug"
                                    placeholder="Slug..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="projectStatusInputLabel"
                                    type="text"
                                    labelText="Project URL"
                                    placeholder="Project URL..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="publishedChecked"
                                    type="checkbox"
                                    isToggle
                                    labelText="Is Published"
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
                                to="/project-list"
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

export default ProjectEditPage;
