export interface AppSettings {
  theme: "light" | "dark";
}

export interface GameSettings {
  questionCount: 5 | 10 | 15;
  topic: "*";
  difficulty: "*";
}
