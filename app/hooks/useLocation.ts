import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Ilocation } from "../interface/Ilocation";

const useLocation = () => {
  const [location, setLocation] = useState<Ilocation>();

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
