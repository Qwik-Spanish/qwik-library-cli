import { component$, useSignal, useStyles$ } from "@builder.io/qwik";

// Need import from node_modules to add correct styles by default to show map
// change path depending our level component respect node_modules
import leafletStyles from "../node_modules/leaflet/dist/leaflet.css?inline";
import { LeafletMap } from "./components/leaflet-map";
import { LocationsProps } from "./models/location";
export default component$(() => {
  useStyles$(leafletStyles);

  const CITIES: Array<LocationsProps> = [
    {
      name: "Madrid",
      point: [40.4168, -3.7038],
      // Southwest lat, South West Lng, North East lat,  North East lng
      boundaryBox: "40.312815,-3.871165,40.520785,-3.536435",
      zoom: 16,
      marker: true, // show marker or no
    },
    {
      name: "Soraluze",
      point: [43.17478, -2.41172],
      // Southwest lat, South West Lng, North East lat,  North East lng
      boundaryBox:
        "43.14658914559456,-2.4765586853027344,43.202923523094725,-2.3467826843261723",
      zoom: 13,
      marker: true,
    },
  ];

  const currenLocation = useSignal(CITIES[0]);
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Leaflet Map Library Template - By Anartz</title>
      </head>
      <body>
        <h2>Example components</h2>
        <h4>Created by: Anartz Mugika Ledo</h4>
        {CITIES.map((location, index) => {
          return (
            <button
              key={`${index}_${location.name.toLowerCase()}`}
              onClick$={() => (currenLocation.value = CITIES[index])}
            >
              {location.name}
            </button>
          );
        })}
        <LeafletMap location={currenLocation} />
      </body>
    </>
  );
});