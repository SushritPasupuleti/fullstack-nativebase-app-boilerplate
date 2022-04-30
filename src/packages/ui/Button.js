import * as React from "react";
import { Button as NBButton, Box } from "native-base";

export const Button = () => {
  return (
    <Box alignItems="center">
      <NBButton
        onPress={() => console.log("boop")}
      >
        Boop
      </NBButton>
    </Box>
  );
};
