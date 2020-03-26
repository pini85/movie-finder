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

  const changeCounter = type => {
    const difference = props.currentPageData - amount / 2;
    console.log(difference);
    if (
      difference > 0 &&
      props.totalPages - props.currentPageData > amount / 2
    ) {
      type === "next" ? setCount(value => ++value) : setCount(value => --value);
    }
  };
  const changeCounterForJump = page => {
    const difference = page - amount / 2;

    if (difference >= 0 && props.totalPages - page >= 10) {
      setCount(difference + 1);
    } else if (props.totalPages - page < 10 && page > amount / 2) {
      setCount(props.totalPages - 10 - 10);
    } else {
      setCount(1);
    }
  };

  const bold = page =>
    page === props.currentPageData
      ? { fontWeight: "700", background: "var(--secondary-color-lightest)" }
      : null;

  return (
    <Container>
      <ButtonContainer onClick={() => props.prev(count, changeCounter("prev"))}>
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
                  onClick={() => {
                    props.jump(page);
                    changeCounterForJump(page);
                  }}
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
      <ButtonContainer onClick={() => props.next(count, changeCounter("next"))}>
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
