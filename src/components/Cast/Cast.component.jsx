import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect.hooks";
import { fetchCastSuggestion } from "../../redux/actions/index";
import CastSuggestion from "../CastSuggestion/CastSuggestion.component";
import Input from "../Input/Input.component";
import Button from "../Button/Button";

const Cast = ({
  type,
  placeholder,
  fetchCastSuggestion,
  castSuggestions,
  advancedSearchValue,
  advancedSearchSetValue,
}) => {
  useDidUpdateEffect(() => {
    setTimeout(() => {
      fetchCastSuggestion(type, advancedSearchValue);
    }, 150);
  }, [advancedSearchValue]);
  const handleOnChange = (e) => {
    advancedSearchSetValue(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Input
        handleOnChange={handleOnChange}
        value={advancedSearchValue}
        placeholder={placeholder}
      ></Input>
      <Button handleClick={handleSubmit} title="add"></Button>
      {castSuggestions &&
        castSuggestions.slice(0, 6).map((cast) => {
          return (
            <div key={cast.id}>
              {
                <CastSuggestion
                  name={cast.name}
                  advancedSearchValue={advancedSearchValue}
                  advancedSearchSetValue={advancedSearchSetValue}
                />
              }
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  castSuggestions: state.castSuggestions,
});

export default connect(mapStateToProps, {
  fetchCastSuggestion: fetchCastSuggestion,
})(Cast);
