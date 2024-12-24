import styled, { css } from "styled-components";
const comonStyles = css`
  font-size: 16px;
  color: #ffffff;
`;
const comonStyles2 = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Aside1 = styled.aside`
  width: 100%;
  height: 1225.81px;
  top: 762.06px;
  padding: 0px 130px 0px 130px;
  margin-top: 120px;

  background-color: #ffffff;
`;

const Aside2 = styled.div`
  ${comonStyles2};
  width: 1180px;
  height: 509.55px;
  left: 130px;

  gap: 0px;
  opacity: 0px;
`;

const Aside3 = styled.div`
  width: 393.33px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-family: Recoleta;
  font-size: 48px;
  font-weight: 600;
  line-height: 54px;
  text-align: left;
  color: #163a24;
`;

const P = styled.p`
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #163a24;
`;
const Aside10 = styled.div`
  width: 1180px;
  height: 422.88px;
  ${comonStyles2};
`;

const Aside11 = styled.div`
  width: 1180px;
  height: 293.39px;

  padding: 113.52px 98.34px 0px 98.33px;
`;

const Aside12 = styled.div`
  ${comonStyles2};
  justify-content: space-around;
  width: 983.33px;
  height: 59.39px;

  margin-top: 66.48px;
`;

export { Aside1, Aside2, Aside3, H1, P, Aside10, Aside11, Aside12 };
