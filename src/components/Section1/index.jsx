import React from "react";
import { Section1, Section2, Section3 } from "./style";
import { H1, P } from "../Aside/style";
import rasm9 from "../../assets/imgs/Frame (9).svg";

function Section() {
  return (
    <>
      <Section1>
        <Section2>
          <Section3>
            <H1 style={{ textAlign: "center", width: "739px" }}>
              Employees come in all shapes and sizes. Find the right fit.
            </H1>
            <P
              style={{
                textAlign: "center",
                width: "760px",
              }}
            >
              Focus on casting and screening. Let Clerksy handle contracts,
              resolve any on set-conflicts <br /> and make sure you are
              compliant with work and safety boards.
            </P>
          </Section3>
          <img src={rasm9} alt="" />
        </Section2>
      </Section1>
    </>
  );
}

export default Section;
