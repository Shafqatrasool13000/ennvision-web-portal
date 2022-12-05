import { InputNumber } from "antd";
import flag from "../../assets/icons/ic_flag.svg";
import { CustomPhoneInput } from "./style";

const CustomInputNumber = () => {
  return (
    <CustomPhoneInput>
      <InputNumber
        style={{
          border: "none",
          height: "40px",
          marginBottom: "4px",
        }}
        className="w-100 border-0"
        controls={false}
        name="phone"
        addonBefore={
          <div
            style={{ width: "40px", height: "40px" }}
            className="d-flex align-items-center"
          >
            <img src={flag} alt="flag" className="me-2" />
            <p className="m-0">+1</p>
          </div>
        }
      />
    </CustomPhoneInput>
  );
};

export default CustomInputNumber;
