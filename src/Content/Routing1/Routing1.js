import React, { useState, useMemo } from 'react'

export const pagesMapping = { 
  sidebar: "sidebar",
  largeside: "largeside",
  mini: "mini",
  
};

export const RoutingContext = React.createContext({ page: pagesMapping.sidebar });

export default function Router({ children }) {
  let urlPath = window.location.pathname.slice(1).toLowerCase()
  const [page, setPage] = useState(urlPath || pagesMapping.sidebar);

  const value = useMemo(
    () => ({ page, setPage }), 
    [page, setPage]
  );
  
  return (
    <RoutingContext.Provider value={value}>
      {children}
    </RoutingContext.Provider>
  )
}