import styled, { css } from "styled-components";
const comonStyles = css`
  /* display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
  color: #fbfaf7;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.79px;
  text-align: center;
`;

const Nav = styled.nav`
  width: 100%;
  height: 642px;
  background-color: #163a24;
  display: flex;
  flex-direction: column;
`;

const Nav1 = styled.div`
  width: 100%;
  height: 98px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Nav2 = styled.div`
  width: 1180px;
  height: 58px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav3 = styled.ul`
  width: 341px;
  height: 52px;

  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${comonStyles}
`;
const Nav4 = styled.button`
  ${comonStyles};
  width: 141px;
  height: 52px;

  border-radius: 160px;
  background-color: #198c36;
  border: none;
  &:hover {
    background-color: blue;
  }
`;

const Nav10 = styled.div`
  width: 1440px;
  height: 544px;

  display: flex;
  justify-content: center;
`;
const Nav11 = styled.div`
  width: 1180px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav12 = styled.div`
  width: 491.66px;
  height: 294px;
  padding: 0px 16.66px 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-family: Recoleta;
  font-size: 48px;
  font-weight: 600;
  line-height: 65.25px;
  text-align: left;
  color: #fbfaf7;
`;
const P = styled.p`
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #fbfaf7;
`;
export { Nav, Nav1, Nav2, Nav3, Nav4, Nav10, Nav11, Nav12, H1, P };
