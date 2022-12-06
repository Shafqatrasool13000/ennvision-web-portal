import { Collapse } from "antd";
import { ResourcesCatagoryStyle } from "./style";

const { Panel } = Collapse;

const ResourcesCategory = () => {
  const resoucesCatagories = [
    "Blog",
    "Business",
    "Creativity",
    "Photography",
    "Post Format",
  ];
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <ResourcesCatagoryStyle>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={onChange}
        expandIconPosition="end"
      >
        {resoucesCatagories.map((title, index) => (
          <Panel header={title} key={index}>
            <div className="mt-3">{text}</div>
          </Panel>
        ))}
      </Collapse>
    </ResourcesCatagoryStyle>
  );
};

export default ResourcesCategory;
