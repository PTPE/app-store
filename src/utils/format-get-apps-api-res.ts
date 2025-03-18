import { Entry } from "../services/app-apis";
import { Application } from "../types";

export default function formatGetAppsApiRes(res: Entry[]): Application[] {
  return res.map((app) => ({
    id: app.id.attributes["im:id"],
    name: app["im:name"].label,
    iconUrl: {
      sm: app["im:image"][0].label,
      md: app["im:image"][1].label,
      lg: app["im:image"][2].label,
    },
    link: app.link.attributes?.href,
    category: app.category.attributes.label,
  })) as Application[];
}
