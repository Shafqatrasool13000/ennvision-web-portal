import { useState } from "react";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import { PhoneInputStyle } from "./style";

const PhoneInput = () => {
  const [value, setValue] = useState({ short: "US" });

  return (
    <PhoneInputStyle>
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
    </PhoneInputStyle>
  );
};

export default PhoneInput;
