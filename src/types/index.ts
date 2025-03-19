export type Application = {
  ranking?: number;
  link?: string;
  id: string;
  name: string;
  category: string;
  iconUrl: {
    sm: string;
    md: string;
    lg: string;
  };
};

export type ApplicationWithRanking = Application & {
  ranking: number;
};
