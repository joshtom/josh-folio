import { useEffect, useRef } from "react";
import { Container, Skillset, Skill } from "./Skills.styles";
import { SkillsetTop, SkillsetBottom } from "@utils/data";

interface Skillprops {
  timeline?: any;
}

function Skills({ timeline }: Skillprops) {
  const Cont = useRef(null);
  useEffect(() => {
    timeline.from(Cont.current, {
      duration: 1.0,
      ease: "back",
      y: 50,
      opacity: 0,
    });
  }, [timeline]);
  return (
    <Container ref={Cont}>
      <Skillset
        data-scroll
        data-scroll-speed="3"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      >
        {SkillsetTop.map((data, key) => (
          <Skill key={key}>{data} </Skill>
        ))}
      </Skillset>
      <Skillset
        style={{ marginTop: "30px" }}
        data-scroll
        data-scroll-speed="-1"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      >
        {SkillsetBottom.map((data, key) => (
          <Skill key={key}>{data} </Skill>
        ))}
      </Skillset>
    </Container>
  );
}

export default Skills;
