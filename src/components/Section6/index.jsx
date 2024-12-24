import React from "react";
import { Button, Section60, Section61, Section62 } from "./style";
import rasm18 from "../../assets/imgs/Frame (18).svg";
import rasm19 from "../../assets/imgs/Frame (19).svg";
import { H1, P } from "../Navbar/style";
import Section7 from "../Section7";

function Section6() {
  return (
    <Section62>
      <Section60>
        <img src={rasm18} alt="" />
        <Section61>
          <H1>Get Started With Clerksy</H1>
          <P>Make sure your business puts people first.</P>
          <Button>Book a Free Discovery Call</Button>
        </Section61>
        <img src={rasm19} alt="" />
      </Section60>
      <Section7 />
    </Section62>
  );
}

export default Section6;
