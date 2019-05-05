import { useContext, useEffect, useState } from "react";
import axios from "axios";

import store from "../../context";
import { darkSkyUrl, openCage, openCageUrl } from "../../constants";

export const useResources = resource => {
  const [resources, setResources] = useState({});
  const context = useContext(store);
  const { onLatLngChange } = context;

  const fetchData = async resource => {
    const { data } = await axios.get(`${ openCageUrl }${ resource }&key=${ openCage }`);
    const { geometry } = data.results[0];
    const weatherForCountry = await axios.get(`${ darkSkyUrl }${ geometry.lat },${ geometry.lng }?units=si`);

    data.weather = weatherForCountry.data.hourly.data[0];
    setResources(data);
    onLatLngChange(geometry);
  };

  useEffect(() => {
    fetchData(resource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resource]);

  return resources;
};
