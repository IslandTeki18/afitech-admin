import { useEffect, useState } from "react";
import "./ServiceEditPage.scss";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailService, updateService } from "../../actions/service.actions";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import InputLabel from "../../components/inputLabel/InputLabel";
import TextAreaLabel from "../../components/textAreaLabel/TextAreaLabel";
import { SERVICE_UPDATE_RESET } from "../../constants/service.constants";

const ServiceEditPage = () => {
  const { serviceId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const serviceUpdate = useSelector((state) => state.serviceUpdate);
  const {
    loading: updateLoading,
    error: updateError,
    success: updateSuccess,
  } = serviceUpdate;
  const serviceDetails = useSelector((state) => state.serviceDetails);
  const { loading, error, service } = serviceDetails;
  const [serviceObj, setServiceObj] = useState({
    title: "" || service.title,
    type: "" || service.type,
    shortDescription: "" || service.shortDescription,
    longDescription: "" || service.longDescription,
    isAvailable: false || service.isAvailable,
  });

  useEffect(() => {
    window.scrollTo(0, "smooth");
    if (updateSuccess) {
      dispatch({ type: SERVICE_UPDATE_RESET });
      history.push(`/service/${serviceId}`);
    }
    if (!service || serviceId !== service._id) {
      dispatch(detailService(serviceId));
    }
  }, [service, dispatch, serviceId, history, updateSuccess]);

  useEffect(() => {
    if (service) {
      setServiceObj((prevState) => {
        return {
          ...prevState,
          title: service.title,
          type: service.type,
          shortDescription: service.shortDescription,
          longDescription: service.longDescription,
          isAvailable: service.isAvailable,
        };
      });
    }
  }, [service]);

  function onSubmitHandler() {
    dispatch(
      updateService({
        _id: serviceId,
        title: serviceObj.title,
        type: serviceObj.type,
        shortDescription: serviceObj.shortDescription,
        longDescription: serviceObj.longDescription,
        isAvailable: serviceObj.isAvailable,
      })
    );
  }
  return (
    <div className="dkServiceEditPage">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center pt-4">
          <h2>Service Edit Page</h2>
          <Link className="btn btn-secondary" to={`/service/${serviceId}`}>
            back
          </Link>
        </div>
        {error && (
          <Message variant="danger" isDissmissable>
            {error}
          </Message>
        )}
        {updateError && (
          <Message variant="danger" isDissmissable>
            {updateError}
          </Message>
        )}
        {loading || updateLoading ? (
          <div className="d-flex justify-content-center">
            <Loader />
          </div>
        ) : (
          <form onSubmit={onSubmitHandler}>
            <div className="row">
              <div className="col-md-6">
                <div className="my-3">
                  {/* Images */}
                  <img
                    src="https://via.placeholder.com/700x400"
                    alt="placeholder"
                    className="img-fluid"
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="serviceImageInputLabel"
                    type="file"
                    labelText="Image"
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="serviceTypeInputLabel"
                    type="text"
                    labelText="Service Type"
                    placeholder="Service Type..."
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
                </div>
              </div>
              <div className="col-md-6">
                <div className="my-3">
                  <InputLabel
                    inputId="serviceTitleInputLabel"
                    type="text"
                    labelText="Title"
                    placeholder="Title..."
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
                </div>
                <div className="mb-3 d-flex flex-column">
                  <TextAreaLabel
                    rows={3}
                    placeholder="Short Description..."
                    labelText="Short Description"
                    id="shortDescriptionTextArea"
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
                </div>
                <div className="mb-3 d-flex flex-column">
                  <TextAreaLabel
                    rows={3}
                    placeholder="Long Description..."
                    labelText="Long Description"
                    id="longDescriptionTextArea"
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
                </div>
                <p>Put Service Features Here.</p>
                <label htmlFor="isAvailableSelect" className="mb-2">
                  Is Service Available
                </label>
                <select
                  id="isAvailableSelect"
                  className="form-select"
                  aria-label="isAvailableSelect"
                  value={serviceObj.isAvailable}
                  onChange={(e) =>
                    setServiceObj({
                      ...serviceObj,
                      isAvailable: e.target.value,
                    })
                  }
                >
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-6 d-grid ">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
              <div className="col-6 d-grid">
                <Link to="/service-list" className="btn btn-secondary">
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

export default ServiceEditPage;
