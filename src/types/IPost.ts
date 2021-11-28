import { Itag } from "./Itag";

export type IPost = {
  title: string;
  date: string;
  description: string;
  tags?: Itag[];
};
