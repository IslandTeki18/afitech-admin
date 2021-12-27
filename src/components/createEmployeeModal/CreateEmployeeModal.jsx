import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createEmployee } from "../../actions/employee.actions";
import Modal from "../modal/Modal";
import InputLabel from "../inputLabel/InputLabel";
import TextAreaLabel from "../textAreaLabel/TextAreaLabel";

const CreateEmployeeModal = (props) => {
  const dispatch = useDispatch();
  const [employeeObj, setEmployeeObj] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    isActive: false,
    position: "",
    aboutEmployee: "",
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(
      createEmployee(
        employeeObj.firstName,
        employeeObj.lastName,
        employeeObj.phone,
        employeeObj.email,
        employeeObj.isActive,
        employeeObj.position,
        employeeObj.aboutEmployee
      )
    );
  }
  return (
    <div className="dkCreateEmployeeModal">
      <Modal title="Create Employee" modalId={props.modalId}>
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="col-sm-6 col-12">
              <InputLabel
                className="mb-3"
                inputId="firstNameInputLabel"
                type="text"
                labelText="First Name"
                placeholder="First Name"
                value={employeeObj.firstName}
                onChange={(e) =>
                  setEmployeeObj((prevState) => {
                    return {
                      ...prevState,
                      firstName: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="col-sm-6 col-12">
              <InputLabel
                className="mb-3"
                inputId="lastNameInputLabel"
                type="text"
                labelText="Last Name"
                placeholder="Last Name"
                value={employeeObj.lastName}
                onChange={(e) =>
                  setEmployeeObj((prevState) => {
                    return {
                      ...prevState,
                      lastName: e.target.value,
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
                inputId="phoneInputLabel"
                type="tel"
                labelText="Phone"
                placeholder="Phone"
                value={employeeObj.phone}
                onChange={(e) =>
                  setEmployeeObj((prevState) => {
                    return {
                      ...prevState,
                      phone: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="col-sm-6 col-12">
              <InputLabel
                className="mb-3"
                inputId="emailInputLabel"
                type="email"
                labelText="Email"
                placeholder="Email"
                value={employeeObj.email}
                onChange={(e) =>
                  setEmployeeObj((prevState) => {
                    return {
                      ...prevState,
                      email: e.target.value,
                    };
                  })
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <InputLabel
              className="mb-3"
              inputId="positionInputLabel"
              type="text"
              labelText="Position"
              placeholder="Position"
              value={employeeObj.position}
              onChange={(e) =>
                setEmployeeObj((prevState) => {
                  return {
                    ...prevState,
                    position: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="mb-3">
            <TextAreaLabel
              rows={3}
              id="aboutEmployeeTextArea"
              placeholder="About the Employee"
              labelText="About the Employee"
              value={employeeObj.aboutEmployee}
              onChange={(e) =>
                setEmployeeObj((prevState) => {
                  return {
                    ...prevState,
                    aboutEmployee: e.target.value,
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
              Create Employee
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

CreateEmployeeModal.propTypes = {
  modalId: PropTypes.string.isRequired,
};

export default CreateEmployeeModal;
