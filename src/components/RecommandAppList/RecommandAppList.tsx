import { useGetRecommandApps } from "../../hooks/app-queries";
import Item from "./_Item";

type Props = {
  query?: string;
};

export default function RecommandAppList({ query }: Props) {
  const { data: recommandAppList, isLoading } = useGetRecommandApps({ query });

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
