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
  }
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <p> &copy; Joshua Olajide - {new Date().getFullYear()} </p>
        <p> 🎨 Design by B! </p>
      </FooterContainer>
    </>
  );
}

export default Footer;
