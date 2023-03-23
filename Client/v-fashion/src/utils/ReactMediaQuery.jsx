import React, { useState, useEffect } from 'react';


const ReactMediaQuery = (query) => {

    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        
        return () => mediaMatch.removeListener(handler);

    });

  return matches;
}

export default ReactMediaQuery;