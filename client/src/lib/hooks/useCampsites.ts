import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//custom hook to get all campsites
export const useCampsites = () => {
    const { data: campsites, isPending } = useQuery({
        queryKey: ['campsites'],
        queryFn: async () => {
            const response = await axios.get<Campsite[]>('https://localhost:5001/api/campsites');
            return response.data;
        }
    })

    return {
        campsites,
        isPending
    }
}