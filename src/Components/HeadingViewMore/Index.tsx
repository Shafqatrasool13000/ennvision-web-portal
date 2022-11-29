import {
  BlackDot,
  TertiraryHeading,
  UnderlineRed,
} from "../../Components/GlobalStyle";
import ViewMore from "../../Components/ViewMoreProperties/Index";

const Index = ({
  title = null,
  listing,
}: {
  title: string | null;
  listing: string;
}) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex flex-column">
          <TertiraryHeading>{title}</TertiraryHeading>
          <div>
            <UnderlineRed />
            <BlackDot />
          </div>
        </div>
        {title && <ViewMore />}
      </div>
    </>
  );
};

export default Index;
