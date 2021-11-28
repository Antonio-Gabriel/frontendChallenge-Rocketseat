import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--bg-techs);
  border-radius: 25px;

  width: 80px;
  height: 30px;

  span {
    font-size: 0.625rem;
    color: var(--body-bg-color);
    font-weight: 700;
  }
`;
