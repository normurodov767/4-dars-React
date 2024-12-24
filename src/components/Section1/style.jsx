import styled, { css } from "styled-components";
const comonStyles = css`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

const Section1 = styled.section`
  width: 100%;
  height: 775px;
  background-color: #f2efe6;
  display: grid;

  align-content: center;
`;
const Section2 = styled.div`
  width: 100%;

  height: 535.25px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Section3 = styled.div`
  ${comonStyles}
`;
export { Section1, Section2, Section3 };
