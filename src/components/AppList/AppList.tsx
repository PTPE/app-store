import { Application } from "../../types";
import Item from "./_Item";

type Props = {
  appList: Application[];
};

export default function AppList({ appList }: Props) {
  return (
    <div className="flex flex-col divide-y  divide-gray-300">
      {appList.map((app, index) => (
        <Item app={app} key={app.id} ranking={index + 1} />
      ))}
    </div>
  );
}
