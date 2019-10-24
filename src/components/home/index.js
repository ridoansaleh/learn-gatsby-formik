import React, { useState } from "react"
import { Formik, Form } from "formik"

import PersonalForm from "./personalForm"
import EducationForm from "./educationForm"
import FamilyForm from "./familyForm"

import "./form.css"

import { EDUCATION } from "./formConstant"
import { postData } from "../../utils"
import { API_URL } from "../../constant"

const {
  ELEMENTARY,
  JUNIOR_HIGH_SCHOOL,
  SENIOR_HIGH_SCHOOL,
  ASSOCIATE_DEGREE,
  BACHELOR_DEGREE,
} = EDUCATION

const TOTAL_FORM = 3

const WizardForm = () => {
  const [step, setStep] = useState(1)
  const [result, setResult] = useState(null)

  const handleValidation = values => {
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
        onSubmit={async (values, actions) => {
          if (step !== TOTAL_FORM) {
            actions.setSubmitting(false)
            setStep(prevStep => prevStep + 1)
          } else {
            try {
              const data = await postData(API_URL, values)
              setResult(data)
              actions.resetForm()
              actions.setSubmitting(false)
            } catch (error) {
              console.error(error)
            }
          }
        }}
        render={props => (
          <Form>
            <div className="forms-wrapper">
              {step === 1 && <PersonalForm {...props} />}
              {step === 2 && <EducationForm {...props} />}
              {step === 3 && <FamilyForm {...props} />}
            </div>
            {step !== 3 ? (
              <div className="form-button-container">
                <button
                  type="button"
                  disabled={step === 1}
                  onClick={() => setStep(step - 1)}
                >
                  &lt;&lt; Previous
                </button>
                <button type="submit">Next &gt;&gt;</button>
              </div>
            ) : (
              <div className="form-button-container">
                <button type="button" onClick={() => setStep(step - 1)}>
                  &lt;&lt; Previous
                </button>
                <button type="submit" disabled={props.isSubmitting}>
                  Submit
                </button>
              </div>
            )}
          </Form>
        )}
      />
      <div className="form-submission-result">
        {result &&
          Object.keys(result).map((res, index) => {
            return (
              <div className="result-item" key={index}>
                <span>{res} :</span>
                <span>{result[res]}</span>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default WizardForm
