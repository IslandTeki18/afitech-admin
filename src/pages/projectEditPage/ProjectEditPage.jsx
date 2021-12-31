import { useState, useEffect } from "react";
import "./ProjectEditPage.scss";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "../../components/inputLabel/InputLabel";
import { detailsProject, updateProject } from "../../actions/project.actions";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import { PROJECT_UPDATE_RESET } from "../../constants/project.constants";

const ProjectEditPage = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [projectObj, setProjectObj] = useState({
    _id: projectId,
    title: "",
    slug: "",
    shortDescription: "",
    longDescription: "",
    projectType: "",
    projectStatus: "",
    projectUrl: "",
    isPublished: false,
  });
  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;
  const projectUpdate = useSelector((state) => state.projectUpdate);
  const {
    loading: updateLoading,
    error: updateError,
    success: updateSuccess,
  } = projectUpdate;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    if (updateSuccess) {
      dispatch({ type: PROJECT_UPDATE_RESET });
      history.push(`/project/${projectId}`);
    }
    if (!project || projectId !== project._id) {
      dispatch(detailsProject(projectId));
    }
    if (project) {
      setProjectObj((prevState) => {
        return {
          ...prevState,
          title: project.title,
          slug: project.slug,
          shortDescription: project.shortDescription,
          longDescription: project.longDescription,
          projectType: project.projectType,
          projectStatus: project.projectStatus,
          projectUrl: project.projectUrl,
          isPublished: project.isPublished,
        };
      });
    }
  }, [dispatch, projectId, project, updateSuccess, history]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(updateProject(projectObj));
  }
  return (
    <div className="dkProjectEditPage">
      <div className="container fullScreen">
        <div className="d-flex justify-content-between align-items-center py-4">
          <h2>Project Edit Page</h2>
          <Link className="btn btn-secondary" to={`/project/${projectId}`}>
            back
          </Link>
        </div>
        {updateError && <Message variant="danger">{updateError}</Message>}
        {loading || updateLoading ? (
          <div className="d-flex justify-content-center">
            <Loader />
          </div>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <form onSubmit={submitHandler}>
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
                    value={projectObj.projectType}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
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
                    value={projectObj.projectStatus}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          projectStatus: e.target.value,
                        };
                      })
                    }
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
                    value={projectObj.title}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          title: e.target.value,
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
                    value={projectObj.shortDescription}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          shortDescription: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="mb-3 d-flex flex-column">
                  <label htmlFor="projectLongDesc" className="pb-2">
                    Long Description
                  </label>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Long Description..."
                    value={projectObj.longDescription}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
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
                    inputId="projectSlugInputLabel"
                    type="text"
                    labelText="Slug"
                    placeholder="Slug..."
                    value={projectObj.slug}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          slug: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="projectStatusInputLabel"
                    type="text"
                    labelText="Project URL"
                    placeholder="Project URL..."
                    value={projectObj.projectUrl}
                    onChange={(e) =>
                      setProjectObj((prevState) => {
                        return {
                          ...prevState,
                          projectUrl: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="isPublishedSelect" className="mb-2">
                    Is Project Published
                  </label>
                  <select
                    id="isPublishedSelect"
                    className="form-select"
                    aria-label="isPublishedSelect"
                    value={projectObj.isPublished}
                    onChange={(e) =>
                      setProjectObj({
                        ...projectObj,
                        isPublished: e.target.value,
                      })
                    }
                  >
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>
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
                <Link to="/project-list" className="btn btn-secondary">
                  cancel
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProjectEditPage;
