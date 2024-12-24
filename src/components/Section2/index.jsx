import React from "react";
import { Section10, Section11, Section12 } from "./style";
import { H1, P } from "../Aside/style";
import rasm10 from "../../assets/imgs/Frame (10).svg";

function Section2() {
  return (
    <div>
      <Section10>
        <Section11>
          <Section12>
            <H1 style={{ width: "338px" }}>How the scenes fit together</H1>
            <P style={{ width: "379px" }}>
              Employee Training & Development, Diversity <br /> & Inclusion
              Programs, and Conflict <br /> Resolution.
            </P>
          </Section12>
          <img src={rasm10} alt="" />
        </Section11>
      </Section10>
    </div>
  );
}

export default Section2;
