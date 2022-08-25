import type { AppSettings, GameSettings } from "~/types/settings";

import * as Redux from "@reduxjs/toolkit";
import settings from "~/store/settings/actions";

interface State {
  app: AppSettings;
  game: GameSettings;
}

const initialState: State = {
  app: {
    theme: "dark",
  },
  game: {
    questionCount: 5,
    topic: "*",
    difficulty: "*",
  },
};

const reducer = Redux.createReducer(initialState, (builder) => {
  builder
    .addCase(settings.app.update, (state, action) => {
      Object.assign(state.app, action.payload);
    })
    .addCase(settings.app.reset, (state) => {
      Object.assign(state.app, initialState.app);
    })
    .addCase(settings.game.update, (state, action) => {
      Object.assign(state.game, action.payload);
    })
    .addCase(settings.game.reset, (state) => {
      Object.assign(state.game, initialState.game);
    })
    .addCase(settings.reset, (state) => {
      state = initialState;
    });
});

export default reducer;
