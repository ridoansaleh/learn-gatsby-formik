import React from "react"
import { Field, ErrorMessage } from "formik"

const FamilyForm = () => (
  <>
    <h3 className="form-subtitle">Family</h3>
    <div className="field-container">
      <div className="form-control-wrapper">
        <label htmlFor="father_name">Father Name</label>
        <Field
          className="form-control"
          type="text"
          id="father_name"
          name="father_name"
        />
      </div>
      <ErrorMessage
        className="error-wrapper"
        name="father_name"
        component="div"
      />
    </div>
    <div className="field-container">
      <div className="form-control-wrapper">
        <label htmlFor="mother_name">Mother Name</label>
        <Field
          className="form-control"
          type="text"
          id="mother_name"
          name="mother_name"
        />
      </div>
      <ErrorMessage
        className="error-wrapper"
        name="mother_name"
        component="div"
      />
    </div>
  </>
)

export default FamilyForm
