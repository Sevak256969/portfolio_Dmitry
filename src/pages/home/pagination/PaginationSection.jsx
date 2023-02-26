import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Pagination, Typography } from "@mui/material";
import {
  PagDiv,
  Img,
  TextH2,
  TextPageP,
  TextDiv,
  TextDivBtn,
  EndDiv,
  TextPagePTwo,
  WidthDiv,
  LinkM,
} from "../../../MainTags";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function PaginationSection() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [err, setErr] = useState();
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    fetch(`https://retoolapi.dev/7niHnY/data?_page=${page}&_limit=4`)
      .then((res) => res.json())
      .then((pages) => setData(pages))
      .catch((err) => setErr(err));
  }, [page]);
  useEffect(() => {
    fetch(`https://retoolapi.dev/7niHnY/data`)
      .then((res) => res.json())
      .then((pages) => setDataLength(pages.length))
      .catch((err) => setErr(err));
  }, []);
  return (
    <PagDiv>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            margin: "auto",
            width: "fit-content",
            alignItems: "center",
          }}
        >
          <Typography fontSize={32} align="center"></Typography>
          {data.map((item) => (
            <TextDiv key={item.id}>
              <Img src={item.assets} alt="" />
              <WidthDiv>
                <TextH2>{item.title}</TextH2>
                <TextPageP>{item.description}</TextPageP>
                <TextDivBtn>
                  <EndDiv>
                    <TextPageP>{item.date}</TextPageP>
                    <img src={item.icon} alt="" />
                    <TextPagePTwo>{item.text}</TextPagePTwo>
                  </EndDiv>
                  <LinkM>
                    <a href={item.url}>{item.button}</a>
                  </LinkM>
                </TextDivBtn>
              </WidthDiv>
            </TextDiv>
          ))}
          <Pagination
            count={dataLength > 4 && Math.ceil(dataLength / 4)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Box>
      </ThemeProvider>
    </PagDiv>
  );
}
