import { HeadbarStyled } from "./style";

type HeadbarProps = {
  title: string;
  icon?: string;
  rightText?: string;
};
const Headbar: React.FC<HeadbarProps> = ({
  title,
  icon = null,
  rightText = null,
}: any) => {
  return (
    <HeadbarStyled>
      <p className="title">{title}</p>
      {icon && <img src={icon} alt="icon" />}
      {rightText && <p className="title">{rightText}</p>}
    </HeadbarStyled>
  );
};

export default Headbar;
