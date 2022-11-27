import styled from "styled-components";
import { MapMeasurements } from "../../utils/types";

const MapStyled = styled.div`
  #map {
    width: ${(props: MapMeasurements) => props.width} !important;
    height: ${(props: MapMeasurements) => props.height} !important;
  }
`;

export default MapStyled;
