import { useEffect, useRef } from "react";
import { cVar } from "@src/helpers";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 20px auto 0 auto;

  ${({ theme }) => theme.media.custom(0, 1024)} {
    width: 85%;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    width: 90%;
  }
  p {
    color: ${cVar("pink")};
    font-size: 18px;

    span {
      ${({ theme }) => theme.media.custom(0, 768)} {
        display: none;
      }
    }
  }
`;

interface Footerprops {
  timeline?: any;
}

function Footer({ timeline }: Footerprops) {
  const Cont = useRef(null);
  useEffect(() => {
    timeline.from(Cont.current, {
      // delay: 9,
      // ease: "power4.out",
      ease: "bounce.out",
      // skewY: 7,
      // y: 400,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    });
  }, [timeline]);
  return (
    <div ref={Cont}>
      <FooterContainer>
        <p> &copy; Joshua Olajide - {new Date().getFullYear()} </p>
        <p>
          {" "}
          🎨 &nbsp; <span>Design by</span> B!{" "}
        </p>
      </FooterContainer>
    </div>
  );
}

export default Footer;
