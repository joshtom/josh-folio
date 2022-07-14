import { useEffect, useRef } from "react";
import { cVar } from "@src/helpers";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 20px auto 0 auto;
  font-family: ${cVar("dmSans")};

  ${({ theme }) => theme.media.custom(0, 1024)} {
    width: 85%;
  }
  ${({ theme }) => theme.media.custom(0, 768)} {
    width: 90%;
  }
  p {
    color: ${cVar("pink")};
    font-size: 18px;
    text-transform: uppercase;
    ${({ theme }) => theme.transition.default};

    &:last-child {
      cursor: pointer;
      &:hover {
        color: ${cVar("primaryLight")};
      }
    }

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
      ease: "bounce.out",
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
        <a href="https://twitter.com/blsnomot" rel="noreferrer" target="_blank">
          <p>
            {" "}
            🎨 &nbsp; <span>Design by</span> B!{" "}
          </p>
        </a>
      </FooterContainer>
    </div>
  );
}

export default Footer;
