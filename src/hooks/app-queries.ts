import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getApps,
  getRecommandApps,
  ParamsGetApps,
  ParamsGetRecommandApps,
} from "../services/app-apis";

export function useGetApps(params: ParamsGetApps) {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["apps", params],
    queryFn: ({ pageParam = 1 }) => getApps({ ...params, page: pageParam }),
    getNextPageParam: (lastpage) =>
      lastpage.page < lastpage.totalPage ? lastpage.page + 1 : undefined,
  });

  return { data, fetchNextPage, hasNextPage, isFetching };
}

export function useGetRecommandApps(params: ParamsGetRecommandApps = {}) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getRecommandApps(params),
    queryKey: ["recommandApps", params],
  });

  return { data, isLoading, error };
}
