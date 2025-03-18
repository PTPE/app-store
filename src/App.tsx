import { useState } from "react";
import AppList from "./components/AppList";
import RecommandAppList from "./components/RecommandAppList";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col">
      <div className="py-3 bg-gray-100 w-full text-center border-b-[1px] border-gray-300">
        <input
          type="text"
          placeholder="搜尋"
          className="placeholder:text-center bg-gray-300 rounded-[5px] py-1 px-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <section className="border-b-[1px] border-gray-300 p-2 space-y-2">
        <h2 className="font-semibold text-2xl">推薦</h2>
        <RecommandAppList query={query} />
      </section>

      <section className="p-2">
        <AppList query={query} />
      </section>
    </div>
  );
}

export default App;
