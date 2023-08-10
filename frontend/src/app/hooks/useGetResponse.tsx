import axios from "axios";
import { useState, useEffect } from "react";

const useGetResponse = (address: string, authToken: string) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        axios({
            method: "get",
            url: address,
            responseType: "json",
            headers: {
                "Authorization": `Bearer ${authToken}`
            }

        })
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [address, authToken]);

    return data;
}

export default useGetResponse;