import { useInfiniteQuery } from "@tanstack/react-query";
import { getApps, ParamsGetApps } from "../services/app-apis";

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
