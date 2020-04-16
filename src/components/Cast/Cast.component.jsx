import React, { useState } from "react";
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
  itemArray,
}) => {
  const [isFocused, setFocused] = useState(false);

  useDidUpdateEffect(() => {
    setTimeout(() => {
      fetchCastSuggestion(type, advancedSearchValue);
    }, 150);
  }, [advancedSearchValue]);

  const handleOnChange = (e) => {
    advancedSearchSetValue(e.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = (e) => {
    setTimeout(() => {
      setFocused(false);
    }, 100);
  };

  const handleSubmit = () => {
    itemArray((value) => [...value, advancedSearchValue]);
    advancedSearchSetValue("");
  };

  return (
    <div>
      <Input
        focus={handleFocus}
        blur={handleBlur}
        handleOnChange={handleOnChange}
        value={advancedSearchValue}
        placeholder={placeholder}
      ></Input>
      <Button handleClick={handleSubmit} title="add"></Button>

      {isFocused &&
        advancedSearchValue.length > 0 &&
        castSuggestions &&
        castSuggestions.slice(0, 6).map((cast) => {
          return (
            <div key={cast.id}>
              {
                <CastSuggestion
                  name={cast.name}
                  advancedSearchValue={advancedSearchValue}
                  advancedSearchSetValue={advancedSearchSetValue}
                  focus={handleFocus}
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
