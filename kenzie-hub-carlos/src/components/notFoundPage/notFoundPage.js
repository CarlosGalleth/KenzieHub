import styled from "styled-components";

export const NotFoundContainer = styled.main`
  background-color: var(--color-grey-1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  gap: var(--gap-5);

  img {
    width: 35%;
  }

  button {
    background-color: var(--color-brand-1);
    width: 300px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    border-radius: var(--radius-2);
    color: var(--fixed-white);
    letter-spacing: 1px;

    :hover {
      background-color: var(--color-brand-1-disabled);
      color: var(--color-grey-4);
    }
  }
`;
