import React from "react"
import { Field, ErrorMessage } from "formik"

const PersonalForm = props => (
  <>
    <h3 className="form-subtitle">Personal</h3>
    <div className="form-control-wrapper">
      <label htmlFor="name">Name</label>
      <Field className="form-control" type="text" id="name" name="name" />
    </div>
    <ErrorMessage className="error-wrapper" name="name" component="div" />
    <div className="form-control-wrapper">
      <label htmlFor="birth_date">Birth Date</label>
      <Field
        className="form-control"
        type="date"
        id="birth_date"
        name="birth_date"
      />
    </div>
    <ErrorMessage className="error-wrapper" name="birth_date" component="div" />
    <div className="form-control-wrapper">
      <label htmlFor="address">Address</label>
      <textarea
        className="form-control"
        id="address"
        name="address"
        value={props.values.address}
        onChange={props.handleChange}
      />
    </div>
    <ErrorMessage className="error-wrapper" name="address" component="div" />
    <div className="form-control-wrapper">
      <label htmlFor="phone_number">Phone Number</label>
      <Field
        className="form-control"
        type="text"
        id="phone_number"
        name="phone_number"
      />
    </div>
    <ErrorMessage
      className="error-wrapper"
      name="phone_number"
      component="div"
    />
  </>
)

export default PersonalForm
