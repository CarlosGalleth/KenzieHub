import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--fixed-white);
  div {
    display: flex;
    flex-direction: column;
    width: 30%;
    header {
      width: 100%;
      padding: 20px;
      background-color: var(--color-grey-3);
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px 8px 0 0;

      h3 {
        font-size: 21px;
      }

      button {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    div {
      width: 100%;
      background-color: var(--color-grey-2);
      padding: 20px;
      border-radius: 0 0 8px 8px;
      display: flex;
      flex-direction: column;
      gap: var(--gap-6);

      div {
        padding: 0;
        display: flex;
        gap: var(--gap-7);
        flex-direction: column;

        label {
          font-size: 19px;
        }

        input,
        select {
          height: 60px;
          font-size: 18px;
          background-color: var(--color-grey-3);
          border: none;
          border-radius: var(--radius-1);
          color: var(--color-grey-4);
        }
      }

      button {
        height: 60px;
        background-color: var(--color-brand-1);
        border-radius: var(--radius-1);
        color: var(--fixed-white);
        font-size: 18px;
      }
    }
  }
`;
