import { useNavigate } from "react-router-dom";

const navigate = ({ route }: any) => {
  console.log({ route });
  const routeNavigate = useNavigate();
  return routeNavigate(route);
};

export default navigate;
