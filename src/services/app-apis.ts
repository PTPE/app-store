import axios from "axios";
import formatGetAppsApiRes from "../utils/format-get-apps-api-res";

const BASE_URL = "https://itunes.apple.com/tw/rss";

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export type ParamsGetApps = {
  limit: number;
  page: number;
};

export type Entry = {
  "im:name": {
    label: string;
  };
  "im:image": {
    label: string;
  }[];
  link: {
    attributes?: {
      href: string;
    };
  };
  category: {
    attributes: {
      label: string;
    };
  };
  id: {
    attributes: {
      "im:id": string;
    };
  };
};

export type ResGetApps = {
  data: {
    feed: {
      entry: Entry[];
    };
  };
};

export async function getApps({ limit, page }: ParamsGetApps) {
  const result: ResGetApps = await client(
    `/topfreeapplications/limit=${limit * page}/json`
  );

  const thisPageData = result.data.feed.entry.slice(-limit);

  const formattedRes = formatGetAppsApiRes(thisPageData);

  return { data: formattedRes, page };
}

type ResGetRecommandApps = ResGetApps;

export async function getRecommandApps() {
  const result: ResGetRecommandApps = await client(
    `/topgrossingapplications/limit=10/json`
  );

  const formattedRes = formatGetAppsApiRes(result.data.feed.entry);

  return formattedRes;
}
