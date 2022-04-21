import { cVar } from "@src/helpers";
import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${cVar("black")};
`;
export const Text = styled.p`
  font-size: 10vw;
  color: ${cVar("white")};
  font-family: ${cVar("dinAlternate")};

  & > span {
    font-family: ${cVar("dmSans")};
  }
`;

function Preloader() {
  return (
    <Wrapper>
      {/* Add Random Quotes */}
      {/* Add Name and Flip it using Gsap flip */}
      {/* Add Countdown from 0 to 100% */}
      <Text>JOSHUA OLAJIDE</Text>
    </Wrapper>
  );
}

export default Preloader;
