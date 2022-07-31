import { useEffect } from "react";
import "./TestimonialDetailsPage.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailTestimonial } from "../../redux/actions/testimonial.actions";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";

const TestimonialDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const testimonialDetails = useSelector((state) => state.testimonialDetails);
  const { loading, error, testimonial } = testimonialDetails;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(detailTestimonial(id));
  }, [dispatch, id]);
  return (
    <div className="dkTestimonialDetailsPage">
      <div className="container fullScreen">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h2>{testimonial.name}</h2>
          <Link to="/testimonial-list" className="btn btn-secondary">
            back
          </Link>
        </div>
        <div className="row">
          {error && <Message variant="danger">{error}</Message>}
          {loading ? (
            <Loader />
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
                    <h5 className="me-4">Name:</h5>
                    <p>{testimonial.name}</p>
                  </div>
                  <div className="d-flex">
                    <h5 className="me-4">Created:</h5>
                    <p>
                      {new Date(testimonial.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }
                      )}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <h5 className="me-4">Is Active:</h5>
                    <p
                      className={`text-${
                        testimonial.isActive ? "success" : "danger"
                      }`}
                    >
                      {testimonial.isActive ? "Yes" : "No"}
                    </p>
                  </div>
                  <Link
                    to={`/testimonial/${id}/edit`}
                    className="btn btn-secondary"
                  >
                    Edit
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex mb-2">
                  <h5 className="me-4">Company Name:</h5>
                  <p>{testimonial.companyName}</p>
                </div>
                <div className="d-flex mb-2">
                  <h5 className="me-4">Position at Company:</h5>
                  <p>{testimonial.clientCompanyPosition}</p>
                </div>
                <div className="d-flex mb-2">
                  <h5 className="me-4">Company Website:</h5>
                  <p>{testimonial.companyWebsite}</p>
                </div>
                <div className="d-flex mb-2">
                  <h5 className="me-4">Company Location:</h5>
                  <p>{testimonial.companyLocation}</p>
                </div>
                <div className="testimonialWrapper mb-4">
                  <h5 className="mb-2"> Testimonial:</h5>
                  <p>{testimonial.testimonial}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetailsPage;
