import React from "react"
import { Field } from "formik"

const PersonalForm = () => {
  return (
    <>
      <h3>Personal</h3>
      <Field type="text" name="name" />
      <br />
      <Field type="date" name="birth_date" />
      <br />
    </>
  )
}

export default PersonalForm
