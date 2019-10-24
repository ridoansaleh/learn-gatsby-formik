import React from "react"
import { ErrorMessage } from "formik"

import { EDUCATION } from "./formConstant"
import {
  ElementarySchool,
  JuniorHighSchool,
  SeniorHighSchool,
  AssociateDegree,
  BachelorDegree,
} from "./fields"

const {
  ELEMENTARY,
  JUNIOR_HIGH_SCHOOL,
  SENIOR_HIGH_SCHOOL,
  ASSOCIATE_DEGREE,
  BACHELOR_DEGREE,
} = EDUCATION

const EducationForm = ({ values, handleChange }) => {
  const selectedEducation = values["last_education"]
  return (
    <>
      <h3 className="form-subtitle">Education</h3>
      <div className="field-container">
        <div className="form-control-wrapper">
          <label htmlFor="last_education">Last Education</label>
          <select
            className="form-control"
            id="last_education"
            name="last_education"
            onChange={handleChange}
          >
            <option value="">Select your Education</option>
            <option value={ELEMENTARY}>Elementary School</option>
            <option value={JUNIOR_HIGH_SCHOOL}>Junior High School</option>
            <option value={SENIOR_HIGH_SCHOOL}>Senior High School</option>
            <option value={ASSOCIATE_DEGREE}>Associate Degree</option>
            <option value={BACHELOR_DEGREE}>Bachelor Degree</option>
          </select>
        </div>
        <ErrorMessage
          className="error-wrapper"
          name="last_education"
          component="div"
        />
      </div>
      {selectedEducation === ELEMENTARY && <ElementarySchool />}
      {selectedEducation === JUNIOR_HIGH_SCHOOL && (
        <>
          <ElementarySchool />
          <JuniorHighSchool />
        </>
      )}
      {selectedEducation === SENIOR_HIGH_SCHOOL && (
        <>
          <ElementarySchool />
          <JuniorHighSchool />
          <SeniorHighSchool />
        </>
      )}
      {selectedEducation === ASSOCIATE_DEGREE && (
        <>
          <ElementarySchool />
          <JuniorHighSchool />
          <SeniorHighSchool />
          <AssociateDegree />
        </>
      )}
      {selectedEducation === BACHELOR_DEGREE && (
        <>
          <ElementarySchool />
          <JuniorHighSchool />
          <SeniorHighSchool />
          <AssociateDegree />
          <BachelorDegree />
        </>
      )}
    </>
  )
}

export default EducationForm
