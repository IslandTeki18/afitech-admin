import { useEffect } from "react";
import "./BlogListPage.scss";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../components/dataTable/DataTable";
import { Link, useHistory } from "react-router-dom";
import { listBlogs, createBlog, deleteBlog } from "../../actions/blog.actions";
import Message from "../../components/message/Message";
import Loader from "../../components/loader/Loader";

const BlogListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;
  const blogCreate = useSelector((state) => state.blogCreate);
  const {
    loading: createLoading,
    error: createError,
    success: createSuccess,
    blog: blogObjCreate,
  } = blogCreate;
  const blogRemove = useSelector((state) => state.blogRemove);
  const {
    loading: removeLoading,
    error: removeError,
    success: removeSuccess,
  } = blogRemove;
  const blogObj = {
    title: "Sample Title",
    type: "ReactJS",
    shortDescription: "Sample Short Description",
    longDescription: "Sample Long Description",
    content: "Sample Content",
    isPublished: false,
  };

  useEffect(() => {
    window.scrollTo(0, "smooth");
    if (createSuccess) {
      history.push(`/blog/${blogObjCreate._id}/edit`);
    }
    dispatch(listBlogs());
  }, [dispatch, createSuccess, history, blogObjCreate, removeSuccess]);

  function deleteBlogHandler(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteBlog(id));
    }
  }

  function createBlogHandler(e) {
    e.preventDefault();
    dispatch(
      createBlog(
        blogObj.title,
        blogObj.type,
        blogObj.shortDescription,
        blogObj.longDescription,
        blogObj.content,
        blogObj.isPublished
      )
    );
  }

  function renderDataTable() {
    const tableHeaderColumn = ["id", "title", "type", "isPublished"];
    return (
      <DataTable
        isResponsive
        tableHeaderColumns={tableHeaderColumn}
        tableBodyRows={blogs.map((item, idx) => (
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
            <td>{item.isPublished ? "True" : "False"}</td>
            <td>
              <div className="btn-group">
                <Link to={`/blog/${item._id}`} className="btn btn-primary">
                  View
                </Link>
                <Link to={`/blog/${item._id}/edit`} className="btn btn-warning">
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBlogHandler(item._id)}
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
    <div className="dkBlogListPage">
      <div className="container py-5 fullScreen">
        <h1 className="display-4 text-uppercase">Blog List</h1>
        <div className="row">
          <div className="col-lg-9 order-md-2 order-lg-1">
            {removeSuccess && (
              <Message variant="success" isDismissable>
                Blog Removed!
              </Message>
            )}
            {createError && <Message variant="danger">{createError}</Message>}
            {removeError && <Message variant="danger">{removeError}</Message>}
            {loading || createLoading || removeLoading ? (
              <div className="d-flex justify-content-center">
                <Loader />
              </div>
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              renderDataTable()
            )}
          </div>
          <div className="col-lg-3 order-md-1 order-lg-2 pb-md-3">
            <div className="card">
              <div className="card-header">Action List</div>
              <div className="card-body">
                <button className="btn btn-link" onClick={createBlogHandler}>
                  Create Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
