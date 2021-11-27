import locationIcon from "../../assets/icons/map-pin.svg";
import companyIcon from "../../assets/icons/briefcase.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedInIcon from "../../assets/icons/linkedin.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import siteIcon from "../../assets/icons/globe.svg";
import addressIcon from "../../assets/icons/mail.svg";

import { Container, Grid, SideBar, Content } from "./styles";
import { Tag } from "../../components/Tag";
import { useEffect, useState } from "react";
import { Itag } from "../../types/Itag";
import { tags, Repository as Datas } from "./data";
import { SectionDescription } from "../../components/SectionDescript";

import { Repository } from "../../components/Repository";
import { IRepository } from "../../types/IRepository";

export function Dashboard() {
  const [tag, setTag] = useState<Itag[]>([]);
  const [repository, setRepository] = useState<IRepository[]>([]);

  useEffect(() => {
    setTag(tags);
    setRepository(Datas);
  }, []);

  return (
    <>
      <Container>
        <Grid>
          <SideBar className="grid">
            <div className="grid profile-card">
              <img
                src="https://avatars.githubusercontent.com/u/69061087?v=4"
                alt="Avatar"
              />
              <article>
                <h2>António Gabriel</h2>
                <span>Software Developer</span>
              </article>
            </div>
            <nav className="profile-description">
              <ul className="grid">
                <li>
                  <img src={locationIcon} alt="location icon" />
                  Angola
                </li>
                <li>
                  <img src={companyIcon} alt="company icon" />
                  Rocketseat
                </li>
                <li>
                  <img src={githubIcon} alt="location icon" />
                  António-Gabriel
                </li>
                <li>
                  <img src={linkedInIcon} alt="location icon" />
                  António Gabriel
                </li>
                <li>
                  <img src={twitterIcon} alt="location icon" />
                  António Gabriel
                </li>
                <li>
                  <img src={siteIcon} alt="location icon" />
                  ag.dev
                </li>
                <li>
                  <img src={addressIcon} alt="location icon" />
                  ag@dev.net
                </li>
              </ul>
            </nav>
            <div className="profile-stacks grid">
              <header>
                <h3>Tecnologias</h3>
              </header>
              <div className="content grid">
                {tag.map((name) => (
                  <Tag name={name.name} key={name.name} />
                ))}
              </div>
            </div>
          </SideBar>
          <Content>
            <SectionDescription title="My Projects" action="Veja Todos" />
            <div className="repository-card">
              {repository.map(({ title, description, fork, stack, star }) => (
                <Repository
                  title={title}
                  description={description}
                  fork={fork}
                  star={star}
                  stack={stack}
                  key={title}
                />
              ))}
            </div>
            <SectionDescription title="Recent Posts" />
          </Content>
        </Grid>
      </Container>
    </>
  );
}
