import React from "react";
import "./ServiceListPage.scss";
import { Link } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";

const ServiceListPage = () => {
    const tableHeaderColumn = ["id", "title", "type", "isAvailable"];

    const dummyData = [
        {
            id: 1,
            title: "Full Stack Web Development",
            type: "FS-WEB",
            isAvailable: true,
        },
    ];

    return (
        <div className="dkServiceListPage">
            <div className="container py-5 fullScreen">
                <h1 className="display-4 text-uppercase">Service List</h1>
                <div className="row">
                    <div className="col-lg-9">
                        <DataTable
                            tableHeaderColumns={tableHeaderColumn}
                            tableBodyRows={dummyData.map((item) => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.title}</td>
                                    <td>{item.type}</td>
                                    <td>
                                        {item.isAvailable ? "True" : "False"}
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                            <Link
                                                to="/service/details"
                                                className="btn btn-primary"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                to="/service/edit"
                                                className="btn btn-warning"
                                            >
                                                Edit
                                            </Link>
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

export default ServiceListPage;
