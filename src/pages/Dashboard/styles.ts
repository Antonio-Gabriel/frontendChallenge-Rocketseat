import styled from "styled-components";

export const Container = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 1.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);

  grid-template-columns: 300px 1fr;
  gap: 3.5rem;

  .grid {
    gap: 1.5rem;
  }
`;

export const SideBar = styled.aside`
  .profile-stacks,
  .profile-card,
  nav {
    padding: 2.2rem 2rem;
    background: var(--bg-cards);

    border-radius: 0.8rem;
    -webkit-box-shadow: 3px 3px 2px 1px rgba(28, 27, 35, 0.6);
    box-shadow: 3px 3px 2px 1px rgba(28, 27, 35, 0.6);
  }

  > div:last-child {
    margin-bottom: 1rem;
  }

  .profile-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 120px;
      border-radius: 100%;
      border: 2.5px solid #5aab45;
    }

    article {
      text-align: center;
      color: var(--text-color);

      h2 {
        margin-bottom: 0.5rem;
      }
      span {
        font-size: 0.875rem;
      }
    }
  }

  .profile-description {
    color: var(--text-color);

    li {
      display: inline-flex;
      align-items: center;
      font-size: 0.875rem;

      img {
        margin-right: 0.6rem;
      }
    }
  }

  .profile-stacks {
    padding: 2.2rem 0;

    header {
      padding-left: 1rem;

      h3 {
        color: var(--text-color);
      }
    }
    .grid {
      gap: 0.5rem;
    }
    .content {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
