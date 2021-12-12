import React from "react";
import "./ProjectListPage.scss";
import DataTable from "../../components/dataTable/DataTable";

const ProjectListPage = () => {
    const tableHeaderColumn = ["id", "title", "slug", "isPublished", "status"];

    const dummyData = [
        {
            id: 1,
            title: "AFI TECH LLC",
            slug: "AT-CLIENT",
            isPublished: true,
            status: "In Development",
        },
    ];

    return (
        <div className="dkProjectListPage">
            <div className="container py-5 fullScreen">
                <h1 className="display-4 text-uppercase">Project List</h1>
                <div className="row">
                    <div className="col-lg-9">
                        <DataTable
                            tableHeaderColumns={tableHeaderColumn}
                            tableBodyRows={dummyData.map((item) => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.title}</td>
                                    <td>{item.slug}</td>
                                    <td>
                                        {item.isPublished ? "True" : "False"}
                                    </td>
                                    <td>{item.status}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button className="btn btn-primary">
                                                View
                                            </button>
                                            <button className="btn btn-warning">
                                                Edit
                                            </button>
                                            <button className="btn btn-danger">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        />
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-header">Action List</div>
                            <div className="card-body">
                                <a href="/project/create">Create Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectListPage;
