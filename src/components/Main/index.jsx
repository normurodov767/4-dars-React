import React from "react";
import { Main1, Main2, Main3, Main4 } from "./style";
import { H1, P } from "../Aside/style";
import rasm5 from "../../assets/imgs/Frame (5).svg";
import rasm6 from "../../assets/imgs/Frame (6).svg";
import rasm7 from "../../assets/imgs/Frame (7).svg";
import rasm8 from "../../assets/imgs/Frame (8).svg";

function Main() {
  return (
    <>
      <Main1>
        <H1 style={{ color: "white", textAlign: "center" }}>
          HR Production of the Highest Quality
        </H1>
        <Main2>
          <Main3>
            <Main4>
              <img src={rasm5} alt="" />
              <P style={{ paddingTop: "22px", color: "#FBFAF7" }}>
                Educates & Informs
              </P>
              <P style={{ color: "#FBFAF7" }}>Employee Expectations</P>
            </Main4>

            <Main4>
              <img src={rasm6} alt="" />
              <P style={{ paddingTop: "22px", color: "#FBFAF7" }}>
                Protects Your Business
              </P>
              <P style={{ color: "#FBFAF7" }}>Just in Case</P>
            </Main4>
            <Main4>
              <img src={rasm7} alt="" />
              <P style={{ paddingTop: "22px", color: "#FBFAF7" }}>
                Manages & Stores
              </P>
              <P style={{ color: "#FBFAF7" }}>Important Documents</P>
            </Main4>

            <Main4>
              <img src={rasm8} alt="" />
              <P style={{ paddingTop: "22px", color: "#FBFAF7" }}>
                Create a Healthy
              </P>
              <P style={{ color: "#FBFAF7" }}>Work Environment</P>
            </Main4>
          </Main3>
        </Main2>
      </Main1>
    </>
  );
}

export default Main;
