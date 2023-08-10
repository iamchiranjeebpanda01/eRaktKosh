import {useEffect} from 'react';
import axios from 'axios';

const usePostRequest = (address: string, authToken: string, data: JSON) => {
    useEffect(() => {
        axios({
            method: "post",
            url: address,
            data: data,
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        })
    }, [address, authToken, data])
}

export default usePostRequest;