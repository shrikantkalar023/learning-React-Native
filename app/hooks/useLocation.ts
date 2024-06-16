import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { ILocation } from "../interface/location";

const useLocation = () => {
  const [location, setLocation] = useState<ILocation>();

  useEffect(() => {
    (async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      const location = await Location.getLastKnownPositionAsync();
      location &&
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
    })();
  }, []);

  return location;
};

export default useLocation;
