import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const SearchBar = ({ onSearch }) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search "
        aria-label="Search"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Text id="basic-addon2"><i className="bi bi-search"></i></InputGroup.Text>
    </InputGroup>
  );
};

export default SearchBar;
