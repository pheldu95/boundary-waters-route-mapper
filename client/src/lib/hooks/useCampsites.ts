import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

//custom hook to get all campsites
//and do other CRUD stuff to campsites
export const useCampsites = () => {
    const queryClient = useQueryClient();

    const { data: campsites, isPending } = useQuery({
        queryKey: ['campsites'],
        queryFn: async () => {
            const response = await agent.get<Campsite[]>('/campsites');
            return response.data;
        }
    })

    const updateCampsite = useMutation({
        mutationFn: async (campsite: Campsite) => {
            await agent.put('/campsites', campsite)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['campsites']
            })
        }
    })

    const createCampsite = useMutation({
        mutationFn: async (campsite: Campsite) => {
            await agent.post('/campsites', campsite)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['campsites']
            })
        }
    })

    return {
        campsites,
        isPending,
        updateCampsite,
        createCampsite
    }
}