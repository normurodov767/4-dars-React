import React from "react";
import {
  Aside1,
  Aside10,
  Aside11,
  Aside12,
  Aside2,
  Aside3,
  H1,
  P,
} from "./style";
import rasm3 from "../../assets/imgs/Frame3.svg";
import rasm4 from "../../assets/imgs/Frame4.svg";
import rasm5 from "../../assets/imgs/Rectangle.svg";
import rasm6 from "../../assets/imgs/Rectangle (1).svg";
import rasm7 from "../../assets/imgs/Rectangle (2).svg";
import rasm8 from "../../assets/imgs/Rectangle (3).svg";
import rasm9 from "../../assets/imgs/Rectangle (4).svg";

function Aside() {
  return (
    <>
      <Aside1>
        <Aside2>
          <img src={rasm3} alt="" />
          <Aside3>
            <H1>Put the human back in HR.</H1>
            <P>
              Your employees are the real stars. Show the love and help them
              perform!
            </P>
          </Aside3>
        </Aside2>
        <Aside10>
          <Aside3>
            <H1>You don’t have to play all the parts.</H1>
            <P>
              Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy
              help.
            </P>
          </Aside3>
          <img src={rasm4} alt="" />
        </Aside10>

        <Aside11>
          <H1 style={{ textAlign: "center" }}>We partner with the best</H1>
          <Aside12>
            <img src={rasm5} alt="" />
            <img src={rasm6} alt="" />
            <img src={rasm7} alt="" />
            <img src={rasm8} alt="" />
            <img src={rasm9} alt="" />
          </Aside12>
        </Aside11>
      </Aside1>
    </>
  );
}

export default Aside;
