import React from "react";
import {
  Nav,
  Nav1,
  Nav2,
  Nav3,
  Nav4,
  Nav10,
  Nav11,
  Nav12,
  H1,
  P,
} from "./style";
import rasm1 from "../../assets/imgs/Frame1.svg";
import rasm2 from "../../assets/imgs/Frame2.svg";

function Navbar() {
  return (
    <>
      <Nav>
        <Nav1>
          <Nav2>
            <img src={rasm1} alt="" />
            <Nav3>
              <li>Log In</li>
              <li>844-332-6440</li>
              <Nav4>Get Started</Nav4>
            </Nav3>
          </Nav2>
        </Nav1>

        <Nav10>
          <Nav11>
            <Nav12>
              <H1>Running the show has never been so easy.</H1>
              <P>
                Ready to put the human back in HR? Clerksy helps you set the
                stage with an inclusive and compliant <br /> workplace.
              </P>
            </Nav12>
            <img src={rasm2} alt="" />
          </Nav11>
        </Nav10>
      </Nav>
    </>
  );
}

export default Navbar;
