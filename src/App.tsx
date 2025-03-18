import AppList from "./components/AppList";
import RecommandAppList from "./components/RecommandAppList";

function App() {
  return (
    <div className="flex flex-col">
      <div className="py-3 bg-gray-100 w-full text-center border-b-[1px] border-gray-300">
        <input
          type="text"
          placeholder="搜尋"
          className="placeholder:text-center bg-gray-300 rounded-[5px] py-1 px-2"
        />
      </div>

      <section className="border-b-[1px] border-gray-300 p-2 space-y-2">
        <h2 className="font-semibold text-2xl">推薦</h2>
        <RecommandAppList />
      </section>

      <section className="p-2">
        <AppList />
      </section>
    </div>
  );
}

export default App;
