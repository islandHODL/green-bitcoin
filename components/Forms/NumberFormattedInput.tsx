import React, { useState } from "react";
import { Box, Input, InputProps, Paragraph } from "theme-ui";
import localNumber from "./parseFormated";

export interface Props extends Omit<InputProps, "onChange" | "value"> {
  onChange: (value: number) => void;
  value: number;
  formatOptions?: Intl.NumberFormatOptions;
}

const NumberFormattedInput: React.FC<Props> = ({
  onChange,
  value,
  formatOptions,
  ...props
}) => {
  const { formatNumber, parseNumber } = localNumber("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...formatOptions,
  });

  const changeHandler: InputProps["onChange"] = (e) => {
    const v = e.currentTarget.value;

    const parseValue = parseFloat(v);
    console.log("onChange", v, parseValue);
    onChange(parseValue);
  };

  const [v, setV] = useState<number | string>(value);

  const [focused, setFocused] = useState(false);

  return (
    <Box sx={{ position: "relative", ...props.sx }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          visibility: focused ? "hidden" : "visible",
          pointerEvents: "none",
          bg: "white",
        }}
      >
        {formatNumber(value)}
      </Box>
      <Input
        {...props}
        sx={props.sx}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={changeHandler}
        value={value}
        type="number"
        // onKeyDown={(e) => {
        //   switch (e.key) {
        //     case "ArrowUp":
        //       onChange((value || 0) + 1);
        //       break;
        //     case "ArrowDown":
        //       onChange((value || 0) - 1);
        //       break;

        //     default:
        //       break;
        //   }
        // }}
      />
    </Box>
  );
};

export default NumberFormattedInput;
