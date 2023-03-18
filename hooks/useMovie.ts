import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovie = (id?: string) => {
  console.log("🚀 ~ file: useMovie.ts:5 ~ useMovie ~ id:", id);
  const { error, data, isLoading } = useSWR(id ? `/api/movies/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useMovie;
