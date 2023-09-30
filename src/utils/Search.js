import React, { useState } from "react";
import { Input, Form, FormGroup } from "reactstrap";
import "./Search.css";

function Search(props) {
  const { characters, onSearch } = props;

  const [searchCriteria, setSearchCriteria] = useState("");

  const searchHandler = (e) => {
    setSearchCriteria(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Form>
      <FormGroup>
        <Input
          id="SearchInput"
          name="SearchInput"
          placeholder="Search"
          type="text"
          value={searchCriteria}
          onChange={searchHandler}
        />
      </FormGroup>
    </Form>
  );
}

export default Search;
