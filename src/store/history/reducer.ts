import type { Game } from "~/types/games";

import * as Redux from "@reduxjs/toolkit";
import history from "~/store/history/actions";

interface State {
  games: { [key: string]: Game };
}

const initialState: State = {
  games: {},
};

const reducer = Redux.createReducer(initialState, (builder) => {
  builder
    .addCase(history.log, (state, action) => {
      Object.assign(state.games, {
        [action.payload.id]: action.payload,
      });
    })
    .addCase(history.clear, (state) => {
      state.games = initialState.games;
    });
});

export default reducer;
