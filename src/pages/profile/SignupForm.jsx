import React, { useState } from "react";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  ProfileH2,
  ProfilDivInput,
  ProfilDiv,
  ProfilInput,
  ProfilForm,
  ProfilFormDiv,
  ProfilButton,
} from "../../MainTags";
import "../../App.css";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <ProfilInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// And now we can use these
const SignupForm = () => {
  const [data, setData] = useState({
    fullName: "",
    password: "",
    email: "",
  });
  const [repeatPassword, setRepeatPassword] = useState([]);
  const navigate = useNavigate();

  async function handleClick(e) {
    e.persist();
    try {
      if (data.password === repeatPassword) {
        const response = await fetch("https://retoolapi.dev/7KS0ku/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const jsonData = await response.json();
        console.log(jsonData);
        navigate("/auth");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ProfilDiv>
      <ProfilDivInput>
        <ProfileH2>Профиль</ProfileH2>
        <Formik
          validationSchema={Yup.object({
            fullName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            password: Yup.string()
              .matches(/^[a-zA-Z0-9\W]{3,30}$/)
              .max(20, "Must be 20 characters or less")
              .min(5)
              .required("Required"),
            passwordRepeat: Yup.string()
              .required("Confirm Password is required")
              .oneOf(
                [Yup.ref("password"), null],
                "Confirm Password does not match"
              ),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
        >
          <ProfilForm onSubmit={handleSubmit}>
            <ProfilFormDiv>
              <MyTextInput
                onChange={handleChange}
                label="Full Name"
                name="fullName"
                type="text"
                placeholder="Sevak Movsisya"
                value={data.fullName}
              />
              <MyTextInput
                onChange={handleChange}
                label="Email Address"
                name="email"
                type="email"
                placeholder="jane@formik.com"
                value={data.email}
              />
              <MyTextInput
                onChange={handleChange}
                label="Password"
                name="password"
                type="password"
                placeholder="Новый пароль"
                value={data.password}
              />
              <MyTextInput
                onChange={(e) => setRepeatPassword(e.target.value)}
                label="Repeat password"
                name="passwordRepeat"
                type="password"
                placeholder="Подтвердите пароль"
                value={repeatPassword}
              />
            </ProfilFormDiv>
            <div>
              <ProfilButton onMouseDown={handleClick}>Сохранить</ProfilButton>
            </div>
          </ProfilForm>
        </Formik>
      </ProfilDivInput>

      {/* <ProfileImgDiv>
        <img src={avatar} alt="" />
        <ProfileA href="">выбрать аватар</ProfileA>
      </ProfileImgDiv> */}
    </ProfilDiv>
  );
};
export default SignupForm;
