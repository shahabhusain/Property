"use client"

import React, { useEffect, useState } from "react";
import Location from "@/app/components/map/Location";
import Overview from "@/app/components/map/Overview";
import Projects from "@/app/components/map/Projects";
import Map from '@/app/components/map/Map'
import List from '@/app/components/map/List'
import axios from 'axios';

const Url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const getPlacesDat = async (sw, ne) => {
  if (!sw || !ne) {
    console.error('Error: Bounds are not defined.');
    return [];
  }

  try {
    const { data: { data } } = await axios.get(Url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': 'e0a33f598fmsh1c199826554fdf6p12d2f8jsnf6a1d930a6ab',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching places data:', error);
    return [];
  }
};

const Map1 = () => {
    const [open, setOpen] = useState(1)
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
  
    // Get user's current location
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoordinates({ lat: latitude, lng: longitude });
        },
        (error) => console.error('Error fetching location:', error)
      );
    }, []);
  
    // Fetch places when bounds change
    useEffect(() => {
      if (bounds?.sw && bounds?.ne) { 
        getPlacesDat(bounds.sw, bounds.ne)
          .then((data) => {
            console.log(data);
            setPlaces(data || []); // Ensure no null data is set
          })
          .catch((error) => {
            console.error('Error fetching places:', error);
          });
      }
    }, [bounds]);
  return (
    <div className=" relative">
      <div className=" mt-32">
      <Map
            places={places}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
      </div>

      <div className="bg-[#F7F7F7] w-[400px] py-4 px-3 absolute top-[1rem] h-[800px] overflow-y-auto left-3"
      >
         <h1>Dubai</h1>
         <div className=" bg-white py-2 px-3 flex items-center justify-between rounded-md" >
            <button onClick={() => setOpen(1)} className={`${open === 1 ? " py-1 px-2 text-white bg-[#AE8E50] rounded-sm" : ""}`}>Overview</button>
            <button onClick={() => setOpen(2)} className={`${open === 2 ? " py-1 px-2 text-white bg-[#AE8E50] rounded-sm" : ""}`}>Locations</button>
            <button onClick={() => setOpen(3)} className={`${open === 3 ? " py-1 px-2 text-white bg-[#AE8E50] rounded-sm" : ""}`}>Project</button>
         </div>
         {
            open === 1 ? <><Overview /></> : open === 2 ? <><Location /></> : open === 3 ? <> {
              places?.map((place, i)=>(
                  <div key={i}>
                   <List place={place} />
                  </div>
              ))
          }</> : null
         }
                
      </div>
    </div>
  );
};

export default Map1;
