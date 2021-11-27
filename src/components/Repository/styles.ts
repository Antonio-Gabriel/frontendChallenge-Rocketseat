import styled from "styled-components";

export const Container = styled.div`
  background: var(--bg-cards);
  border-radius: 0.8rem;
  -webkit-box-shadow: 3px 3px 2px 1px rgba(28, 27, 35, 0.6);
  box-shadow: 3px 3px 2px 1px rgba(28, 27, 35, 0.6);

  padding: 1.5rem 1.2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: inline-flex;
    align-items: center;

    h4 {
      color: var(--text-color);
      margin-left: 1rem;
    }
  }

  .content {
    padding: 1.5rem 0;

    p {
      color: var(--text-color);
      font-size: 0.875rem;
      line-height: 1.2rem;
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .interaction {
      display: inline-flex;

      div {
        display: inline-flex;
        align-items: center;

        img {
          height: 20px;
        }

        span {
          margin-left: 0.5rem;
          color: var(--text-color);
          font-size: 0.875rem;
        }
      }
    }

    .lang {
      display: inline-flex;
      align-items: center;

      .circle {
        width: 12px;
        height: 12px;
        background-color: #e3dc86;
        margin-right: 0.5rem;
        border-radius: 0.8rem;
      }

      span {
        font-size: 0.875rem;
        color: var(--text-color);
      }
    }
  }
`;
