import React, { useEffect } from "react";
import "./ProjectListPage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../components/dataTable/DataTable";
import { listProjects } from "../../actions/project.actions";
import Message from "../../components/message/Message";
import Loader from "../../components/loader/Loader";

const ProjectListPage = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  function renderDataTable() {
    const tableHeaderColumn = ["id", "title", "slug", "isPublished", "status"];
    return (
      <DataTable
        isResponsive
        tableHeaderColumns={tableHeaderColumn}
        tableBodyRows={projects.map((item, idx) => (
          <tr key={idx}>
            <th scope="row">{item._id}</th>
            <td>{item.title}</td>
            <td>{item.slug}</td>
            <td>{item.isPublished ? "True" : "False"}</td>
            <td>{item.projectStatus}</td>
            <td>
              <div className="btn-group">
                <Link to={`/project/${item._id}`} className="btn btn-primary">
                  View
                </Link>
                <Link to={`/project/${item._id}/edit`} className="btn btn-warning">
                  Edit
                </Link>
                <button className="btn btn-danger">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      />
    );
  }

  return (
    <div className="dkProjectListPage">
      <div className="container py-5 fullScreen">
        <h1 className="display-4 text-uppercase">Project List</h1>
        <div className="row">
          <div className="col-lg-9 order-sm-2 order-lg-1">
            {loading ? (
              <div className="d-flex justify-content-center">
                  <Loader />
              </div>
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : !projects ? (
              <Message>No Projects</Message>
            ) : (
              renderDataTable()
            )}
          </div>
          <div className="col-lg-3 order-sm-1 order-lg-2">
            <div className="card">
              <div className="card-header bg-dark text-light">Action List</div>
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
