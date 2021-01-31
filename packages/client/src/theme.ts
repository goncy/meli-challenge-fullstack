import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: {
      ...theme.colors.yellow,
      400: "#FFF159",
    },
  },
});
