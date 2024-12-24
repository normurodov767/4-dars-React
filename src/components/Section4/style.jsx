import styled, { css } from "styled-components";
const stylesCommon = css`
  background-color: red;
`;
const Section43 = styled.section`
  width: 100%;
  height: 602px;
  background-color: #f2efe6;
  display: flex;
  align-items: center;
  margin-top: 120px;
`;
const Section44 = styled.section`
  width: 100%;
  height: 361.66px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Section45 = styled.div`
  width: 1180px;
  height: 119px;

  display: flex;
  flex-direction: column;
  gap: 26px;
`;
const H1 = styled.h1`
  font-family: Recoleta;
  font-size: 47px;
  font-weight: 600;
  line-height: 54px;
  text-align: center;
  color: #163a24;
`;
const P = styled.p`
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: #163a24;
`;

const Section46 = styled.div`
  width: 1180px;
  height: 186.66px;

  display: grid;
  grid-template-columns: 393.33px 393.33px 290px;
  grid-template-rows: 183px;
  align-content: center;
`;

const Section47 = styled.div`
  display: flex;
  align-items: center;
  gap: 27.78px;
`;
const Section48 = styled.div`
  width: 262.2px;
  height: 141px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const P1 = styled.p`
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  width: 260px;
  height: 54px;
`;

const Section49 = styled.div`
  height: 183px;

  border: 3px solid #fbc8b8;
`;

const Button = styled.button`
  width: 244px;
  height: 52px;
  background-color: #198c36;
  border-radius: 100px;
  border: none;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  text-align: center;
  color: #fbfaf7;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export {
  Section43,
  Section44,
  Section45,
  H1,
  P,
  Section46,
  Section47,
  Section48,
  P1,
  Section49,
  Button,
};
