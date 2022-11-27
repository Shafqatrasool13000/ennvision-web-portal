import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapStyled from "./style";
import { MapMeasurements } from "../../utils/types";

const Map: React.FC<MapMeasurements> = ({ width, height }) => {
  return (
    <MapStyled width={width} height={height}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </MapStyled>
  );
};

export default Map;
