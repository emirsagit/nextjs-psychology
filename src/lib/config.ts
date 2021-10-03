import config from "../../config.json";

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly instagram_account: string;
  readonly youtube_account: string;
  readonly facebook_account: string;
  readonly email: string;
  readonly phone: string;
  readonly author: string;
};

export default config as Config;
