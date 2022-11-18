import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { useMap } from '../../hooks';
import { City, Point } from '../../types/offer';
import { MARKER } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Point[];
  selectedPoint?: number;
}

const defaultCustomIcon = new Icon({
  iconUrl: MARKER.URL_MARKER_DEFAULT,
  iconSize: [MARKER.MARKER_WIDTH, MARKER.MARKER_HEIGHT],
  iconAnchor: [+`${MARKER.MARKER_WIDTH / 2}`, MARKER.MARKER_HEIGHT]
});

const currentCustomIcon = new Icon({
  iconUrl: MARKER.URL_MARKER_CURRENT,
  iconSize: [MARKER.MARKER_WIDTH, MARKER.MARKER_HEIGHT],
  iconAnchor: [+`${MARKER.MARKER_WIDTH / 2}`, MARKER.MARKER_HEIGHT]
});

function Map({ city, points, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point, id) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);

        return () => {
          map.removeLayer(marker);
        };
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      ref={mapRef}
      className="cities__map map"
      style={{ height: '100%' }}
    >
    </section>
  );
}

export default Map;
