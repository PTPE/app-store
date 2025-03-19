import { Application } from "../../types";
import Item from "./_Item";

type Props = {
  recommandAppList: Application[];
};

export default function RecommandAppList({ recommandAppList }: Props) {
  return (
    <div className="flex gap-5 overflow-auto min-h-[120px] md:min-h-[135px] lg:min-h-[176px]">
      {recommandAppList?.map((app) => (
        <Item key={app.id} recommandApp={app} />
      ))}
    </div>
  );
}
