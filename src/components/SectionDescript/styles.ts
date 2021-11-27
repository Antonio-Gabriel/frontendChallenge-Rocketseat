import styled from "styled-components";

export const Container = styled.div`
  background: var(--bg-cards);
  padding: 1rem 1.4rem;

  border-radius: 0.8rem;
  -webkit-box-shadow: 3px 3px 2px 1px rgba(28, 27, 35, 0.6);
  box-shadow: 3px 3px 2px 1px rgba(28, 27, 35, 0.6);

  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--text-color);

  span {
    font-size: 0.875rem;
    cursor: pointer;
  }  
`;
