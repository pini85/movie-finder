import React, { useEffect, useState, useRef } from "react";
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
  const [isInput, setInput] = useState(false);
  const [isFocused, setFocused] = useState(false);
  useDidUpdateEffect(() => {
    setTimeout(() => {
      fetchCastSuggestion(type, advancedSearchValue);
    }, 150);

    if (advancedSearchValue.length > 0 && isFocused) {
      setInput(true);
    } else {
      setInput(false);
      setFocused(false);
    }
  }, [advancedSearchValue]);
  const inputRef = useRef(null);

  const handleOnChange = (e) => {
    advancedSearchSetValue(e.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleSubmit = () => {};
  console.log(isFocused);

  return (
    <div>
      {/* <input
        onFocus={() => setFocused(true)}
        // onBlur={() => setFocused(false)}
        ref={inputRef}
        type="text"
        value={advancedSearchValue}
        onChange={handleOnChange}
      /> */}
      <Input
        focus={handleFocus}
        handleOnChange={handleOnChange}
        value={advancedSearchValue}
        placeholder={placeholder}
      ></Input>
      <Button handleClick={handleSubmit} title="add"></Button>

      {isInput &&
        isFocused &&
        castSuggestions &&
        castSuggestions.slice(0, 6).map((cast) => {
          return (
            <div key={cast.id}>
              {
                <CastSuggestion
                  name={cast.name}
                  advancedSearchValue={advancedSearchValue}
                  advancedSearchSetValue={advancedSearchSetValue}
                  focus={setFocused}
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
