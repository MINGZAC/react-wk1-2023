import { useQuery } from '@tanstack/react-query'
import { getImages } from "../api";

export const useImages = () => {
    const{data , isLoading} = useQuery( [],getImages)
    return {data , isLoading};
};