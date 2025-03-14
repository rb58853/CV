import { useState, useEffect } from 'react';
import axios from 'axios';

export function AssistantData() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    'http://77.237.243.163:8001/my-keys/api/health',
                    // 'http://77.237.243.163:8001/my-keys/api/get/data/assistant',
                    { headers: { 'Content-Type': 'application/json' } }
                );
                setData(response.data);
            } catch (err) {
                console.error("Error fetching data:", err.message);
                setError(err.message);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            {data && <div>{JSON.stringify(data)}</div>}
            {error && <div>Error: {error}</div>}
        </>
    );
}
