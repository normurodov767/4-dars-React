import React from "react";
import {
  P1,
  Section70,
  Section71,
  Section72,
  Section73,
  Section74,
} from "./style";
import { H1, P } from "../Aside/style";
import { Button } from "../Section4/style";

function Section7() {
  return (
    <>
      <Section70>
        <Section71>
          <Section72>
            <H1>Stay up to date!</H1>
            <P>Sign up for the latest Clerksy news.</P>
          </Section72>
          <Section73>
            <Section74>
              <Button style={{ width: "111px" }}>Sign Up</Button>
            </Section74>
            <P1>
              By submitting your email you agree to receive updates about
              Clerksy. You can <br /> unsubscribe at any time. View our full
              <span style={{ color: "#198C36" }}> Privacy Policy</span>
            </P1>
          </Section73>
        </Section71>
      </Section70>
    </>
  );
}

export default Section7;
