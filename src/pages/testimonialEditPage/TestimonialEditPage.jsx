import { useState, useEffect } from "react";
import "./TestimonialEditPage.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  detailTestimonial,
  updateTestimonial,
} from "../../redux/actions/testimonial.actions";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import InputLabel from "../../components/inputLabel/InputLabel";
import TextAreaLabel from "../../components/textAreaLabel/TextAreaLabel";
import { TESTIMONIAL_UPDATE_RESET } from "../../redux/constants/testimonial.constants";

const TestimonialEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { testimonialId } = useParams();
  const testimonialDetails = useSelector((state) => state.testimonialDetails);
  const { loading, error, testimonial } = testimonialDetails;
  const testimonialUpdate = useSelector((state) => state.testimonialUpdate);
  const {
    loading: updateLoading,
    error: updateError,
    success: updateSuccess,
  } = testimonialUpdate;
  const [testimonialObj, setTestimonialObj] = useState({
    name: "" || testimonial.name,
    testimonial: "" || testimonial.testimonial,
    clientCompanyPosition: "" || testimonial.clientCompanyPosition,
    companyName: "" || testimonial.companyName,
    companyWebsite: "" || testimonial.companyWebsite,
    companyLocation: "" || testimonial.companyLocation,
    isActive: false || testimonial.isActive,
  });

  useEffect(() => {
    window.scrollTo(0, "smooth");
    if (updateSuccess) {
      dispatch({ type: TESTIMONIAL_UPDATE_RESET });
      navigate(`/testimonial/${testimonialId}`);
    }
    if (!testimonial || testimonialId !== testimonial._id) {
      dispatch(detailTestimonial(testimonialId));
    }
  }, [dispatch, testimonial, testimonialId, navigate, updateSuccess]);

  useEffect(() => {
    if (testimonial) {
      setTestimonialObj((prevState) => {
        return {
          ...prevState,
          name: testimonial.name,
          testimonial: testimonial.testimonial,
          clientCompanyPosition: testimonial.clientCompanyPosition,
          companyName: testimonial.companyName,
          companyWebsite: testimonial.companyWebsite,
          companyLocation: testimonial.companyLocation,
          isActive: testimonial.isActive,
        };
      });
    }
  }, [testimonial]);

  function onSubmitHandler() {
    dispatch(
      updateTestimonial({
        _id: testimonialId,
        name: testimonialObj.name,
        testimonial: testimonialObj.testimonial,
        clientCompanyPosition: testimonialObj.clientCompanyPosition,
        companyName: testimonialObj.companyName,
        companyWebsite: testimonialObj.companyWebsite,
        companyLocation: testimonialObj.companyLocation,
        isActive: testimonialObj.isActive,
      })
    );
  }
  return (
    <div className="dkTestimonialEditPage">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-3">
          <h2>Testimonial Edit Page</h2>
          <Link
            className="btn btn-secondary"
            to={`/testimonial/${testimonialId}`}
          >
            back
          </Link>
        </div>
        {error && <Message variant="danger">{error}</Message>}
        {updateError && <Message variant="danger">{updateError}</Message>}
        {loading || updateLoading ? (
          <Loader />
        ) : (
          <form onSubmit={onSubmitHandler}>
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
                    inputId="testimonialImageInputLabel"
                    type="file"
                    labelText="Image"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="isActiveSelect" className="mb-2">
                    Is Testimonial Active
                  </label>
                  <select
                    id="isActiveSelect"
                    className="form-select"
                    aria-label="isActiveSelect"
                    value={testimonialObj.isActive}
                    onChange={(e) =>
                      setTestimonialObj({
                        ...testimonialObj,
                        isActive: e.target.value,
                      })
                    }
                  >
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-3">
                  <InputLabel
                    inputId="testimonialNameInputLabel"
                    type="text"
                    labelText="Name of Client"
                    placeholder="First Name, Last Name"
                    value={testimonialObj.name}
                    onChange={(e) =>
                      setTestimonialObj((prevState) => {
                        return {
                          ...prevState,
                          name: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="testimonialCompanyNameInputLabel"
                    type="text"
                    labelText="Company Name"
                    placeholder="Company Name..."
                    value={testimonialObj.companyName}
                    onChange={(e) =>
                      setTestimonialObj((prevState) => {
                        return {
                          ...prevState,
                          companyName: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="testimonialClientCompanyPositionInputLabel"
                    type="text"
                    labelText="Client Position in Company"
                    placeholder="CEO, HR Manager, Founder..."
                    value={testimonialObj.clientCompanyPosition}
                    onChange={(e) =>
                      setTestimonialObj((prevState) => {
                        return {
                          ...prevState,
                          clientCompanyPosition: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="testimonialCompanyWebsiteInputLabel"
                    type="text"
                    labelText="Company Website"
                    placeholder="https://www.example.io"
                    value={testimonialObj.companyWebsite}
                    onChange={(e) =>
                      setTestimonialObj((prevState) => {
                        return {
                          ...prevState,
                          companyWebsite: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="testimonialCompanyLocationInputLabel"
                    type="text"
                    labelText="Company Location"
                    placeholder="City, State"
                    value={testimonialObj.companyLocation}
                    onChange={(e) =>
                      setTestimonialObj((prevState) => {
                        return {
                          ...prevState,
                          companyLocation: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <TextAreaLabel
                  rows={5}
                  placeholder="Testimonial"
                  labelText="Testimonial"
                  id="testimonialDesc"
                  value={testimonialObj.testimonial}
                  onChange={(e) =>
                    setTestimonialObj((prevState) => {
                      return {
                        ...prevState,
                        testimonial: e.target.value,
                      };
                    })
                  }
                  className="mb-3"
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-6 d-grid ">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
              <div className="col-6 d-grid">
                <Link to="/testimonial-list" className="btn btn-secondary">
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

export default TestimonialEditPage;
