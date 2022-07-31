import { useEffect } from "react";
import "./EmployeeListPage.scss";
import DataTable from "../../components/dataTable/DataTable";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listEmployees, deleteEmployee } from "../../redux/actions/employee.actions";
import CreateEmployeeModal from "../../components/createEmployeeModal/CreateEmployeeModal";

const EmployeeListPage = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;
  const employeeCreate = useSelector((state) => state.employeeCreate);
  const {
    loading: createLoading,
    error: createError,
    success: createSuccess,
  } = employeeCreate;
  const employeeDelete = useSelector((state) => state.employeeDelete);
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = employeeDelete;

  useEffect(() => {
    dispatch(listEmployees());
  }, [dispatch, createSuccess, deleteSuccess]);

  function deleteEmployeeHandler(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      dispatch(deleteEmployee(id));
    }
  }

  function renderDataTable() {
    const tableHeaderColumn = ["id", "Full Name", "Position", "Is Active"];
    return (
      <DataTable
        isResponsive
        tableHeaderColumns={tableHeaderColumn}
        tableBodyRows={employees.map((item, idx) => (
          <tr key={idx}>
            <th
              scope="row"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={item._id}
              className="cursorPointer"
            >
              {idx + 1}
            </th>
            <td>
              {item.firstName} {item.lastName}
            </td>
            <td>{item.position}</td>
            <td>{item.isPublished ? "True" : "False"}</td>
            <td>
              <div className="btn-group">
                <Link to={`/employee/${item._id}`} className="btn btn-primary">
                  View
                </Link>
                <Link
                  to={`/employee/${item._id}/edit`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployeeHandler(item._id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      />
    );
  }

  return (
    <div className="dkEmployeeListPage">
      <div className="container py-5 fullScreen">
        <h1 className="display-4 text-uppercase">Employee List</h1>
        <div className="row">
          {error && <Message variant="danger">{error}</Message>}
          {createError && <Message variant="danger">{createError}</Message>}
          {deleteError && <Message variant="danger">{deleteError}</Message>}
          {createSuccess && (
            <Message variant="success" isDismissable>
              Employee Created!
            </Message>
          )}
          {deleteSuccess && (
            <Message variant="success" isDismissable>
              Employee Removed.
            </Message>
          )}
          {loading || createLoading || deleteLoading ? (
            <div className="d-flex justify-content-center">
              <Loader />
            </div>
          ) : (
            <>
              <div className="col-lg-9">{renderDataTable()}</div>
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-header">Action List</div>
                  <div className="card-body">
                    <button
                      type="button"
                      class="btn btn-link"
                      data-bs-toggle="modal"
                      data-bs-target="#createEmployeeModalId"
                    >
                      Create Employee
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <CreateEmployeeModal modalId="createEmployeeModalId" />
    </div>
  );
};

export default EmployeeListPage;
