import Item from "./_Item";
import { useGetApps } from "../../hooks/app-queries";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

type Props = {
  query?: string;
};

export default function AppList({ query }: Props) {
  const { data, hasNextPage, fetchNextPage } = useGetApps({
    page: 1,
    limit: 10,
    query,
  });

  const { observeNode } = useInfiniteScroll({
    onIntersect: () => hasNextPage && fetchNextPage(),
  });

  const appList = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="flex flex-col divide-y  divide-gray-300">
      {appList.map((app, index) => {
        const isLast5 = appList.length - 5 === index;

        return (
          <Item
            observeNode={isLast5 ? observeNode : null}
            app={app}
            key={app.id}
            ranking={index + 1}
          />
        );
      })}
    </div>
  );
}
