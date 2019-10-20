import React, { useState } from "react"
import { Formik, Form } from "formik"

import PersonalForm from "./personalForm"
import EducationForm from "./educationForm"
import FamilyForm from "./familyForm"

import "./form.css"
import { EDUCATION } from "./formConstant"

const {
  ELEMENTARY,
  JUNIOR_HIGH_SCHOOL,
  SENIOR_HIGH_SCHOOL,
  ASSOCIATE_DEGREE,
  BACHELOR_DEGREE,
} = EDUCATION

const WonderfulForm = () => {
  const [step, setStep] = useState(1)

  const renderLog = props => console.log("hello")

  const handleNext = (e, props) => {
    const { values } = props
    let fields = []
    // console.log(e)
    console.log("1. handleNext : ", props)
    e.preventDefault()
    // setStep(step + 1)
    // console.log("step : ", step)
    if (step === 1) {
      fields = ["name", "birth_date", "address", "phone_number"]
    }
    if (step === 2) {
      fields = ["last_education"]
      switch (values["last_education"]) {
        case ELEMENTARY:
          fields = ["last_education", "elementary_school"]
          break
        case JUNIOR_HIGH_SCHOOL:
          fields = ["last_education", "elementary_school", "junior_high_school"]
          break
        case SENIOR_HIGH_SCHOOL:
          fields = [
            "last_education",
            "elementary_school",
            "junior_high_school",
            "senior_high_school",
          ]
          break
        case ASSOCIATE_DEGREE:
          fields = [
            "last_education",
            "elementary_school",
            "junior_high_school",
            "senior_high_school",
            "associate_degree",
          ]
          break
        case BACHELOR_DEGREE:
          fields = [
            "last_education",
            "elementary_school",
            "junior_high_school",
            "senior_high_school",
            "associate_degree",
            "bachelor_degree",
          ]
          break
        default:
          break
      }
    }

    console.log("fields :=> ", fields)
    fields.map(field => props.setFieldTouched(field, true))
    // props.validateForm(fields)
    // setTimeout(() => {
    console.log("props.errors : ", props.errors)
    console.log("2. handleNext : ", props)
    if (fields.every(field => props.values[field] !== "")) {
      setStep(prevStep => prevStep + 1)
    }
    // }, 1000)
  }

  const handleValidation = values => {
    console.log("validating..")
    let errors = {}

    if (step === 1) {
      if (!values.name) {
        errors.name = "Name is required"
      }
      if (!values.birth_date) {
        errors.birth_date = "Birth date is required"
      }
      if (!values.address) {
        errors.address = "Address is required"
      }
      if (!values.phone_number) {
        errors.phone_number = "Phone number is required"
      }
    }

    if (step === 2) {
      if (!values.last_education) {
        errors.last_education = "Last Education is required"
      } else {
        switch (values["last_education"]) {
          case ELEMENTARY:
            if (!values.elementary_school) {
              errors.elementary_school = "Elementary School is required"
            }
            break
          case JUNIOR_HIGH_SCHOOL:
            if (!values.elementary_school) {
              errors.elementary_school = "Elementary School is required"
            }
            if (!values.junior_high_school) {
              errors.junior_high_school = "Junior High School is required"
            }
            break
          case SENIOR_HIGH_SCHOOL:
            if (!values.elementary_school) {
              errors.elementary_school = "Elementary School is required"
            }
            if (!values.junior_high_school) {
              errors.junior_high_school = "Junior High School is required"
            }
            if (!values.senior_high_school) {
              errors.senior_high_school = "Senior High School is required"
            }
            break
          case ASSOCIATE_DEGREE:
            if (!values.elementary_school) {
              errors.elementary_school = "Elementary School is required"
            }
            if (!values.junior_high_school) {
              errors.junior_high_school = "Junior High School is required"
            }
            if (!values.senior_high_school) {
              errors.senior_high_school = "Senior High School is required"
            }
            if (!values.associate_degree) {
              errors.associate_degree = "Associate Degree is required"
            }
            break
          case BACHELOR_DEGREE:
            if (!values.elementary_school) {
              errors.elementary_school = "Elementary School is required"
            }
            if (!values.junior_high_school) {
              errors.junior_high_school = "Junior High School is required"
            }
            if (!values.senior_high_school) {
              errors.senior_high_school = "Senior High School is required"
            }
            if (!values.associate_degree) {
              errors.associate_degree = "Associate Degree is required"
            }
            if (!values.bachelor_degree) {
              errors.bachelor_degree = "Bachelor Degree is required"
            }
            break
          default:
            break
        }
      }
    }

    if (step === 3) {
      if (!values.father_name) {
        errors.father_name = "Father's name is required"
      }
      if (!values.mother_name) {
        errors.mother_name = "Mother's name is required"
      }
    }

    return errors
  }

  const validateLastForm = props => {
    const fields = ["father_name", "mother_name"]
    fields.map(field => props.setFieldTouched(field, true))
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          birth_date: "",
          address: "",
          phone_number: "",
          last_education: "",
          elementary_school: "",
          junior_high_school: "",
          senior_high_school: "",
          associate_degree: "",
          bachelor_degree: "",
          father_name: "",
          mother_name: "",
        }}
        validate={values => handleValidation(values)}
        onSubmit={(values, actions) => {
          console.log("submit")
          console.log("Actions : ", actions)
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
            <div className="forms-wrapper">
              {step === 1 && <PersonalForm {...props} />}
              {step === 2 && <EducationForm {...props} />}
              {step === 3 && <FamilyForm {...props} />}
              {/* {renderLog(props)} */}
            </div>
            {step !== 3 ? (
              <div className="form-botton-container">
                <button
                  type="button"
                  disabled={step === 1}
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </button>
                <button type="button" onClick={e => handleNext(e, props)}>
                  Next
                </button>
              </div>
            ) : (
              <div className="form-botton-container">
                <button type="button" onClick={() => setStep(step - 1)}>
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={props.isSubmitting}
                  onClick={() => validateLastForm(props)}
                >
                  Submit
                </button>
              </div>
            )}
          </Form>
        )}
      />
    </div>
  )
}

export default WonderfulForm
