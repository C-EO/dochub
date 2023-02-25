const TURBO_TEAM: Record<string, AuthorDetails> = {
  "c-eo": {
    name: "Dennis Sebalemba",
    twitterUsername: "nitehub_org",
    picture: "/images/people/c-eo.jpeg",
  }
};

export type Author = keyof typeof TURBO_TEAM;
export type AuthorDetails = {
  name: string;
  twitterUsername?: string;
  picture: string;
};

export default TURBO_TEAM;
