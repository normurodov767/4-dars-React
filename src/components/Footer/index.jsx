import React from "react";
import { Footer1, Footer2, Footer3, Footer4, LI, P, P1, UL } from "./style";
import rasm20 from "../../assets/imgs/Frame (20).svg";
import rasm21 from "../../assets/imgs/Frame (21).svg";
import rasm22 from "../../assets/imgs/Frame (22).svg";
import rasm23 from "../../assets/imgs/Frame (23).svg";
import rasm24 from "../../assets/imgs/Frame (24).svg";
function Footer() {
  return (
    <>
      <Footer1>
        <Footer2>
          <img src={rasm20} alt="" />
          <P>A people company.</P>
          <Footer3>
            <img
              style={{ width: "13px", height: "24px" }}
              src={rasm21}
              alt=""
            />
            <img
              style={{ width: "30px", height: "28px" }}
              src={rasm22}
              alt=""
            />
            <img
              style={{ width: "30px", height: "28px" }}
              src={rasm23}
              alt=""
            />
            <img
              style={{ width: "25px", height: "25px" }}
              src={rasm24}
              alt=""
            />
          </Footer3>
        </Footer2>
        <Footer4>
          <P1>
            © 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy,
            Inc.
          </P1>
          <UL>
            <LI>Privacy Policy</LI>
            <LI>Terms of Service</LI>
            <LI>GDPR</LI>
            <LI>Careers</LI>
            <LI>Press Kit</LI>
          </UL>
        </Footer4>
      </Footer1>
    </>
  );
}

export default Footer;
