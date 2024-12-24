import React from "react";
import rasm16 from "../../assets/imgs/Frame (14).svg";
import rasm17 from "../../assets/imgs/Frame (15).svg";
import rasm18 from "../../assets/imgs/Frame (16).svg";
import {
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
} from "./style";
import { H2 } from "../Section3/style";

function Section4() {
  return (
    <>
      <Section43>
        <Section44>
          <Section45>
            <H1>It's easy as 1, 2, 3</H1>
            <P>Clerksy can help use your unique business needs. Here's how:</P>
          </Section45>
          <Section46>
            <Section47>
              <Section48>
                <P1>Fill out a form and tell us what you're looking for:</P1>
                <H2>5 minutes</H2>
              </Section48>
              <img src={rasm16} alt="" />
            </Section47>

            <Section47>
              <Section48>
                <P1>Time it will take a Clerksy rep to follow up:</P1>
                <H2>24 hours</H2>
              </Section48>
              <img src={rasm17} alt="" />
            </Section47>

            <img src={rasm18} alt="" />
          </Section46>
          <Button>Book Free Discovery Call</Button>
        </Section44>
      </Section43>
    </>
  );
}

export default Section4;
