import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  displayUserSearch,
  removeUserAdvancedSearch,
} from "../../redux/actions";
import {
  Container,
  SearchContainer,
  Title,
  ButtonContainer,
  IconContainer,
} from "./AdvancedSearchSaved.styles";
import Button from "../Button/Button";

const AdvancedSearchSaved = (props) => {
  console.log(props);

  const handleClick = (search) => {
    props.displayUserSearch(search);
  };

  const handleRemoveClick = (search) => {
    props.removeUserAdvancedSearch(search);
  };
  return (
    <Container>
      <Title>Saved Search Results</Title>
      <SearchContainer>
        {props.displayUserSearches &&
          props.displayUserSearches.map((search) => {
            console.log(search);

            return (
              <ButtonContainer>
                <Button
                  handleClick={() => handleClick(search)}
                  title={search.search.name}
                  width="35rem"
                ></Button>
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
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(AdvancedSearchSaved);
