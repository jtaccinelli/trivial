import type { AppSettings, GameSettings } from "~/types/settings";

import * as Redux from "@reduxjs/toolkit";

const settings = {
  app: {
    update: Redux.createAction<AppSettings>("settings/app/update"),
    reset: Redux.createAction("settings/app/reset"),
  },
  game: {
    update: Redux.createAction<GameSettings>("settings/game/update"),
    reset: Redux.createAction("settings/game/reset"),
  },
  reset: Redux.createAction("settings/reset"),
};

export default settings;
