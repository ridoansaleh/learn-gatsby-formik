import React from "react"
import { Field, ErrorMessage } from "formik"

export const ElementarySchool = () => (
  <>
    <div className="field-container">
      <div className="form-control-wrapper">
        <label htmlFor="elementary_school">Elementary School</label>
        <Field
          className="form-control"
          type="text"
          id="elementary_school"
          name="elementary_school"
        />
      </div>
      <ErrorMessage
        className="error-wrapper"
        name="elementary_school"
        component="div"
      />
    </div>
  </>
)

export const JuniorHighSchool = () => (
  <>
    <div className="field-container">
      <div className="form-control-wrapper">
        <label htmlFor="junior_high_school">Junior High School</label>
        <Field
          className="form-control"
          type="text"
          id="junior_high_school"
          name="junior_high_school"
        />
      </div>
      <ErrorMessage
        className="error-wrapper"
        name="junior_high_school"
        component="div"
      />
    </div>
  </>
)

export const SeniorHighSchool = () => (
  <>
    <div className="field-container">
      <div className="form-control-wrapper">
        <label htmlFor="senior_high_school">Senior High School</label>
        <Field
          className="form-control"
          type="text"
          id="senior_high_school"
          name="senior_high_school"
        />
      </div>
      <ErrorMessage
        className="error-wrapper"
        name="senior_high_school"
        component="div"
      />
    </div>
  </>
)

export const AssociateDegree = () => (
  <>
    <div className="field-container">
      <div className="form-control-wrapper">
        <label htmlFor="associate_degree">Associate Degree</label>
        <Field
          className="form-control"
          type="text"
          id="associate_degree"
          name="associate_degree"
        />
      </div>
      <ErrorMessage
        className="error-wrapper"
        name="associate_degree"
        component="div"
      />
    </div>
  </>
)

export const BachelorDegree = () => (
  <>
    <div className="field-container">
      <div className="form-control-wrapper">
        <label htmlFor="bachelor_degree">Bachelor Degree</label>
        <Field
          className="form-control"
          type="text"
          id="bachelor_degree"
          name="bachelor_degree"
        />
      </div>
      <ErrorMessage
        className="error-wrapper"
        name="bachelor_degree"
        component="div"
      />
    </div>
  </>
)
