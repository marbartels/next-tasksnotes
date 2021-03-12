import { useState, useEffect } from 'react';

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal})
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch the data for the resource.')
            }
            return res.json();
        })
        .then(dataIn => {
            setData(dataIn);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('Fetch aborted.');
            } else {
                setError(err.message);
                setIsPending(false);
            }
        });

        setTimeout(() => {
            setIsPending(isPending => {
                 if (isPending) {
                    abortCont.abort();
                    setIsPending(false);
                    setError( Error('Timeout. Request aborted.').message );
                }
                return isPending;
            });
        }, 4000);
        
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;