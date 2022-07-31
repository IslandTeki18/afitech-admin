import { useEffect } from "react";
import "./ServiceDetailsPage.scss";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailService } from "../../redux/actions/service.actions";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const serviceDetails = useSelector((state) => state.serviceDetails);
  const { loading, error, service } = serviceDetails;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(detailService(id));
  }, [dispatch, id]);
  return (
    <div className="dkServiceDetailsPage">
      <div className="container fullScreen">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h2>{service.title}</h2>
          <Link to="/service-list" className="btn btn-secondary">
            back
          </Link>
        </div>
        <div className="row">
          {error && (
            <Message variant="danger" isDismissable>
              {error}
            </Message>
          )}
          {loading ? (
            <div className="col-12 d-flex justify-content-center">
              <Loader />
            </div>
          ) : (
            <>
              <div className="col-lg-6">
                <div className="mb-3">
                  <img
                    src="https://via.placeholder.com/700x400"
                    alt="placeholder"
                    className="img-fluid mb-3"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <h5 className="me-4">Type:</h5>
                    <p>{service.title}</p>
                  </div>
                  <div className="d-flex">
                    <h5 className="me-4">Started:</h5>
                    <p>
                      {new Date(service.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <h5 className="me-4">Is Available:</h5>
                    <p
                      className={`text-${
                        service.isAvailable ? "success" : "danger"
                      }`}
                    >
                      {service.isAvailable ? "Yes" : "No"}
                    </p>
                  </div>
                  <Link
                    to={`/service/${service._id}/edit`}
                    className="btn btn-secondary"
                  >
                    Edit
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="descriptionWrapper mb-4">
                  <h5 className="mb-2"> Short Description:</h5>
                  <p>{service.shortDescription}</p>
                </div>
                <div className="descriptionWrapper mb-4">
                  <h5 className="mb-2"> Long Description:</h5>
                  <p>{service.longDescription}</p>
                </div>
                <hr className="m-4" />
                <h4 className="mb-3">Service Features</h4>
                <div className="mb-4">
                  <h6 className="me-4">Feature One:</h6>
                  <p className="text-muted">Coming Soon</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
