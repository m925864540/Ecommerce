import { css } from "styled-components";

export const mobileDevice = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};