import React, { createContext, useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword = "san francisco") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log("search result", result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log("not found");
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        location,
        error,
        keyword,
        search: onSearch,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
