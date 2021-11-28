import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.div`
  padding: 1.5rem 1.4rem;
  background: var(--bg-cards);

  border-radius: 0.8rem;
  -webkit-box-shadow: 3px 3px 2px 1px rgba(28, 27, 35, 0.6);
  box-shadow: 3px 3px 2px 1px rgba(28, 27, 35, 0.6);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;

  ${Grid} {
    gap: 1.25rem;
  }

  .image {
    border-radius: 128px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border-radius: 50%;
      height: 128px;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      color: var(--text-color);

      h3 {
        font-weight: 700;
        font-size: 1.125rem;
        margin-bottom: 0.2rem;
      }
      span {
        font-size: 0.875rem;
        font-weight: 300 !important;
      }
    }

    .post-description {
      color: var(--text-color);

      ${Grid} {
        gap: 0.625rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export const TagSection = styled.div`
  display: flex;
  flex-wrap: wrap;

  span {
    font-size: 0.875rem;

    + span {
      margin-left: 10px;
    }
  }
`;
