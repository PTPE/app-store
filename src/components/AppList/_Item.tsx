import { useEffect, useRef, useState } from "react";
import { Application } from "../../types";

type Props = {
  app: Application;
};
export default function Item({ app }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <a href={app.link}>
      <div
        ref={itemRef}
        className={`shrink-0 flex items-center gap-2 py-3 transition-all duration-500 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="px-2 text-gray-400">{app.ranking}</div>
        <div className="relative">
          <img
            loading="lazy"
            src={app.iconUrl.sm}
            srcSet={`${app.iconUrl.sm} 640w, ${app.iconUrl.md} 768w, ${app.iconUrl.lg} 1024w`}
            sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, 1024px"
            alt={app.name}
            className="w-[60px] md:w-[75px] lg:w-[100px] self-center rounded-full border-[1px] border-gray-300 aspect-square"
          />
        </div>

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
