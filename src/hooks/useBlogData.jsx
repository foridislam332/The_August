import { useQuery } from "@tanstack/react-query";

const useBlogData = () => {
    const { data: blogData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['blogData'],
        queryFn: async () => {
            const res = await fetch('/blog.json');
            const data = await res.json();
            return data;
        },
    });

    return [blogData, loading, refetch];
};

export default useBlogData;