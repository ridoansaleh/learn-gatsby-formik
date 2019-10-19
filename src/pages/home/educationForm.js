import React from "react"
// import { Field } from "formik"

const EducationForm = () => {
  return (
    <>
      <h3>Education</h3>
      <select name="last_education">
        <option value="elementary school">Elementary School</option>
        <option value="junior high school">Junior High School</option>
        <option value="senior high school">Senior High School</option>
        <option value="associate degree">Associate Degree</option>
        <option value="bachelor degree">Bachelor Degree</option>
      </select>
      <br />
    </>
  )
}

export default EducationForm
