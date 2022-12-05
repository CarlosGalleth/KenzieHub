import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey-1);
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 50px 0;

  main {
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
    border-radius: var(--radius-2);
    width: 30%;
    padding: 40px 15px;
    display: flex;
    flex-direction: column;
    gap: var(--gap-4);

    @media only screen and (max-width: 720px) {
      width: 80%;
    }
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--fixed-white);
    gap: var(--gap-6);

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: var(--gap-9);

      input {
        width: 100%;
        height: 55px;
        border-radius: var(--radius-2);
        border: 1px solid var(--color-grey-4);
        background-color: var(--color-grey-3);
        color: var(--fixed-white);
      }

      select {
        width: 100%;
        height: 55px;
        border-radius: var(--radius-2);
        border: 1px solid var(--color-grey-4);
        background-color: var(--color-grey-3);
        color: var(--fixed-white);
        padding-left: 15px;
      }

      p {
        color: var(--color-brand-1);
        font-size: 13px;
      }
    }

    button {
      background-color: var(--color-brand-1-disabled);
      color: var(--color-grey-4);
      width: 100%;
      height: 55px;
      border-radius: var(--radius-2);
      font-size: 17px;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: default;
      border: none;
    }
  }
`;

export const DontHaveAccount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-6);

  small {
    color: var(--color-grey-4);
  }

  button {
    width: 100%;
    height: 55px;
    background-color: var(--color-grey-4);
    font-size: 17px;
    font-weight: 600;
    color: var(--fixed-white);
    border-radius: var(--radius-2);
  }
`;
