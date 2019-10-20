import React from "react"
import { Field, ErrorMessage } from "formik"

const FamilyForm = () => {
  return (
    <>
      <h3 className="form-subtitle">Family</h3>
      <div className="form-control-wrapper">
        <label for="father_name">Father Name</label>
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
      <div className="form-control-wrapper">
        <label for="mother_name">Mother Name</label>
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
    </>
  )
}

export default FamilyForm
