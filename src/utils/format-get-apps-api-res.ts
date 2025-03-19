import { ResGetApps, ResGetRecommandApps } from "../services/app-apis";
import { Application, ApplicationWithRanking } from "../types";

export function formatGetAppsApiRes({
  res,
  query,
  page,
}: {
  res: ResGetApps;
  query: string;
  page: number;
}): ApplicationWithRanking[] {
  return res.data.feed.entry
    .map((app, index) => ({
      ...app,
      ranking: index + 1,
    }))
    .filter((app) => {
      if (!query) return true;
      return (
        app["im:name"].label.includes(query) ||
        app.summary.label.includes(query) ||
        app.title.label.includes(query)
      );
    })
    .slice((page - 1) * 10, page * 10)
    .map((app) => ({
      ranking: app.ranking,
      id: app.id.attributes["im:id"],
      name: app["im:name"].label,
      category: app.category.attributes.label,
      iconUrl: {
        sm: app["im:image"][0].label,
        md: app["im:image"][1].label,
        lg: app["im:image"][2].label,
      },
    }));
}

export function formatGetRecommandAppsApiRes({
  res,
  query,
}: {
  res: ResGetRecommandApps;
  query: string;
}): Application[] {
  return res.data.feed.entry

    .filter((app) => {
      if (!query) return true;
      return (
        app["im:name"].label.includes(query) ||
        app.summary.label.includes(query) ||
        app.title.label.includes(query)
      );
    })
    .map((app) => ({
      id: app.id.attributes["im:id"],
      name: app["im:name"].label,
      category: app.category.attributes.label,
      iconUrl: {
        sm: app["im:image"][0].label,
        md: app["im:image"][1].label,
        lg: app["im:image"][2].label,
      },
    }));
}
