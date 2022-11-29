import { HeadbarStyled } from "./style";

const Headbar = ({ title, icon = null, rightText = null }: any) => {
  return (
    <HeadbarStyled>
      <p className="title">{title}</p>
      {icon && <img src={icon} alt="" />}
      {rightText && <p className="title">{rightText}</p>}
    </HeadbarStyled>
  );
};

export default Headbar;
