import { Itag } from "../../types/Itag";
import { IRepository } from "../../types/IRepository";
import { IPost } from "../../types/IPost";

export const tags: Itag[] = [
  { name: "Javascript" },
  { name: "ReactJs" },
  { name: "NodeJs" },
  { name: "Git" },
  { name: "Github" },
  { name: "Html" },
  { name: "Css" },
  { name: "Elixir" },
  { name: "React Native" },
];

export const Repository: IRepository[] = [
  {
    title: "Cleanarchitecture_goLang",
    description: "Simple architecture",
    star: 8,
    fork: 20,
    stack: "Javascript",
  },
  {
    title: "goLang",
    description: "Pratices",
    star: 10,
    fork: 100,
    stack: "Go",
  },
];

// POST Data

export const PostTag: Itag[] = [
  { name: "#react-native" },
  { name: "#genimotion" },
  { name: "#genimotion" },
  { name: "#genimotion" },
];

export const Post: IPost[] = [
  {
    title: "Erro adb devices no Genymotion e Android Studio (React Native)",
    date: "2 anos atrás",
    description:
      "Erro adb devices no Genymotion e Android Studio (React Native)",
    tags: PostTag,
  },
];
