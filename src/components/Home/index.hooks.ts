import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BASE_API_URL, ENDPOINT } from "../../constant/apiUrls";
import { DestinationResponse } from "./index.types";

const useHome = () => {
    const navigate = useNavigate();
    const { DOMESTIC_DESTINATION } = ENDPOINT;
    const [ search, setSearch ] = useState<string>("");
    const { data: destination, isFetching: isLoading, refetch } = useQuery<DestinationResponse>({
        enabled: false,
        queryKey: ['searchDestination'],
        queryFn: async () => {
            const response = await fetch(
                `${BASE_API_URL}${DOMESTIC_DESTINATION}?search=${search}&limit=10&offset=0`,
                {
                    headers: {
                        "key": import.meta.env.VITE_RAJAONGKIR_API_KEY,
                        "Content-Type": "application/json",
                    }
                }
            )
            return await response.json()
        },
    })

    const handleSearch = () => {
        if (!!search) {
            refetch();
        }
    }

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/login');
    }

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [navigate]);
    return {
        destination,
        isLoading,
        setSearch,
        handleSearch,
        handleLogOut
    }
}

export default useHome;