import { Container, Skillset, Skill } from "./Skills.styles";
import { SkillsetTop, SkillsetBottom } from "@utils/data";
function Skills() {
  return (
    <Container>
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
