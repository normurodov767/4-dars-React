import styled, { css } from "styled-components";

const comonStyles = css`
  font-size: 24px;
  color: white;
`;
const Main1 = styled.nav`
  width: 100%;
  height: 568px;
  background-color: #163a24;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Main2 = styled.div`
  width: 1440px;

  padding: 74px 130px 0px 130px;
  width: 1440px;
  height: 328px;
`;
const Main3 = styled.div`
  width: 1180px;
  height: 254px;

  display: grid;
  grid-template-columns: repeat(4, 295px);
  grid-template-rows: 239px;
`;
const Main4 = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
`;

export { Main1, Main2, Main3, Main4 };
