import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getApps, getRecommandApps, ParamsGetApps } from "../services/app-apis";

export function useGetApps(params: ParamsGetApps) {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["apps"],
    queryFn: ({ pageParam = 1 }) => getApps({ ...params, page: pageParam }),
    getNextPageParam: (lastpage) =>
      lastpage.page * params.limit < 100 ? lastpage.page + 1 : undefined,
  });

  return { data, fetchNextPage, hasNextPage };
}

export function useGetRecommandApps() {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getRecommandApps(),
    queryKey: ["recommandApps"],
  });

  return { data, isLoading, error };
}
