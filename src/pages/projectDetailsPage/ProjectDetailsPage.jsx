import { useEffect } from "react";
import "./ProjectDetailsPage.scss";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import { useDispatch, useSelector } from "react-redux";
import { detailsProject } from "../../actions/project.actions";

const ProjectDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const projectDetails = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetails;

  useEffect(() => {
    dispatch(detailsProject(id));
  }, [dispatch, id]);

  return (
    <div className="dkProjectDetailsPage">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h2>{project.title}</h2>
          <Link to="/project-list" className="btn btn-secondary">
            back
          </Link>
        </div>
        {loading ? (
          <div className="d-flex justify-content-between">
            <Loader />
          </div>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <img
                  src={"https://via.placeholder.com/700x400"}
                  alt="project-showings"
                  className="img-fluid mb-3"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <h5 className="me-4">Title:</h5>
                  <p>{project.title}</p>
                </div>
                <div className="d-flex">
                  <h5 className="me-4">Created:</h5>
                  <p>{project.createAt}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <h5 className="me-4">Is Published:</h5>
                  <p
                    className={`text-${
                      project.isPublished ? "success" : "danger"
                    }`}
                  >
                    {project.isPublished ? "Yes" : "No"}
                  </p>
                </div>
                <Link to="/project/edit" className="btn btn-secondary">
                  Edit
                </Link>
              </div>
              <div className="d-flex mb-4">
                <h5 className="me-4">Slug:</h5>
                <p>{project.slug}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex mb-4">
                <h5 className="me-4">Project Type:</h5>
                <p>{project.projectType}</p>
              </div>
              <div className="descriptionWrapper mb-4">
                <h5 className="mb-2"> Short Description:</h5>
                <p>{project.shortDescription}</p>
              </div>
              <div className="descriptionWrapper mb-4">
                <h5 className="mb-2"> Long Description:</h5>
                <p>{project.longDescription}</p>
              </div>
              <div className="d-flex mb-4">
                <h5 className="me-4">Project Status:</h5>
                <p>{project.projectStatus}</p>
              </div>
              <div className="d-flex mb-4">
                <h5 className="me-4">Project URL:</h5>
                <a href={project.projectUrl}>{project.projectUrl}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
