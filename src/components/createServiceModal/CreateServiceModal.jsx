import React from "react";
import PropTypes from "prop-types";
import Modal from "../modal/Modal";
import InputLabel from "../inputLabel/InputLabel";
import TextAreaLabel from "../textAreaLabel/TextAreaLabel";

const CreateServiceModal = (props) => {
  return (
    <div className="dkCreateServiceModal">
      <Modal title="Create Service" modalId={props.modalId}>
        <form>
          <InputLabel
            inputId="titleInputLabel"
            type="text"
            labelText="Service Title"
            placeholder="Service Title"
          />
          <InputLabel
            inputId="titleInputLabel"
            type="text"
            labelText="Service Title"
            placeholder="Service Title"
          />
          <TextAreaLabel
            rows={3}
            id="shortDescTextArea"
            placeholder="Short Description"
            labelText="Short Description"
          />
          <TextAreaLabel
            rows={3}
            id="longDescTextArea"
            placeholder="Long Description"
            labelText="Long Description"
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
