import axios from "axios";
import {
  formatGetAppsApiRes,
  formatGetRecommandAppsApiRes,
} from "../utils/format-get-apps-api-res";

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
  query?: string;
};

export type Entry = {
  "im:name": {
    label: string;
  };
  "im:image": {
    label: string;
  }[];
  summary: {
    label: string;
  };
  title: {
    label: string;
  };

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

export async function getApps({ page, query = "" }: ParamsGetApps) {
  const result: ResGetApps = await client(
    `/topfreeapplications/limit=100/json`
  );

  const searchedResult = result.data.feed.entry.filter((entry) => {
    if (!query) return true;
    return (
      entry["im:name"].label.includes(query) ||
      entry.summary.label.includes(query) ||
      entry.title.label.includes(query)
    );
  });

  const formattedData = formatGetAppsApiRes({ res: result, query, page });

  return {
    data: formattedData,
    page,
    totalPage: Math.ceil(searchedResult.length / 10),
  };
}

export type ResGetRecommandApps = ResGetApps;

export type ParamsGetRecommandApps = {
  query?: string;
};

export async function getRecommandApps({ query = "" }: ParamsGetRecommandApps) {
  const res: ResGetRecommandApps = await client(
    `/topgrossingapplications/limit=10/json`
  );

  const formattedData = formatGetRecommandAppsApiRes({ res, query });

  return formattedData;
}
