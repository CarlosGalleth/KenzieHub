import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 
:root {
  --color-brand-1: #FF577F;
  --color-brand-1-focus: #FF427F;
  --color-brand-1-disabled: #59323F;
  --color-grey-1: #121214;
  --color-grey-2:#212529;
  --color-grey-3: #343B41;
  --color-grey-4: #868E96;
  --fixed-white: white;
  --success: #3FE864;
  --failed: #E83F5B;

  --gap-1: 64px;
  --gap-2: 56px;
  --gap-3: 48px;
  --gap-4: 40px;
  --gap-5: 32px;
  --gap-6: 24px;
  --gap-7: 16px;
  --gap-8: 12px;
  --gap-9: 08px;
  --gap-10: 4px;

  --radius-1: 8px;
  --radius-2: 6px;
  --radius-3: 4px;
  --radius-4: 2px;
}

body {
  font-family: "Inter";
  background-color: var(--color-grey-1);
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
  font-family: "Inter";
}
input, select {
  font-family: "Inter";
  padding-left: 15px;
}
label {
  width: max-content;
}
`;
