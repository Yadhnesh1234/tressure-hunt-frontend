// Home.js
import React, { useEffect,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../utility/action/userAction";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Home = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const isUserVerified = useRef(false)

  useEffect(() => {
    isUserVerified.current = user.verified
    localStorage.setItem("email",user.email)
  }, [user]);

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      Promise.resolve(dispatch(login(values)))
      .then(()=>{
        if(isUserVerified.current === true){
          setSubmitting(false);
          navigate("/instruction")
        }
      })
    } catch (error) {
      console.error("Error during form submission:", error);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={user}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">Username</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default Home;
