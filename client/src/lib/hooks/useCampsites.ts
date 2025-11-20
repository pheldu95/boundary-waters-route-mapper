import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

//custom hook to get all campsites
//and do other CRUD stuff to campsites
//id is an optional argument. So we can use it for get one campsite.
export const useCampsites = (id?: string) => {
    const queryClient = useQueryClient();

    const { data: campsites, isPending } = useQuery({
        queryKey: ['campsites'],
        queryFn: async () => {
            const response = await agent.get<Campsite[]>('/campsites');
            return response.data;
        }
    })

    const { data: campsite, isLoading: isLoadingCampsite } = useQuery({
        queryKey: ['campsites', id],
        queryFn: async () => {
            const response = await agent.get<Campsite>(`/campsites/${id}`)
            return response.data;
        },
        enabled: !!id //this means the function will only execute if we have an id
    });

    const updateCampsite = useMutation({
        mutationFn: async (campsite: Campsite) => {
            await agent.put('/campsites', campsite)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['campsites']
            })
        }
    });

    const createCampsite = useMutation({
        mutationFn: async (campsite: Campsite) => {
            await agent.post('/campsites', campsite)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['campsites']
            })
        }
    });

    const deleteCampsite = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete(`/campsites/${id}`)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['campsites']
            })
        }
    });

    return {
        campsites,
        isPending,
        updateCampsite,
        createCampsite,
        deleteCampsite,
        campsite,
        isLoadingCampsite
    }
}