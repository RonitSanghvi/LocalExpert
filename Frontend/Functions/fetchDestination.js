import React,{useEffect, useState} from "react";
import { allDestinations } from "./destination";

export function fetchDestinations( filterFunction, dependencies) {

    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        async function fetchData() {
            await allDestinations()
            .then((res)=>{
              console.log("Destination Fetching Complete ", dependencies)
              setLoading(false);
              setDestinations(res.data.data.slice().reverse());
            })
            .catch((err)=>{
              console.log("ERROR: ", err)
            })
          };
      
        fetchData();
    }, []);

    try {
      const filteredDestinations = filterFunction(destinations);
      return filteredDestinations;
    } catch (err) {
      console.log("ERROR: ", err);
      return [];
    }
}