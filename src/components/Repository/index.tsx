import folderIcon from "../../assets/icons/folder.svg";
import starIcon from "../../assets/icons/star.svg";
import forkIcon from "../../assets/icons/git-branch.svg";

import { Container, Content } from "./styles";
import { IRepository } from "../../types/IRepository";

export function Repository({
  title,
  fork,
  stack,
  star,
  description,
}: IRepository) {
  return (
    <>
      <Container>
        <Content>
          <header>
            <img src={folderIcon} alt="repository" />
            <h4>{title}</h4>
          </header>
          <div className="content">
            <p>{description}</p>
          </div>
          <div className="links">
            <div className="interaction grid">
              <div className="star">
                <img src={starIcon} alt="star" />
                <span>{star}</span>
              </div>
              <div className="fork">
                <img src={forkIcon} alt="Fork" />
                <span>{fork}</span>
              </div>
            </div>

            <div className="lang">
              <div className="circle" />
              <span>{stack}</span>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
}
