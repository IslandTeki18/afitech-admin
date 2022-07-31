import { useEffect } from "react";
import "./ServiceListPage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listServices, deleteService } from "../../redux/actions/service.actions";
import DataTable from "../../components/dataTable/DataTable";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import CreateServiceModal from "../../components/createServiceModal/CreateServiceModal";

const ServiceListPage = () => {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { loading, error, services } = serviceList;
  const serviceCreate = useSelector((state) => state.serviceCreate);
  const {
    loading: createLoading,
    error: createError,
    success: createSuccess,
  } = serviceCreate;
  const serviceDelete = useSelector((state) => state.serviceDelete);
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = serviceDelete;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(listServices());
  }, [dispatch, createSuccess, deleteSuccess]);

  function deleteServiceHandler(id) {
    if (window.confirm("Are you sure you want to delete this service?")) {
      dispatch(deleteService(id));
    }
  }

  function renderDataTable() {
    const tableHeaderColumn = ["id", "title", "type", "Is Available"];
    return (
      <DataTable
        tableHeaderColumns={tableHeaderColumn}
        tableBodyRows={services.map((item, idx) => (
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
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>
              {item.isAvailable ? (
                <p className="text-success">Yes</p>
              ) : (
                <p className="text-danger">No</p>
              )}
            </td>
            <td>
              <div className="btn-group">
                <Link to={`/service/${item._id}`} className="btn btn-primary">
                  View
                </Link>
                <Link
                  to={`/service/${item._id}/edit`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteServiceHandler(item._id)}
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
    <div className="dkServiceListPage">
      <div className="container py-5 fullScreen">
        <h1 className="display-4 text-uppercase">Service List</h1>
        {error && <Message variant="danger">{error}</Message>}
        {createError && <Message variant="danger">{createError}</Message>}
        {deleteError && <Message variant="danger">{deleteError}</Message>}
        {createSuccess && (
          <Message variant="success" isDismissable>
            Service Created
          </Message>
        )}
        {deleteSuccess && (
          <Message variant="success" isDismissable>
            Service Deleted
          </Message>
        )}
        <div className="row">
          <div className="col-lg-9">
            {loading || createLoading || deleteLoading ? (
              <div className="d-flex justify-content-center">
                <Loader />
              </div>
            ) : (
              renderDataTable()
            )}
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">Action List</div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-link"
                  data-bs-toggle="modal"
                  data-bs-target="#createServiceId"
                >
                  Create Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateServiceModal modalId="createServiceId" />
    </div>
  );
};

export default ServiceListPage;
