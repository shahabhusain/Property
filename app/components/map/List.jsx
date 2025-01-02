import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';  // Import the location icon from react-icons
import { FiPhone } from 'react-icons/fi';  // Import the phone icon from react-icons

const PlaceDetails = ({ place}) => {

  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'})` }}>
      </div>
      <div className="p-4 overflow-y-auto max-h-[calc(100vh-20rem)]"> {/* Adjusting the max-height to make it scrollable */}
        <h5 className="text-xl font-semibold">{place.name}</h5>
        <div className="flex justify-between my-2">
          <div className="flex items-center">
            <span className="mr-2">⭐</span>
            <span>{Number(place.rating)}</span>
          </div>
          <span>{place.num_reviews} review{place.num_reviews > 1 && 's'}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Price</span>
          <span>{place.price_level}</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="font-semibold">Ranking</span>
          <span>{place.ranking}</span>
        </div>
        {place?.awards?.map((award) => (
          <div className="flex justify-between my-2 items-center">
            <Image width={16} height={16} src={award.images.small} alt={award.display_name} className="w-16 h-16 object-contain" />
            <span className="text-sm text-gray-600">{award.display_name}</span>
          </div>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <span key={name} className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mr-2 mb-2">{name}</span>
        ))}
        {place.address && (
          <div className="flex items-center mt-2 text-gray-600 text-sm">
            <FaMapMarkerAlt className="mr-2" />
            <span>{place.address}</span>
          </div>
        )}
        {place.phone && (
          <div className="flex items-center mt-2 text-gray-600 text-sm">
            <FiPhone className="mr-2" />
            <span>{place.phone}</span>
          </div>
        )}
      </div>
      <div className="flex justify-between p-4">
        <button className="text-blue-600 text-sm font-medium" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </button>
        <button className="text-blue-600 text-sm font-medium" onClick={() => window.open(place.website, '_blank')}>
          Website
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;
