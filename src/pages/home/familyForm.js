import React from "react"
import { Field } from "formik"

const FamilyForm = () => {
  return (
    <>
      <h3>Family</h3>
      <Field type="text" name="father_name" />
      <br />
      <Field type="text" name="mother_name" />
      <br />
    </>
  )
}

export default FamilyForm
