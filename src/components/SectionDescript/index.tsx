import { IsectionDescript } from "../../types/IsectionDescript";
import { Container, Content } from "./styles";

export function SectionDescription({ title, action }: IsectionDescript) {
  return (
    <>
      <Container>
        <Content>
          <h3>{title}</h3>
          <div className="action">
            <span>{action}</span>
          </div>
        </Content>
      </Container>
    </>
  );
}
