import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ coordinates, setCoordinates, setBounds, places, onMarkerClick }) => {
  const defaultCoordinates = { lat: 33.996777, lng: 71.529724 };

  console.log('Coordinates:', coordinates);
  console.log('Places:', places);
  console.log(
    'places2',
    places.map((place) => ({
      name: place.name,
      latitude: place.latitude,
      longitude: place.longitude,
    }))
  );

  return (
    <div className="h-[100vh] w-full relative">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDj6oHIfspofGcNUOAGtcpFOgRHOH8CKvE' }}
        center={coordinates || defaultCoordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          if (onMarkerClick) onMarkerClick(child);
        }}
      >
        {places?.map(
          (place, i) =>
            place?.latitude &&
            place?.longitude && (
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                lat={place?.latitude}
                lng={place?.longitude}
                key={i}
              >
                {/* Marker for mobile */}
                <div className="md:hidden text-blue-600 text-3xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>

                {/* Marker with details for desktop */}
                <div className="hidden md:block bg-white shadow-md rounded-lg p-2 max-w-xs">
                  <h4 className="text-sm font-semibold">{place.name}</h4>
                  <img
                    className="w-full h-24 object-cover rounded-md"
                    src={
                      place.photo?.images?.large?.url ||
                      'https://via.placeholder.com/150'
                    }
                    alt={place.name}
                  />
                  <div className="flex items-center mt-1">
                    <div className="text-yellow-400 text-sm">
                      {'⭐'.repeat(Number(place.rating) || 0)}
                    </div>
                    <span className="ml-2 text-gray-500 text-xs">
                      ({place.rating || 0})
                    </span>
                  </div>
                </div>
              </div>
            )
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
