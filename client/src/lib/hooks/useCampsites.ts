import { useQuery } from "@tanstack/react-query";
import agent from "../api/agent";

//custom hook to get all campsites
export const useCampsites = () => {
    const { data: campsites, isPending } = useQuery({
        queryKey: ['campsites'],
        queryFn: async () => {
            const response = await agent.get<Campsite[]>('/campsites');
            return response.data;
        }
    })

    return {
        campsites,
        isPending
    }
}