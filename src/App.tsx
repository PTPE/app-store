import { useState } from "react";
import AppList from "./components/AppList";
import RecommandAppList from "./components/RecommandAppList";
import { useGetApps, useGetRecommandApps } from "./hooks/app-queries";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import Loading from "./components/Loading";

function App() {
  const [query, setQuery] = useState("");

  const { data: recommandAppList, isLoading } = useGetRecommandApps({ query });

  const { data, hasNextPage, fetchNextPage, isFetching } = useGetApps({
    page: 1,
    limit: 10,
    query,
  });

  const { observeNode } = useInfiniteScroll({
    onIntersect: () => hasNextPage && fetchNextPage(),
  });

  const appList = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="flex flex-col">
      {(isLoading || isFetching) && <Loading />}
      <div className="sticky top-0 z-10 py-3 bg-gray-100 w-full text-center border-b-[1px] border-gray-300">
        <input
          type="text"
          placeholder="搜尋"
          className="placeholder:text-center bg-gray-300 rounded-[5px] py-1 px-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <section className="border-b-[1px] border-gray-300 p-3 space-y-2 md:p-6 md:space-y-6 ">
        <h2 className="font-semibold text-2xl">推薦</h2>
        <RecommandAppList recommandAppList={recommandAppList || []} />
      </section>

      <section className="p-2">
        <AppList appList={appList} observeNode={observeNode} />
      </section>
    </div>
  );
}

export default App;
