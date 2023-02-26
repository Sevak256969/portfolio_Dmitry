import React, { useState, useEffect } from "react";
import { InputHeader, InpSearch, SearchBtn } from "../MainTags";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function InputSearch({ handleSearch }) {
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://retoolapi.dev/7niHnY/data`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setErr(err));
  }, []);

  const dataFilter = () => {
    const filtering = data.filter((title) =>
      title.title.toLowerCase().includes(term)
    );
    setFilterData(filtering);
  };
  return (
    <InpSearch>
      <InputHeader
        type="text"
        value={term}
        placeholder="Поиск по блогу"
        onChange={(e) => setTerm(e.target.value)}
        onBlur={dataFilter}
      />
      <SearchBtn
        type="submit"
        onClick={() => navigate("/searchResult", { state: filterData })}
      >
        <SearchIcon />
      </SearchBtn>
    </InpSearch>
  );
}
