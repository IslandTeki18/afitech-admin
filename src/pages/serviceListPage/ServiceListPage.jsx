import { useEffect, useState } from "react";
import "./ServiceListPage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  listServices,
  createService,
  deleteService,
} from "../../actions/service.actions";
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
    service,
  } = serviceCreate;
  const [serviceObj, setServiceObj] = useState({
    title: "",
    type: "",
    shortDescription: "",
    longDescription: "",
  });

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(listServices());
  }, [dispatch, createSuccess]);

  function renderDataTable() {
    const tableHeaderColumn = ["id", "title", "type", "isAvailable"];
    return (
      <DataTable
        tableHeaderColumns={tableHeaderColumn}
        tableBodyRows={services.map((item) => (
          <tr>
            <th scope="row">{item._id}</th>
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>{item.isAvailable ? "True" : "False"}</td>
            <td>
              <div className="btn-group">
                <Link
                  to={`/service/${service._id}`}
                  className="btn btn-primary"
                >
                  View
                </Link>
                <Link
                  to={`/service/${service._id}/edit`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button className="btn btn-danger">Delete</button>
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
        <div className="row">
          <div className="col-lg-9">
            {loading || createLoading ? (
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
                  class="btn btn-link"
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
