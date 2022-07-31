import { useEffect } from "react";
import "./TestimonialListPage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../components/dataTable/DataTable";
import {
  listTestimonials,
  deleteTestimonial,
} from "../../redux/actions/testimonial.actions";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import CreateTestimonialModal from "../../components/createTestimonialModal/CreateTestimonialModal";

const TestimonialListPage = () => {
  const dispatch = useDispatch();
  const testimonialList = useSelector((state) => state.testimonialList);
  const { loading, error, testimonials } = testimonialList;
  const testimonialCreate = useSelector((state) => state.testimonialCreate);
  const {
    loading: createLoading,
    error: createError,
    success: createSuccess,
  } = testimonialCreate;
  const testimonialDelete = useSelector((state) => state.testimonialDelete);
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = testimonialDelete;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(listTestimonials());
  }, [dispatch, createSuccess, deleteSuccess]);

  function removeTestimonialhandler(id) {
    if (window.confirm("Are you sure you want to remove this testimonial?")) {
      dispatch(deleteTestimonial(id));
    }
  }

  function renderDataTable() {
    const tableHeaderColumn = ["ID", "Name", "Company", "Is Active"];
    return (
      <DataTable
        isResponsive
        tableHeaderColumns={tableHeaderColumn}
        tableBodyRows={testimonials.map((item, idx) => (
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
            <td>{item.name}</td>
            <td>{item.companyName}</td>
            <td>{item.isActive ? "True" : "False"}</td>
            <td>
              <div className="btn-group">
                <Link
                  to={`/testimonial/${item._id}`}
                  className="btn btn-primary"
                >
                  View
                </Link>
                <Link
                  to={`/testimonial/${item._id}/edit`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => removeTestimonialhandler(item._id)}
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
    <div className="dkTestimonialListPage">
      <div className="container py-5 fullScreen">
        <h1 className="display-4 text-uppercase">Testimonial List</h1>
        <div className="row">
          <div className="col-lg-9">
            {error && <Message variant="danger">{error}</Message>}
            {createError && <Message variant="danger">{createError}</Message>}
            {deleteError && <Message variant="danger">{deleteError}</Message>}
            {createSuccess && (
              <Message variant="success" isDismissable>
                Testimonial Created!
              </Message>
            )}
            {deleteSuccess && (
              <Message variant="danger" isDismissable>
                Testimonial Remove.
              </Message>
            )}
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
                  data-bs-target="#createTestimonialId"
                >
                  Create Testimonial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateTestimonialModal modalId="createTestimonialId" />
    </div>
  );
};

export default TestimonialListPage;
