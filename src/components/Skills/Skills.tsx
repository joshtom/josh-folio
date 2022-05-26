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
      delay: 9,
      duration: 6.0,
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
    <Container ref={Cont}>
      <Skillset>
        {SkillsetTop.map((data, key) => (
          <Skill key={key}>{data} </Skill>
        ))}
      </Skillset>
      <Skillset style={{ marginTop: "30px" }}>
        {SkillsetBottom.map((data, key) => (
          <Skill key={key}>{data} </Skill>
        ))}
      </Skillset>
    </Container>
  );
}

export default Skills;
