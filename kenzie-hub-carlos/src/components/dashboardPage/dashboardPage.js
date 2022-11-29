import styled from "styled-components";

export const MainContent = styled.main`
  background-color: var(--color-grey-1);
  width: 100%;
  height: 100vh;
  color: var(--fixed-white);
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    padding: 90px 0;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 29px;
    }

    p {
      color: var(--color-grey-4);
    }
  }

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: var(--gap-4);
  }
`;
