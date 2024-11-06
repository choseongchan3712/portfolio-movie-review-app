import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

interface PaddingStyle {
  pcPadding: string;
  buttonPadding: string;
  subButtonPadding: string;
};

interface ColorStyle {
  mainColor: string;
  pointColor: string;
  subFontColor: string;
  buttonBasicColor: string;
  buttonHoverColor: string;
  subButtonColor: string;
  bgColor:string;
}

interface FontSize {
  pcLarge: string;
  pcHeadline: string;
  pcTitle: string;
  pcLabel: string;
}

interface FontWeight {
  pcbold: string;
  pcBasic: string;
}

export const paddingStyle: PaddingStyle = {
  pcPadding: "40px",
  buttonPadding: "10px 15px",
  subButtonPadding: "8px 8px",
};

export const colorStyle: ColorStyle = {
  mainColor: "#fff",
  pointColor: "#df1560",
  subFontColor: "#afafaf",
  buttonBasicColor: "#1c2024",
  buttonHoverColor: "#33363a",
  subButtonColor: "#1a1a1a",
  bgColor: "#000",
};

export const fontSize: FontSize = {
  pcLarge: "62px",
  pcHeadline: "30px",
  pcTitle: "18px",
  pcLabel: "15px",
};

export const fontweight: FontWeight = {
  pcbold: "900",
  pcBasic: "700",
};

export const GlobalStyled = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

img {
  width: 100%;
  display: block;
}

body {
  background-color: ${colorStyle.bgColor};
  color: ${colorStyle.mainColor};
}

a {
  text-decoration: none;
}
`;