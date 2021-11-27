import { Itag } from "../../types/Itag";
import { Content } from "./styles";

export function Tag({ name }: Itag) {
  return (
    <>
      <Content className="tag">
        <span>{name}</span>
      </Content>
    </>
  );
}
