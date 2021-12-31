import { useState, useEffect } from "react";
import "./EmployeeEditPage.scss";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextAreaLabel from "../../components/textAreaLabel/TextAreaLabel";
import InputLabel from "../../components/inputLabel/InputLabel";
import { detailEmployee, updateEmployee } from "../../actions/employee.actions";
import { EMPLOYEE_UPDATE_RESET } from "../../constants/employee.constants";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";

const EmployeeEditPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { employeeId } = useParams();
  const employeeDetails = useSelector((state) => state.employeeDetails);
  const { loading, error, employee } = employeeDetails;
  const employeeUpdate = useSelector((state) => state.employeeUpdate);
  const {
    loading: updateLoading,
    error: updateError,
    success: updateSuccess,
  } = employeeUpdate;
  const [employeeObj, setEmployeeObj] = useState({
    firstName: "" || employee.firstName,
    lastName: "" || employee.lastName,
    phone: "" || employee.phone,
    email: "" || employee.email,
    isActive: false || employee.isActive,
    position: "" || employee.position,
    aboutEmployee: "" || employee.aboutEmployee,
  });

  useEffect(() => {
    window.scrollTo(0, "smooth");
    if (updateSuccess) {
      dispatch({ type: EMPLOYEE_UPDATE_RESET });
      history.push(`/employee/${employeeId}`);
    }
    if (!employee || employeeId !== employee._id) {
      dispatch(detailEmployee(employeeId));
    }
  }, [dispatch, updateSuccess, history, employee, employeeId]);

  useEffect(() => {
    if (employee) {
      setEmployeeObj((prevState) => {
        return {
          ...prevState,
          firstName: employee.firstName,
          lastName: employee.lastName,
          phone: employee.phone,
          email: employee.email,
          isActive: employee.isActive,
          position: employee.position,
          aboutEmployee: employee.aboutEmployee,
        };
      });
    }
  }, [dispatch, employee]);

  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(
      updateEmployee({
        _id: employeeId,
        firstName: employeeObj.firstName,
        lastName: employeeObj.lastName,
        phone: employeeObj.phone,
        email: employeeObj.email,
        isActive: employeeObj.isActive,
        position: employeeObj.position,
        aboutEmployee: employeeObj.aboutEmployee,
      })
    );
  }
  return (
    <div className="dkEmployeeEditPage">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-4">
          <h2>Employee Edit Page</h2>
          <Link className="btn btn-secondary" to={`/employee/${employee._id}`}>
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
                <div className="mb-3">
                  <img
                    src="https://via.placeholder.com/700x400"
                    alt="placeholder"
                    className="img-fluid"
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="employeeImageInputLabel"
                    type="file"
                    labelText="Image"
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="employeeFirstNameInputLabel"
                    type="text"
                    labelText="First Name"
                    placeholder="First Name..."
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
                <div className="mb-3">
                  <InputLabel
                    inputId="employeeLastNameInputLabel"
                    type="text"
                    labelText="Last Name"
                    placeholder="Last Name..."
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
                <div className="mb-3">
                  <InputLabel
                    inputId="employeePositionInputLabel"
                    type="text"
                    labelText="Company Position"
                    placeholder="Position..."
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
                  <InputLabel
                    inputId="activeChecked"
                    type="checkbox"
                    isToggle
                    labelText="Is Active"
                    checked={employeeObj.isActive}
                    onChange={(e) =>
                      setEmployeeObj((prevState) => {
                        return {
                          ...prevState,
                          isActive: e.target.checked,
                        };
                      })
                    }
                  />
                  <label htmlFor="isActiveSelect" className="mb-2">
                    Is Employee Active
                  </label>
                  <select
                    id="isActiveSelect"
                    className="form-select"
                    aria-label="isActiveSelect"
                    value={employeeObj.isActive}
                    onChange={(e) =>
                      setEmployeeObj({
                        ...employeeObj,
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
                <TextAreaLabel
                  labelText="About Employee"
                  rows={3}
                  placeholder="About Employee..."
                  id="aboutEmployeeTextarea"
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
                <div className="mb-3">
                  <InputLabel
                    inputId="employeePhoneInputLabel"
                    type="tel"
                    labelText="Phone"
                    placeholder="Phone..."
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
                <div className="mb-3">
                  <InputLabel
                    inputId="employeeEmailInputLabel"
                    type="email"
                    labelText="Email"
                    placeholder="Email..."
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
                <hr className="m-4" />
                <div className="mb-3">
                  <h5 className="mb-3">Social Media Links (coming soon!)</h5>
                  <InputLabel
                    inputId="employeeSMLFacebookInputLabel"
                    type="text"
                    labelText="Facebook"
                    placeholder="Facebook Page Url..."
                    isDisabled
                  />
                  <InputLabel
                    inputId="employeeSMLFacebookInputLabel"
                    type="text"
                    labelText="Github"
                    placeholder="Github Profile Url..."
                    isDisabled
                  />
                  <InputLabel
                    inputId="employeeSMLFacebookInputLabel"
                    type="text"
                    labelText="Instagram"
                    placeholder="Instagram Profile Url..."
                    isDisabled
                  />
                  <InputLabel
                    inputId="employeeSMLFacebookInputLabel"
                    type="text"
                    labelText="LinkedIn"
                    placeholder="LinkedIn Profile Url..."
                    isDisabled
                  />
                  <InputLabel
                    inputId="employeeSMLFacebookInputLabel"
                    type="text"
                    labelText="Twitter"
                    placeholder="Twitter Account Url..."
                    isDisabled
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-6 d-grid ">
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </div>
              <div className="col-6 d-grid">
                <Link to="/employee-list" className="btn btn-secondary">
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

export default EmployeeEditPage;
