import { SecondaryHeading, TertiraryHeadingMini } from "../GlobalStyle";
import RedBlackUnderline from "../RedBlackUnderline/RedBlackUnderline";

const Index = ({ heading, sub_heading }: any) => {
  return (
    <>
      <SecondaryHeading className="text-center">{heading}</SecondaryHeading>
      <TertiraryHeadingMini className="text-center">
        {sub_heading}
      </TertiraryHeadingMini>
      <RedBlackUnderline />
    </>
  );
};

export default Index;
