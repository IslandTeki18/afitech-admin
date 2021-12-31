import { useEffect, useState } from "react";
import "./ProjectListPage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../components/dataTable/DataTable";
import {
  listProjects,
  createProject,
  deleteProject,
} from "../../actions/project.actions";
import Message from "../../components/message/Message";
import Loader from "../../components/loader/Loader";
import Modal from "../../components/modal/Modal";
import InputLabel from "../../components/inputLabel/InputLabel";

const ProjectListPage = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;
  const projectCreate = useSelector((state) => state.projectCreate);
  const {
    loading: createLoading,
    error: createError,
    success: createSuccess,
  } = projectCreate;
  const projectDelete = useSelector((state) => state.projectDelete);
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = projectDelete;
  const [project, setProject] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    longDescription: "",
    projectType: "",
    projectStatus: "",
    projectUrl: "",
  });

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(listProjects());
  }, [dispatch, createSuccess, deleteSuccess]);

  function deleteProjectHandler(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteProject(id));
    }
  }

  function createProjectHandler(e) {
    e.preventDefault();
    dispatch(
      createProject(
        project.title,
        project.slug,
        project.shortDescription,
        project.longDescription,
        project.projectType,
        project.projectStatus,
        project.projectUrl
      )
    );
  }

  function renderDataTable() {
    const tableHeaderColumn = ["ID", "Title", "Slug", "Is Published", "Status"];
    return (
      <DataTable
        isResponsive
        tableHeaderColumns={tableHeaderColumn}
        tableBodyRows={projects.map((item, idx) => (
          <tr key={idx}>
            <th
              scope="row"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={item._id}
              className="cursorPointer"
            >
              {idx + 1}
            </th>
            <td>{item.title}</td>
            <td>{item.slug}</td>
            <td>
              {item.isPublished ? (
                <p className="text-success">Yes</p>
              ) : (
                <p className="text-danger">No</p>
              )}
            </td>
            <td>{item.projectStatus}</td>
            <td>
              <div className="btn-group">
                <Link to={`/project/${item._id}`} className="btn btn-primary">
                  View
                </Link>
                <Link
                  to={`/project/${item._id}/edit`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProjectHandler(item._id)}
                >
                  Delete
                </button>
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
            {deleteError && <Message>{deleteError}</Message>}
            {deleteSuccess && (
              <Message variant="success" isDismissable>
                Project Removed!
              </Message>
            )}
            {createSuccess && (
              <Message variant="success" isDismissable>
                Project Created!
              </Message>
            )}
            {createError && <Message variant="danger">{createError}</Message>}
            {loading || createLoading || deleteLoading ? (
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
                <button
                  className="btn btn-link"
                  data-bs-toggle="modal"
                  data-bs-target="#createProjectModal"
                >
                  Create Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal title="Create Project" modalId="createProjectModal">
        <form onSubmit={createProjectHandler}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <InputLabel
              inputId="titleInputLabel"
              type="text"
              labelText="Project Title"
              placeholder="Project Title..."
              value={project.title}
              onChange={(e) =>
                setProject((prevState) => {
                  return {
                    ...prevState,
                    title: e.target.value,
                  };
                })
              }
            />
            <InputLabel
              inputId="slugInputLabel"
              type="text"
              labelText="Project Slug"
              placeholder="Project Slug..."
              value={project.slug}
              onChange={(e) =>
                setProject((prevState) => {
                  return {
                    ...prevState,
                    slug: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="mb-3 d-flex flex-column">
            <label htmlFor="projectShortDesc" className="pb-2">
              Short Description
            </label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Short Description..."
              value={project.shortDescription}
              onChange={(e) =>
                setProject((prevState) => {
                  return {
                    ...prevState,
                    shortDescription: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="mb-3 d-flex flex-column">
            <label htmlFor="projectShortDesc" className="pb-2">
              Long Description
            </label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Long Description..."
              value={project.longDescription}
              onChange={(e) =>
                setProject((prevState) => {
                  return {
                    ...prevState,
                    longDescription: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="mb-3">
            <InputLabel
              inputId="projectTypeInputLabel"
              type="text"
              labelText="Project Type"
              placeholder="Project Type..."
              value={project.projectType}
              onChange={(e) =>
                setProject((prevState) => {
                  return {
                    ...prevState,
                    projectType: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="mb-3">
            <InputLabel
              inputId="projectStatusInputLabel"
              type="text"
              labelText="Project Status"
              placeholder="Project Status..."
              value={project.projectStatus}
              onChange={(e) =>
                setProject((prevState) => {
                  return {
                    ...prevState,
                    projectStatus: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="mb-3">
            <InputLabel
              inputId="projectUrlInputLabel"
              type="text"
              labelText="Project Url"
              placeholder="Project Url..."
              value={project.projectUrl}
              onChange={(e) =>
                setProject((prevState) => {
                  return {
                    ...prevState,
                    projectUrl: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type={"submit"}
              className={`btn btn-success`}
              data-bs-dismiss="modal"
            >
              Create Project
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProjectListPage;
