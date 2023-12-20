import { useState, useEffect } from 'react';
import api from "../lib/http";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        api
            .get(url)
            .then((response) => {
                setData(response.data);
            }).catch((err) => {
            setError({
                errorMessage: err.message,
                errorStatus: err.response.status
            })
            if (err.response.status === 403){
                return window.location.href = '/logIn';
                // window.localStorage.clear();
                // console.log('перенаправлення на стрінк входу')
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [url]);
    return { data, loading, error }
}
export default useFetch;