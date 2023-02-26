import React, { useState, useEffect, useRef } from "react";
import { Formik, useField } from "formik";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import { Pagination, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../App.css";
import {
  ComH2,
  ComMainDiv,
  ProfilForm,
  ProfilFormDiv,
  ComBtn,
  ComInput,
  Solid,
  TextH2,
  TextPageP,
} from "../../MainTags";

const theme = createTheme({
  palette: {
    primary: {
      main: "#053e85",
      darker: "#061f3e",
      contrastText: "#ffffff",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#ffffff",
    },
  },
});

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <ComInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
// And now we can use these
const Com = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [err, setErr] = useState();
  const [commName, setCommName] = useState();
  const [comm, setComm] = useState();
  const handleChange = (event, value) => {
    setPage(value);
  };
  const commentName = useRef();
  const comment = useRef();
  useEffect(() => {
    fetch(`https://retoolapi.dev/w6yo7C/data?_page=${page}&_limit=4`)
      .then((res) => res.json())
      .then((pages) => setData(pages))
      .catch((err) => setErr(err));
  }, [page]);
  useEffect(() => {
    fetch(`https://retoolapi.dev/w6yo7C/data`)
      .then((res) => res.json())
      .then((pages) => setDataLength(pages.length))
      .catch((err) => setErr(err));
  }, []);

  const [dataPost, setDataPost] = useState({
    name: "",
    text: "",
    date: new Date().toLocaleString("en-US", {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  });

  async function handleClick(e) {
    e.persist();
    try {
      const response = await fetch("https://retoolapi.dev/w6yo7C/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPost),
      });
      const jsonData = await response.json();
      setCommName("");
      commentName.current.blur();
      setComm("");
      comment.current.blur();
      console.log(jsonData);
    } catch (err) {
      console.log(err);
    }
  }

  const handleChangeData = (e) => {
    setDataPost({
      ...dataPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ComMainDiv>
      <div>
        <ComH2>Обсуждение</ComH2>
        <Formik
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            text: Yup.string().required("Required"),
          })}
        >
          <ProfilForm onSubmit={handleSubmit}>
            <ProfilFormDiv>
              <MyTextInput
                onChange={handleChangeData}
                name="name"
                type="text"
                placeholder="FullName"
                value={commName}
                ref={commentName}
              />
              <Solid></Solid>
              <MyTextInput
                onChange={handleChangeData}
                name="text"
                type="text"
                placeholder="Текст комментария"
                value={comm}
                ref={comment}
              />
              <Solid></Solid>
            </ProfilFormDiv>
            <div>
              <ComBtn onMouseDown={handleClick}>Отправить</ComBtn>
            </div>
          </ProfilForm>
        </Formik>

        <ThemeProvider theme={theme}>
          <Box
            sx={{
              margin: "auto",
              width: "fit-content(100%)",
              alignItems: "center",
            }}
          >
            <Typography fontSize={32} align="center"></Typography>
            {data.map((item) => (
              <div key={item.id}>
                <div>
                  <TextH2>{item.name}</TextH2>
                  <TextPageP>{item.text}</TextPageP>
                  <TextPageP>{item.date}</TextPageP>
                  <Solid></Solid>
                </div>
              </div>
            ))}
            <Pagination
              count={dataLength > 4 && Math.ceil(dataLength / 4)}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Box>
        </ThemeProvider>
      </div>
    </ComMainDiv>
  );
};
export default Com;
