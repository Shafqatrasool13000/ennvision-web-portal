import { useNavigate } from "react-router-dom";

const navigate = ({ route }: any) => {
  const routeNavigate = useNavigate();
  return routeNavigate(route);
};

export default navigate;
