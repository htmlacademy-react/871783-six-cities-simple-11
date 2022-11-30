import { useRef, useEffect } from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import { useMap } from '../../hooks';
import { Location, Point } from '../../types/offer';
import { MARKER } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: Location;
  points: Point[];
  selectedPoint?: number | undefined;
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
  // const offerInfo = useAppSelector(getOfferInfo);

  useEffect(() => {
    if (map) {
        map.eachLayer((layer) => {
          if (layer instanceof Marker) {
            layer.remove();
          }
        });

        const markersLayer = new LayerGroup();
        points.forEach((point, id) => {
          const marker = new Marker({
            lat: point.latitude,
            lng: point.longitude
          });

          marker
            .setIcon(
              // id === selectedPoint
              selectedPoint !== undefined && id === selectedPoint
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markersLayer);
        });

      map.addLayer(markersLayer);
      // points.forEach((point, id) => {
      //   const marker = new Marker({
      //     lat: point.latitude,
      //     lng: point.longitude
      //   });
      //
      //   marker
      //     .setIcon(
      //       id === selectedPoint
      //         ? currentCustomIcon
      //         : defaultCustomIcon
      //     )
      //     .addTo(map);
      // });
      // if (offerInfo && id) {
      //   const markerRoomInfo = new Marker({
      //     lat: offerInfo.location.latitude,
      //     lng: offerInfo.location.longitude
      //   });
      //
      //   markerRoomInfo
      //     .setIcon(
      //       id && String(offerInfo.id) === id
      //         ? currentCustomIcon
      //         : defaultCustomIcon
      //     )
      //     .addTo(map);
      // }

    }
  }, [map, points, selectedPoint]);

  return (
    <section
      ref={ mapRef }
      className="cities__map map"
      style={{ height: '100%' }}
    >
    </section>
  );
}

export default Map;
