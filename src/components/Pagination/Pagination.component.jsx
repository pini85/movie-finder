import React, { useEffect, useState } from "react";
import { currentPage } from "../../redux/actions";

import { Container, ButtonContainer } from "./pagination.styles";
import { connect } from "react-redux";

const Pagination = props => {
  const [buttons, setButtons] = useState(null);
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(20);

  useEffect(() => {
    props.currentPage(1);
  }, []);

  useEffect(() => {
    let amountOfButtons = [];

    for (let i = count; i <= props.totalPages; i++) {
      amountOfButtons.push(i);
    }
    setButtons(amountOfButtons);
  }, [props.active, props.currentPageData]);

  const changeCounter = () => {
    debugger;
    if (
      props.currentPageData > amount / 2 - 1 &&
      props.currentPageData >= props.totalPages - amount / 2
    )
      return setCount;
  };
  const changeCounterForJump = page => {
    console.log("helloooo");
    // debugger;

    if (page > amount / 2) {
      setCount(page - 9);
      props.currentPage(page);
    } else if (page < props.currentPageData && page > amount / 2 - 1) {
      setCount(props.currentPageData - page);
      props.currentPage(page);
    } else if (props.currentPageData > 10 && page < 10) {
      setCount(1);
    }
    // } else if (
    //   props.currentPageData > amount / 2 - 1 &&
    //   props.currentPageData < props.totalPages - 10
    // ) {
    //   return setCount;
    // }
  };

  const bold = page =>
    page === props.currentPageData
      ? { fontWeight: "700", background: "var(--secondary-color-lightest)" }
      : null;

  return (
    <Container>
      <ButtonContainer onClick={() => props.prev(count, changeCounter())}>
        <div>&#8592;</div> Prev
      </ButtonContainer>
      <ButtonContainer onClick={() => props.first(setCount)}>
        First
      </ButtonContainer>
      {buttons && buttons.length > amount
        ? buttons.slice(0, amount).map(page => {
            return (
              <div className="hiiii" style={{ ovderflow: "hidden" }}>
                <ButtonContainer
                  style={bold(page)}
                  onClick={e => props.jump(page, changeCounterForJump(page))}
                >
                  {page}
                </ButtonContainer>
              </div>
            );
          })
        : buttons &&
          buttons.map(page => {
            return (
              <div className="hiiii" style={{ ovderflow: "hidden" }}>
                <ButtonContainer
                  style={bold(page)}
                  onClick={() => props.jump(page, changeCounter())}
                >
                  {page}
                </ButtonContainer>
              </div>
            );
          })}
      <ButtonContainer onClick={() => props.last(setCount)}>
        Last
      </ButtonContainer>
      <ButtonContainer onClick={() => props.next(count, changeCounter())}>
        Next
      </ButtonContainer>
    </Container>
  );
};

const mapStateToProps = state => ({
  currentPageData: state.currentPage
});

export default connect(mapStateToProps, {
  currentPage: currentPage
})(Pagination);
