import styled from "styled-components";

const Footer1 = styled.footer`
  width: 100%;
  height: 194px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Footer2 = styled.footer`
  width: 1180px;
  height: 84px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const P = styled.p`
  font-family: Recoleta;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
`;

const Footer3 = styled.div`
  width: 140px;
  height: 32px;

  display: flex;
  gap: 14px;
  justify-content: flex-end;
`;

const Footer4 = styled.div`
  width: 1180px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid grey;
`;

const P1 = styled.p`
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #163a24;
`;

const UL = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 14px;
`;
const LI = styled.li`
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  text-align: right;
  color: #198c36;
`;
export { Footer1, Footer2, P, Footer3, Footer4, P1, UL, LI };
