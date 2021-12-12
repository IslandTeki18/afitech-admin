import React from "react";
import "./EmployeeListPage.scss";
import DataTable from "../../components/dataTable/DataTable";

const EmployeeListPage = () => {
    const tableHeaderColumn = ["id", "name", "position", "isActive"];

    const dummyData = [
        {
            id: 1,
            name: "Landon McKell",
            position: "CEO-FOUNDER",
            isActive: true,
        },
    ];

    return (
        <div className="dkEmployeeListPage">
            <div className="container py-5 fullScreen">
                <h1 className="display-4 text-uppercase">Employee List</h1>
                <div className="row">
                    <div className="col-lg-9">
                        <DataTable
                            tableHeaderColumns={tableHeaderColumn}
                            tableBodyRows={dummyData.map((item) => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.position}</td>
                                    <td>
                                        {item.isPublished ? "True" : "False"}
                                    </td>
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
                                <a href="/project/create">Create Employee</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeListPage;
