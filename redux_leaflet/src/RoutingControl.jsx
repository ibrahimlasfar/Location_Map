import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// Function to create routing machine layer
const createRoutineMachineLayer = ({ position, start, end, color }) => {
  const instance = L.Routing.control({
    position,
    waypoints: [
      start,
      end
    ],
    lineOptions: {
      styles: [
        {
          color,
        },
      ],
    },
  });

  return instance;
};

// Create RoutingMachine component using createControlComponent
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

// Export RoutingMachine component
export default RoutingMachine;
