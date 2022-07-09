import { useEffect, useRef } from "react";
import { Container, Skillset, Skill } from "./Skills.styles";
import { SkillsetTop, SkillsetBottom } from "@utils/data";

interface Skillprops {
  timeline?: any;
}

function Skills({ timeline }: Skillprops) {
  const Cont = useRef(null);
  useEffect(() => {
    timeline.fromTo(
      Cont.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1.0,
        ease: "back",
        y: 0,
        opacity: 1,
      }
    );
  }, [timeline]);
  return (
    <Container ref={Cont}>
      <Skillset data-attr="top">
        {SkillsetTop.map((data, key) => (
          <Skill key={key}>{data} </Skill>
        ))}
      </Skillset>
      <Skillset style={{ marginTop: "30px" }} data-attr="bottom">
        {SkillsetBottom.map((data, key) => (
          <Skill key={key}>{data} </Skill>
        ))}
      </Skillset>
    </Container>
  );
}

export default Skills;
