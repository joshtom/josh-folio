import Logo from "@src/assets/icons/Logo";
import { LogoArea } from "../Header/Header.styles";
import { LineText } from "../LineText/LineText";
import {
  ContactContainer,
  Email,
  Socials,
  List,
  Heading,
} from "./Contact.styles";

function Contact() {
  return (
    <>
      <LineText>Contact</LineText>
      <ContactContainer>
        <Heading>Let's Work On Something Cool Together</Heading>

        <Email>
          <a href="mailto:joshuaolarjide@gmail.com">
            🌍 <p>joshuaolarjide@gmail.com </p>
          </a>
        </Email>
        <Socials>
          <List>
            <a href="#" aria-label="resume">
              RESUME
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume">
              MEDIUM
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume">
              TWITTER
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume">
              LINKEDIN
            </a>
          </List>
          <List>
            <a href="#" aria-label="resume">
              GITHUB
            </a>
          </List>
          <List>
            <LogoArea>
              <Logo />
            </LogoArea>
          </List>
        </Socials>
      </ContactContainer>
    </>
  );
}

export default Contact;
