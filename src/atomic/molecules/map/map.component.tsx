import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { config } from "../../../config";

mapboxgl.accessToken = config.MAP_API_KEY;

interface ILocation {
  type: string;
  coordinates: number[];
  _id: string;
  description: string;
  day: number;
}

interface IMapProps {
  locations: ILocation[];
}

export const Map: React.FC<IMapProps> = ({ locations }) => {
  useEffect(() => {
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/kevinmcgrady47/ck7ruld102nme1ip1obx3rrbu",
      scrollZoom: false,
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach((loc) => {
      const el = document.createElement("div");
      el.className = "marker";

      new mapboxgl.Marker({
        element: el,
        anchor: "bottom",
      })
        .setLngLat(loc.coordinates as any)
        .addTo(map);

      new mapboxgl.Popup({
        offset: 30,
      })
        .setLngLat(loc.coordinates as any)
        .setHTML(`<p>Day ${loc.day} ${loc.description}</p>`)
        .addTo(map);

      bounds.extend(loc.coordinates as any);
    });

    map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100,
      },
    });
  }, []);

  return (
    <section className="section-map">
      <div id="map"></div>
    </section>
  );
};
