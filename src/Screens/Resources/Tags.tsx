import CustomButton from "../../Components/CustomButton/CustomButton";
import { ResourcesTagsStyle } from "./style";

const ResourcesTags = () => {
  const resourceTags = [
    "DESIGNING",
    "ECOMMERCE",
    "KNOWLEDGE",
    "LOGO",
    "MARKETING",
    "PLANNING",
    "NEWS",
    "PACKAGING",
    "PLANNING",
  ];
  return (
    <ResourcesTagsStyle>
      {resourceTags.map((title, index) => (
        <CustomButton
          key={index}
          bgcolor="transparent"
          color="black"
          padding="6px"
          width="100%"
          type="submit"
          title={title}
          margin="auto"
          fontSize="12px"
          fontFamily="EnnVisionsMedium"
        />
      ))}
    </ResourcesTagsStyle>
  );
};

export default ResourcesTags;
