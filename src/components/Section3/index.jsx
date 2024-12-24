import React from "react";
import rasm11 from "../../assets/imgs/Frame (11).svg";
import rasm12 from "../../assets/imgs/Frame (12).svg";
import rasm13 from "../../assets/imgs/Group.svg";
import {
  H1,
  P,
  Section30,
  Section40,
  Section41,
  Section42,
  H2,
  UL,
} from "./style";

function Section() {
  return (
    <div>
      <Section30>
        <Section40>
          <H1>Consider everyone's best interest</H1>
          <P>HR is for everyone. Clerksy can help you.</P>
        </Section40>

        <Section41>
          <Section42>
            <img
              style={{ width: "62px", height: "75px" }}
              src={rasm11}
              alt=""
            />
            <H2>
              Protect Your <br /> Company
            </H2>
            <UL>
              <li>Compliance Audits & Training</li>
              <li>Employee Data Storage</li>
              <li>Policy Drafting</li>
            </UL>
          </Section42>

          <Section42 style={{ height: "430px" }}>
            <img
              style={{ width: "62px", height: "75px" }}
              src={rasm12}
              alt=""
            />
            <H2>
              Set Your Employees <br /> Up For Success
            </H2>
            <UL style={{ height: "133px" }}>
              <li>Learning & Development</li>
              <li>Employee Relations</li>
              <li>Employee Relations</li>
              <li>Employee Performance</li>
            </UL>
          </Section42>

          <Section42>
            <img
              style={{ width: "62px", height: "75px" }}
              src={rasm13}
              alt=""
            />
            <H2>
              Know Your Industry's <br /> Legal Landscape
            </H2>
            <UL>
              <li>Work Place Investigations</li>
              <li>Employee Mediations</li>
              <li>Performance Tracking</li>
            </UL>
          </Section42>
        </Section41>
      </Section30>
    </div>
  );
}

export default Section;
