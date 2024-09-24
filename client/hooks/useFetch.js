import { useState, useEffect } from "react";
import axios from "axios";  


const useFetch = (endpoint, query) => {
    const rapidApi= process.env.EXPO_PUBLIC_RAPID_API_KEY
    console.log('env file',process.env.EXPO_PUBLIC_RAPID_API_KEY)
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
         ...query
        },
        headers: {
          'x-rapidapi-key': rapidApi || '25027f1b7bmsh1a9386e36071708p14e094jsnaf4dcf945f99',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };
    
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            
            setData(response.data.data);
        } catch (error) {
            setError(error);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;

