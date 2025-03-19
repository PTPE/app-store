import { Application } from "../../types";

type Props = {
  recommandApp: Application;
};

export default function Item({ recommandApp }: Props) {
  return (
    <div className="w-[65px] md:w-[75px] lg:w-[100px] flex flex-col shrink-0 cursor-pointer">
      <a href={recommandApp.link}>
        <div className="w-[65px] md:w-[75px] lg:w-[100px] aspect-square rounded-2xl border-[1px] border-gray-300">
          <img
            loading="lazy"
            src={recommandApp.iconUrl.sm}
            srcSet={`${recommandApp.iconUrl.sm} 640w, ${recommandApp.iconUrl.md} 768w, ${recommandApp.iconUrl.lg} 1024w`}
            sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, 1024px"
            alt={recommandApp.name}
            className="self-center rounded-2xl aspect-square"
          />
        </div>
        <p className="break-all text-ellipsis line-clamp-2 text-sm md:text-md lg:text-lg">
          {recommandApp.name}
        </p>
        <p className="text-xs md:text-sm lg:text-md text-gray-400 text-ellipsis line-clamp-1">
          {recommandApp.category}
        </p>
      </a>
    </div>
  );
}
