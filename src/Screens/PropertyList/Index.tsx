import { Table} from "antd";
import  { PropertyList } from "./style";
import MobileTable from "./MobileTable";
import { Container } from "react-bootstrap";
import { adminsData, columns } from "./TableData";

const Index = () => {
  return (
    <>
      <div className="d-md-none">
        <MobileTable
        />
      </div>
      <div className="d-none d-md-block">
        <Container>
          <PropertyList>
            <Table
              pagination={{pageSize:21}}
              columns={columns}
              scroll={{
                x:'auto',
                y:'75vh'
              }}
              dataSource={[...adminsData.map(({title,price,location,propertyType,bed,bath},id)=>(
              {
                id,
                title,
                price,
                location,
                propertyType,
                bed,
                bath
              }
              ))]}
            />
          </PropertyList>
        </Container>

      </div>
    </>
  );
};

export default Index;
