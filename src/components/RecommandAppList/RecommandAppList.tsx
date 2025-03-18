import { useGetRecommandApps } from "../../hooks/app-queries";
import Item from "./_Item";

export default function RecommandAppList() {
  const { data: recommandAppList, isLoading } = useGetRecommandApps();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex gap-5 overflow-auto">
      {recommandAppList?.map((app) => (
        <Item key={app.id} recommandApp={app} />
      ))}
    </div>
  );
}
