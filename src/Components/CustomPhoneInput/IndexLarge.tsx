import React from "react";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import { PhoneLargeInputStyle } from "./style";

const PhoneLargeInput = () => {
  const [value, setValue] = React.useState({ short: "US" });

  return (
    <PhoneLargeInputStyle>
      <ConfigProvider>
        <CountryPhoneInput
          value={value}
          placeholder="(617) 397 - 8483"
          onChange={(v: any) => {
            setValue(v);
          }}
          className="your-custom-class w-100"
        />
      </ConfigProvider>
    </PhoneLargeInputStyle>
  );
};

export default PhoneLargeInput;
