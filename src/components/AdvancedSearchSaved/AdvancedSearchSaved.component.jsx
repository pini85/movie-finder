import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  displayUserSearch,
  removeUserAdvancedSearch,
  defaultSearches,
} from "../../redux/actions";

import {
  Container,
  SearchContainer,
  Title,
  ButtonContainer,
  IconContainer,
} from "./AdvancedSearchSaved.styles";
import Button from "../Button/Button";
import OptionButtonWrapper from "../OptionButtonWrapper/OptionButtonWrapper.component";
import OptionButton from "../OptionButton/OptionButton.component";

const AdvancedSearchSaved = (props) => {
  const handleClick = (search) => {
    console.log("clicked on defaultSearch", search);

    props.displayUserSearch(search);
  };
  const handleDefaultSearch = async () => {
    props.defaultSearches();
  };

  const handleRemoveClick = (search) => {
    props.removeUserAdvancedSearch(search);
  };
  return (
    <Container>
      <Title>Saved Search Results</Title>
      <SearchContainer>
        {props.displayUserSearches.length < 1 && (
          <div>
            <div>No searches saved</div>
            <div onClick={handleDefaultSearch} style={{ background: "red" }}>
              Load authors search results
            </div>
          </div>
        )}

        {props.displayUserSearches &&
          props.displayUserSearches.map((search) => {
            return (
              <ButtonContainer>
                <OptionButtonWrapper
                  color1="var(--primary-color-light)"
                  color2="var(--primary-color)"
                >
                  <OptionButton
                    handleOptionClick={() => handleClick(search)}
                    title={search.search.name}
                    textColor="white"
                  />
                </OptionButtonWrapper>
                <IconContainer onClick={() => handleRemoveClick(search)}>
                  <FontAwesomeIcon icon={faTrash} />
                </IconContainer>
              </ButtonContainer>
            );
          })}
      </SearchContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  displayUserSearches: state.userAdvancedSearches,
});
const mapStateToDispatch = {
  displayUserSearch: (search) => displayUserSearch(search),
  removeUserAdvancedSearch: (obj) => removeUserAdvancedSearch(obj),
  defaultSearches: defaultSearches,
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(AdvancedSearchSaved);
