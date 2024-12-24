import React from "react";
import { Section50, Section51, Section52 } from "./style";
import { H1, P } from "../Aside/style";
import { Button } from "../Section4/style";
import rasm17 from "../../assets/imgs/Frame (17).svg";

function Section5() {
  return (
    <div>
      <Section50>
        <Section51>
          <Section52>
            <H1>Not just another HR resource.</H1>
            <P>Simple. Entertaining. Informative.</P>
            <Button style={{ width: "191px" }}>Download E-book</Button>
          </Section52>
          <img src={rasm17} alt="" />
        </Section51>
      </Section50>
    </div>
  );
}

export default Section5;
