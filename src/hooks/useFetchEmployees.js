import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get(
                    "https://randomuser.me/api/?results=15"
                );
                setEmployees(response.data.results);
            } catch (error) {
                setError("Error fetching data");
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees().then().catch(error => console.error(error));
    }, []);

    return { employees, loading, error };
};

export default useFetchEmployees;
