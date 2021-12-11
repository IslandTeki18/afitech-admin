import React from "react";
import "./TestimonialListPage.scss";
import DataTable from "../../components/dataTable/DataTable";

const TestimonialListPage = () => {
    const tableHeaderColumn = [
        "id",
        "name",
        "position",
        "company",
        "location",
        "isActive",
    ];

    const dummyData = [
        {
            id: 1,
            name: "Landon McKell",
            position: "CEO - FOUNDER",
            company: "AFI TECH LLC",
            location: "Spanish Fork, UT",
            isActive: false,
        },
    ];

    return (
        <div className="dkTestimonialListPage">
            <div className="container py-5 fullScreen">
                <h1 className="display-4">Testimonial List</h1>
                <div className="row">
                    <div className="col-lg-9">
                        <DataTable
                            tableHeaderColumns={tableHeaderColumn}
                            tableBodyRows={dummyData.map((item) => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.position}</td>
                                    <td>{item.company}</td>
                                    <td>{item.location}</td>
                                    <td>{item.isActive ? "True" : "False"}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm">
                                            View
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning btn-sm">
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            Delete
                                        </button>
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

export default TestimonialListPage;
