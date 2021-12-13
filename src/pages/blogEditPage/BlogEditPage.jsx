import React from "react";
import "./BlogEditPage.scss";
import { Link } from "react-router-dom";
import InputLabel from "../../components/inputLabel/InputLabel";
import RichTextEditor from "../../components/richTextEditor/RichTextEditor";

const BlogEditPage = () => {
    return (
        <div className="dkBlogEditPage">
            <div className="container">
                <h2>Blog Edit Page</h2>
                <Link className="btn btn-secondary" to="/blog-list">
                    back
                </Link>
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
                                    inputId="blogImageInputLabel"
                                    type="file"
                                    labelText="Image"
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="blogTypeInputLabel"
                                    type="text"
                                    labelText="Type"
                                    placeholder="Type..."
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-3">
                                <InputLabel
                                    inputId="blogTitleInputLabel"
                                    type="text"
                                    labelText="Title"
                                    placeholder="Title..."
                                />
                            </div>
                            <div className="mb-3 d-flex flex-column">
                                <label htmlFor="blogShortDesc" className="pb-2">
                                    Short Description
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Short Description..."
                                />
                            </div>
                            <div className="mb-3 d-flex flex-column">
                                <label htmlFor="blogLongDesc" className="pb-2">
                                    Long Description
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Long Description..."
                                />
                            </div>
                            <div className="mb-3">
                                <InputLabel
                                    inputId="blogSlugInputLabel"
                                    type="text"
                                    labelText="Slug"
                                    placeholder="Slug..."
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
                        <div className="col-12">
                            <label htmlFor="blogContentDesc" className="pb-2">
                                Content
                            </label>
                            <RichTextEditor />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-6 d-grid ">
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                        <div className="col-6 d-grid">
                            <Link to="/blog-list" className="btn btn-secondary">
                                cancel
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogEditPage;
