import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useAxiosGet(url) {
    const [requests, setRequests] = useState({
        loading: false,
        data: null,
        error: null, // Changed from `false` to store actual error message
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const source = axios.CancelToken.source(); // Create a cancel token

        setRequests({
            loading: true,
            data: null,
            error: null, // Reset to null at the start
        });

        axios.get(url, { cancelToken: source.token })
            .then(response => {
                setRequests({
                    loading: false,
                    data: response.data,
                    error: null,
                });
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    setRequests({
                        loading: false,
                        data: null,
                        error: error.message || 'An error occurred',
                    });
                }
            });

        // Cleanup function to cancel the request on component unmount
        return () => {
            source.cancel('Component unmounted or URL changed');
        };
    }, [url]);

    return requests;
}
