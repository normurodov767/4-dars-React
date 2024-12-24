import styled, { css } from "styled-components";
const stylesCommon = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 119px;
  gap: 26px;
`;

const Section30 = styled.section`
  width: 100%;
  height: 549px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.h1`
  font-family: Recoleta;
  font-size: 48px;
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

const Section40 = styled.section`
  ${stylesCommon}
`;
const Section41 = styled.section`
  width: 1180px;
  height: 430px;

  display: grid;
  grid-template-columns: repeat(3, 353px);
  grid-template-rows: 393px;
  gap: 40px;
  justify-content: center;
`;

const Section42 = styled.div`
  background-color: #e9e4d5;
  border-radius: 10px;
  padding: 50px 0 66px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const H2 = styled.h2`
  font-family: Recoleta;
  font-size: 28px;
  font-weight: 600;
  line-height: 31.5px;
  text-align: left;
  color: #163a24;
`;
const UL = styled.ul`
  width: 273.33px;
  height: 96px;

  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  text-align: left;
  color: #163a24;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`;
export { Section30, H1, P, Section40, Section41, Section42, H2, UL };
