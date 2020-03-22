import React, { useEffect, useState } from "react";
import PaginationButton from "../Pagination-Button/PaginationButton.component";
import { Container, ButtonContainer } from "./pagination.styles";

const Pagination = ({
  next,
  prev,
  jump,
  first,
  last,
  currentPage,
  totalPages,
  active
}) => {
  console.log(totalPages);

  const [buttons, setButtons] = useState(null);
  useEffect(() => {
    let x = [];
    for (let i = 1; i <= totalPages; i++) {
      x.push(i);
    }
    setButtons(x);
  }, [active]);
  const bold = page =>
    page === currentPage
      ? { fontWeight: "700", background: "var(--secondary-color-lightest)" }
      : null;

  return (
    <Container>
      <ButtonContainer onClick={prev}>
        <div>&#8592;</div> Prev
      </ButtonContainer>
      <ButtonContainer onClick={first}>First</ButtonContainer>
      {buttons &&
        buttons.slice(0, 20).map(page => {
          return (
            <div className="hiiii" style={{ ovderflow: "hidden" }}>
              <ButtonContainer style={bold(page)} onClick={e => jump(page, e)}>
                {page}
              </ButtonContainer>
            </div>
          );
        })}
      <ButtonContainer onClick={last}>Last</ButtonContainer>
      <ButtonContainer onClick={next}>Next</ButtonContainer>
    </Container>
  );
};

export default Pagination;
