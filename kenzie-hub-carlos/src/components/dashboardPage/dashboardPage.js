import styled from "styled-components";

export const MainContent = styled.main`
  background-color: var(--color-grey-1);
  width: 100%;
  height: 100%;
  color: var(--fixed-white);
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  section {
    width: 100%;
    border-top: 1px solid var(--color-grey-3);
    border-bottom: 1px solid var(--color-grey-3);
    display: flex;
    justify-content: center;
    div {
      padding: 90px 0;
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-size: 29px;
      }

      p {
        color: var(--color-grey-4);
      }

      @media only screen and (max-width: 400px) {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--gap-8);
        padding: 40px 0;
      }
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--gap-4);

    div {
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;

      button {
        background-color: var(--color-grey-3);
        color: var(--fixed-white);
        font-size: 22px;
        border-radius: var(--radius-2);
        width: 50px;
        height: 50px;
        border: none;

        :hover {
          color: var(--color-brand-1);
        }
      }
    }

    ul {
      background-color: var(--color-grey-2);
      width: 90%;
      padding: 20px;
      border-radius: var(--radius-2);
      display: flex;
      flex-direction: column;
      gap: var(--gap-6);

      @media only screen and (max-width: 450px) {
        width: 100%;
        border-radius: 0px;
        padding: 27px 8px;
      }

      li {
        position: relative;
        z-index: 1;
        cursor: pointer;
        background-color: var(--color-grey-1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px;
        border-radius: var(--radius-2);

        :hover {
          background-color: var(--color-grey-3);
        }

        h3 {
          @media only screen and (max-width: 400px) {
            font-size: 16px;
          }
        }

        div {
          width: max-content;
          margin-top: 0px;

          @media only screen and (max-width: 400px) {
            gap: var(--gap-9);
            font-size: 15px;
          }

          p {
            color: var(--color-grey-4);
            position: relative;
            right: 55px;
          }

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            position: absolute;
            right: 10px;
            z-index: 2;

            @media only screen and (max-width: 400px) {
              width: 40px;
              height: 40px;
            }

            img {
              width: 30px;

              @media only screen and (max-width: 400px) {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
      }
    }
  }
`;
