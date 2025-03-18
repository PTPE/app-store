import { Application } from "../../types";

type Props = {
  ranking: number;
  app: Application;
  observeNode: ((node: HTMLElement | null) => void) | null;
};
export default function Item({ observeNode, app, ranking }: Props) {
  return (
    <a href={app.link} ref={observeNode}>
      <div className="shrink-0 flex items-center gap-2 py-3">
        <div className="px-2 text-gray-400">{ranking}</div>
        <img
          src={app.iconUrl.sm}
          srcSet={`${app.iconUrl.sm} 640w, ${app.iconUrl.md} 768w, ${app.iconUrl.lg} 1024w`}
          sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, 1024px"
          alt={app.name}
          className="w-[60px] md:w-[75px] lg:w-[100px] self-center rounded-full border-[1px] border-gray-300 aspect-square"
        />

        <div className="flex flex-col">
          <p className="break-all text-ellipsis line-clamp-2 text-sm md:text-md lg:text-lg">
            {app.name}
          </p>
          <p className="text-xs md:text-sm lg:text-md text-gray-400 text-ellipsis line-clamp-1">
            {app.category}
          </p>
        </div>
      </div>
    </a>
  );
}
