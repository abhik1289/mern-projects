import { Form, Formik, FormikProps } from 'formik';
import React, { useState } from 'react'
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import * as Yup from 'yup';

interface Values {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const Info = {
  name: "", email: "", password: "", confirmPassword: ""
}
export default function SignUp() {
  const [data, setData] = useState(Info);
  const { name, email, password, confirmPassword } = data;
  const [visible, setVisible] = useState(false);
  const inputValidation = Yup.object({
    name: Yup.string().required().min(3).max(20),
    email: Yup.string().email("Email must be a valid email").required("Email must be required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").max(15, "Password must be at most 15 characters").required("Password must be required"),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password')],"Passwords must match")
  });
  const handleTextChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
}
  return (
    <div className="signUp-form-wrapper mt-6">
      <div>

        <Formik
          enableReinitialize
          initialValues={{ name, email, password, confirmPassword }}
          validationSchema={inputValidation}
          onSubmit={(values, actions) => {
            console.log(values, actions);
          }}
        >
          {(props: FormikProps<Values>) => (<Form>
            <TextInput
              type="text"
              placeholder="Enter your email"
              name="name"
              labelText="Name"
              onChange={handleTextChange}
            />
            <TextInput
              type="text"
              placeholder="Enter your email"
              name="email"
              labelText="Email"
              onChange={handleTextChange}
            />
            <TextInput
              type={visible ? "text" : "password"}
              placeholder=""
              name="password"
              labelText="Password"
              passwordFiled={true}
              setShowText={setVisible}
              onChange={handleTextChange}
            />
            <TextInput
              type={"password"}
              placeholder=""
              name="confirmPassword"
              labelText="Confirm Password"
              onChange={handleTextChange}
            />
            <Button
              title="Sign Up"
            />
          </Form>)}
        </Formik>
      </div>
    </div>
  )
}
