import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createTestimonial } from "../../actions/testimonial.actions";
import Modal from "../modal/Modal";
import InputLabel from "../inputLabel/InputLabel";
import TextAreaLabel from "../textAreaLabel/TextAreaLabel";

const CreateTestimonialModal = (props) => {
  const dispatch = useDispatch();
  const [testimonialObj, setTestimonialObj] = useState({
    name: "",
    testimonial: "",
    clientCompanyPosition: "",
    companyName: "",
    companyWebsite: "",
    companyLocation: "",
    isActive: false,
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(
      createTestimonial(
        testimonialObj.name,
        testimonialObj.testimonial,
        testimonialObj.clientCompanyPosition,
        testimonialObj.companyName,
        testimonialObj.companyWebsite,
        testimonialObj.companyLocation,
        testimonialObj.isActive
      )
    );
  }
  return (
    <div className="dkCreateTestimonialModal">
      <Modal title="Create Testimonial" modalId={props.modalId}>
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="col-sm-6 col-12">
              <InputLabel
                className="mb-3"
                inputId="nameInputLabel"
                type="text"
                labelText="Name"
                placeholder="Name..."
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
            <div className="col-sm-6 col-12">
              <InputLabel
                className="mb-3"
                inputId="clientCompanyPositionInputLabel"
                type="text"
                labelText="Position"
                placeholder="Position..."
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
          </div>
          <div className="row">
            <div className="col-sm-6 col-12">
              <InputLabel
                className="mb-3"
                inputId="companyNameInputLabel"
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
            <div className="col-sm-6 col-12">
              <InputLabel
                className="mb-3"
                inputId="companyWebsiteInputLabel"
                type="text"
                labelText="Company Website"
                placeholder="Company Website"
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
          </div>
          <div className="mb-3">
            <InputLabel
              className="mb-3"
              inputId="companyLocationInputLabel"
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
          <div className="mb-3">
            <TextAreaLabel
              rows={3}
              id="testimonialTextArea"
              placeholder="Testimonial..."
              labelText="Testimonial"
              value={testimonialObj.testimonial}
              onChange={(e) =>
                setTestimonialObj((prevState) => {
                  return {
                    ...prevState,
                    testimonial: e.target.value,
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
              Create Testimonial
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

CreateTestimonialModal.propTypes = {
  modalId: PropTypes.string.isRequired,
};

export default CreateTestimonialModal;
