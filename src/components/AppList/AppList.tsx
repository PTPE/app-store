import Item from "./_Item";
import { ApplicationWithRanking } from "../../types";

type Props = {
  appList: ApplicationWithRanking[];
  observeNode: (node: HTMLDivElement) => void;
};

export default function AppList({ appList, observeNode }: Props) {
  return (
    <div className="flex flex-col divide-y  divide-gray-300">
      {appList.map((app, index) => {
        const isLast5 = appList.length - 5 === index;

        return (
          <div ref={isLast5 ? observeNode : null} key={app.id}>
            <Item app={app} />
          </div>
        );
      })}
    </div>
  );
}
