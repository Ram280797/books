import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function Usercreate() {
  const formik = useFormik({
    initialValues: {
      bookname: "",
      Publisher: "",
      Authour: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.bookname) {
        error.bookname = "Please  enter the value ";
      }

      if (
        values.bookname &&
        (values.bookname.length <= 2 || values.bookname.length > 15)
      ) {
        error.bookname = " bookname must be between 3 to 15 Character";
      }

      if (!values.Publisher) {
        error.Publisher = "Please  enter the value ";
      }
      if (
        values.Publisher &&
        (values.Publisher.length <= 2 || values.Publisher.length > 15)
      ) {
        error.Publisher = " Publisher must be between 3 to 15 Character";
      }

      if (!values.Authour) {
        error.Authour = "Please  enter the value ";
      }
      if (
        values.Authour &&
        (values.Authour.length <= 2 || values.Authour.length > 15)
      ) {
        error.Authour = "  Authour must be between 3 to 15 Character";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "https://63a974a2100b7737b9927c71.mockapi.io/library",
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });

  return (
    <div className="container">
      <h1>library Management 📖</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Bookname *</label>
              <input
                name="bookname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bookname}
                type={"text"}
                className={`form-control ${
                  formik.errors.bookname ? "error-box" : ""
                }
                ${
                  formik.touched.bookname && !formik.errors.bookname
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.errors.bookname ? (
                <span style={{ color: "red" }}> {formik.errors.bookname}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label> Publisher*</label>
              <input
                name="Publisher"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Publisher}
                type={"text"}
                className={`form-control ${
                  formik.errors.Publisher ? "error-box" : ""
                }
                ${
                  formik.touched.Publisher && !formik.errors.Publisher
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.errors.Publisher ? (
                <span style={{ color: "red" }}> {formik.errors.Publisher}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label> Authour *</label>
              <input
                name="Authour"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Authour}
                type={"text"}
                className={`form-control ${
                  formik.errors.Authour ? "error-box" : ""
                }
                ${
                  formik.touched.Authour && !formik.errors.Authour
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.errors.Authour ? (
                <span style={{ color: "red" }}> {formik.errors.Authour}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Usercreate;
