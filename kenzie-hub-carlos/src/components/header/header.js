import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--color-grey-1);
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--color-brand-1);
  }
`;

export const HeaderRegisterStyled = styled.header`
  background-color: var(--color-grey-1);
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    width: 30%;

    h1 {
      color: var(--color-brand-1);
    }

    button {
      padding: 10px 16px;
      background-color: var(--color-grey-3);
      border-radius: var(--radius-2);
      color: var(--fixed-white);
      font-size: 17px;
    }

    @media only screen and (max-width: 720px) {
      width: 80%;
    }
  }
`;

export const HeaderDashboardStyled = styled.header`
  background-color: var(--color-grey-1);
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    width: 90%;

    h1 {
      color: var(--color-brand-1);
    }

    button {
      padding: 10px 16px;
      background-color: var(--color-grey-3);
      border-radius: var(--radius-2);
      color: var(--fixed-white);
      font-size: 17px;
    }
  }
`;
