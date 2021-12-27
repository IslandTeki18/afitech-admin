import { useEffect, useState } from "react";
import "./BlogEditPage.scss";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailBlog, updateBlog } from "../../actions/blog.actions";
import InputLabel from "../../components/inputLabel/InputLabel";
import RichTextEditor from "../../components/richTextEditor/RichTextEditor";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import { BLOG_UPDATE_RESET } from "../../constants/blog.constants";

const BlogEditPage = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;
  const blogUpdate = useSelector((state) => state.blogUpdate);
  const {
    loading: updateLoading,
    error: updateError,
    success: updateSuccess,
  } = blogUpdate;
  const [blogObj, setBlogObj] = useState({
    _id: blogId,
    title: "" || blog.title,
    type: "" || blog.type,
    shortDescription: "" || blog.shortDescription,
    longDescription: "" || blog.longDescription,
    author: "" || blog.author,
    content: "" || blog.content,
    isPublished: false || blog.isPublished,
  });

  useEffect(() => {
    window.scrollTo(0, "smooth");
    if (updateSuccess) {
      dispatch({ type: BLOG_UPDATE_RESET });
      history.push(`/blog/${blogId}`);
    }
    if (!blog || blogId !== blog._id) {
      dispatch(detailBlog(blogId));
    }
  }, [dispatch, blogId, blog, updateSuccess, history]);

  useEffect(() => {
    if (blog) {
      setBlogObj((prevState) => {
        return {
          ...prevState,
          title: blog.title,
          type: blog.type,
          shortDescription: blog.shortDescription,
          longDescription: blog.longDescription,
          author: blog.author,
          content: blog.content,
          isPublished: blog.isPublished,
        };
      });
    }
  }, [dispatch, blog]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(
      updateBlog({
        _id: blogId,
        title: blogObj.title,
        type: blogObj.type,
        shortDescription: blogObj.shortDescription,
        longDescription: blogObj.longDescription,
        author: blogObj.author,
        content: blogObj.content,
        isPublished: blogObj.isPublished,
      })
    );
  }
  function ckContentHandler(data) {
    setBlogObj((prevState) => {
      return {
        ...prevState,
        content: data,
      };
    });
  }
  return (
    <div className="dkBlogEditPage">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-4">
          <h2>Blog Edit Page</h2>
          <Link className="btn btn-secondary" to={`/blog/${blogId}`}>
            back
          </Link>
        </div>
        {error && <Message variant="danger">{error}</Message>}
        {updateError && (
          <Message variant="danger">Update Error: {updateError}</Message>
        )}
        {loading || updateLoading ? (
          <Loader />
        ) : (
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6">
                <div className="my-3">
                  <img
                    src="https://via.placeholder.com/700x400"
                    alt="placeholder"
                    className="img-fluid"
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="blogImageInputLabel"
                    type="file"
                    labelText="Image"
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="blogTypeInputLabel"
                    type="text"
                    labelText="Type"
                    placeholder="Type..."
                    value={blogObj.type}
                    onChange={(e) =>
                      setBlogObj((prevState) => {
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
                    inputId="blogTitleInputLabel"
                    type="text"
                    labelText="Title"
                    placeholder="Title..."
                    value={blogObj.title}
                    onChange={(e) =>
                      setBlogObj((prevState) => {
                        return {
                          ...prevState,
                          title: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="mb-3 d-flex flex-column">
                  <label htmlFor="blogShortDesc" className="pb-2">
                    Short Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Short Description..."
                    value={blogObj.shortDescription}
                    onChange={(e) =>
                      setBlogObj((prevState) => {
                        return {
                          ...prevState,
                          shortDescription: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="mb-3 d-flex flex-column">
                  <label htmlFor="blogLongDesc" className="pb-2">
                    Long Description
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Long Description..."
                    value={blogObj.longDescription}
                    onChange={(e) =>
                      setBlogObj((prevState) => {
                        return {
                          ...prevState,
                          longDescription: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputLabel
                    inputId="publishedChecked"
                    type="checkbox"
                    labelText="Is Published"
                    checked={blogObj.isPublished}
                    onChange={(e) =>
                      setBlogObj((prevState) => {
                        return {
                          ...prevState,
                          isPublished: e.target.checked,
                        };
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="blogContentDesc" className="pb-2">
                  Content
                </label>
                <RichTextEditor
                  data={blogObj.content}
                  onChange={ckContentHandler}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-6 d-grid ">
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </div>
              <div className="col-6 d-grid">
                <Link to="/blog-list" className="btn btn-secondary">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BlogEditPage;
