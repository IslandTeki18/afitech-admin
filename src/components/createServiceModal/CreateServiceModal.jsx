import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createService } from "../../redux/actions/service.actions";
import Modal from "../modal/Modal";
import InputLabel from "../inputLabel/InputLabel";
import TextAreaLabel from "../textAreaLabel/TextAreaLabel";

const CreateServiceModal = (props) => {
  const dispatch = useDispatch();
  const [serviceObj, setServiceObj] = useState({
    title: "",
    type: "",
    shortDescription: "",
    longDescription: "",
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(
      createService(
        serviceObj.title,
        serviceObj.type,
        serviceObj.shortDescription,
        serviceObj.longDescription
      )
    );
  }
  return (
    <div className="dkCreateServiceModal">
      <Modal title="Create Service" modalId={props.modalId}>
        <form onSubmit={onSubmitHandler}>
          <InputLabel
            className="mb-3"
            inputId="titleInputLabel"
            type="text"
            labelText="Service Title"
            placeholder="Service Title"
            value={serviceObj.title}
            onChange={(e) =>
              setServiceObj((prevState) => {
                return {
                  ...prevState,
                  title: e.target.value,
                };
              })
            }
          />
          <InputLabel
            className="mb-3"
            inputId="typeInputLabel"
            type="text"
            labelText="Service Type"
            placeholder="Service Type"
            value={serviceObj.type}
            onChange={(e) =>
              setServiceObj((prevState) => {
                return {
                  ...prevState,
                  type: e.target.value,
                };
              })
            }
          />
          <TextAreaLabel
            className="mb-3"
            rows={3}
            id="shortDescTextArea"
            placeholder="Short Description"
            labelText="Short Description"
            value={serviceObj.shortDescription}
            onChange={(e) =>
              setServiceObj((prevState) => {
                return {
                  ...prevState,
                  shortDescription: e.target.value,
                };
              })
            }
          />
          <TextAreaLabel
            rows={3}
            id="longDescTextArea"
            placeholder="Long Description"
            labelText="Long Description"
            value={serviceObj.longDescription}
            onChange={(e) =>
              setServiceObj((prevState) => {
                return {
                  ...prevState,
                  longDescription: e.target.value,
                };
              })
            }
          />
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
              Create Service
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

CreateServiceModal.propTypes = {
  modalId: PropTypes.string.isRequired,
};

export default CreateServiceModal;
