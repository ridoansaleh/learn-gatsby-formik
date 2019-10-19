import React, { useState } from "react"
import { Formik, Form } from "formik"
import PersonalForm from "./personalForm"
import EducationForm from "./educationForm"
import FamilyForm from "./familyForm"

const WonderfulForm = () => {
  const [step, setStep] = useState(1)

  const renderForms = props => {
    console.log("props : ", props)
    switch (step) {
      case 1:
        return <PersonalForm {...props} />
      case 2:
        return <EducationForm {...props} />
      case 3:
        return <FamilyForm {...props} />
      default:
        return null
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          birth_date: "",
          last_education: "",
          father_name: "",
          mother_name: "",
        }}
        onSubmit={(values, actions) => {
          // MyImaginaryRestApiCall(user.id, values).then(
          //   updatedUser => {
          //     actions.setSubmitting(false)
          //     updateUser(updatedUser)
          //     onClose()
          //   },
          //   error => {
          //     actions.setSubmitting(false)
          //     actions.setErrors(transformMyRestApiErrorsToAnObject(error))
          //     actions.setStatus({ msg: "Set some arbitrary status or data" })
          //   }
          // )
        }}
        render={props => (
          <Form>
            {renderForms(props)}
            {step !== 3 ? (
              <>
                <button
                  type="button"
                  disabled={step === 1}
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </button>
                <button type="button" onClick={() => setStep(step + 1)}>
                  Next
                </button>
              </>
            ) : (
              <>
                <button type="button" onClick={() => setStep(step - 1)}>
                  Previous
                </button>
                <button type="submit" disabled={props.isSubmitting}>
                  Submit
                </button>
              </>
            )}
          </Form>
        )}
      />
    </div>
  )
}

export default WonderfulForm
