import { IPost } from "../../types/IPost";
import { Container, Content, TagSection } from "./styles";

export function Post({ title, date, description, tags }: IPost) {
  return (
    <Container>
      <Content>
        <div className="image">
          <img
            src="https://avatars.githubusercontent.com/u/69061087?v=4"
            alt="Avatar"
          />
        </div>
        <div className="description">
          <header>
            <h3>{title}</h3>
            <span>{date}</span>
          </header>
          <div className="post-description">
            <p>{description}</p>
            <TagSection>
              {tags?.map(({ name }) => (
                <span key={1 + 1}>{name}</span>
              ))}
            </TagSection>
          </div>
        </div>
      </Content>
    </Container>
  );
}
