import { useEffect } from "react";
import parser from "html-react-parser";
import "./BlogDetailsPage.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailBlog } from "../../actions/blog.actions";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";

const BlogDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  useEffect(() => {
    window.scrollTo(0, "smooth");
    dispatch(detailBlog(id));
  }, [dispatch, id]);

  return (
    <div className="dkBlogDetailsPage">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h2>{blog.title}</h2>
          <Link to="/blog-list" className="btn btn-secondary">
            back
          </Link>
        </div>
        <div className="row">
          {error && <Message variant="danger">{error}</Message>}
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="col-lg-6">
                <div className="mb-3">
                  <img
                    src="https://via.placeholder.com/700x400"
                    alt="placeholder"
                    className="img-fluid mb-3"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <h5 className="me-2">Author:</h5>
                    <p>{blog.author}</p>
                  </div>
                  <div className="d-flex">
                    <h5 className="me-2">Created:</h5>
                    <p>
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <h5 className="me-4">Is Published:</h5>
                    <p
                      className={`text-${
                        blog.isPublished ? "success" : "danger"
                      }`}
                    >
                      {blog.isPublished ? "Yes" : "No"}
                    </p>
                  </div>
                  <Link
                    to={`/blog/${blog._id}/edit`}
                    className="btn btn-secondary"
                  >
                    Edit
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex mb-4">
                  <h5 className="me-4">Title:</h5>
                  <p>{blog.title}</p>
                </div>
                <div className="d-flex mb-4">
                  <h5 className="me-4">Type:</h5>
                  <p>{blog.type}</p>
                </div>
                <div className="descriptionWrapper mb-4">
                  <h5 className="mb-2"> Short Description:</h5>
                  <p>{blog.shortDescription}</p>
                </div>
                <div className="descriptionWrapper mb-4">
                  <h5 className="mb-2"> Long Description:</h5>
                  <p>{blog.longDescription}</p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <h5 className="pb-2">Content:</h5>
            <div>{parser(`${blog.content}`)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
