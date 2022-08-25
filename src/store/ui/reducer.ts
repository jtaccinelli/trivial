import * as Redux from "@reduxjs/toolkit";

import ui from "~/store/ui/actions";

interface State {
  settings: {
    app: boolean;
    game: boolean;
  };
  help: boolean;
  loader: boolean;
}

const initialState: State = {
  settings: {
    app: false,
    game: false,
  },
  help: false,
  loader: false,
};

const reducer = Redux.createReducer(initialState, (builder) => {
  builder
    .addCase(ui.settings.app.show, (state) => {
      state.settings.app = true;
    })
    .addCase(ui.settings.app.hide, (state) => {
      state.settings.app = false;
    })
    .addCase(ui.settings.game.show, (state) => {
      state.settings.game = true;
    })
    .addCase(ui.settings.game.hide, (state) => {
      state.settings.game = false;
    })
    .addCase(ui.help.show, (state) => {
      state.help = true;
    })
    .addCase(ui.help.hide, (state) => {
      state.help = false;
    })
    .addCase(ui.loader.show, (state) => {
      state.loader = true;
    })
    .addCase(ui.loader.hide, (state) => {
      state.loader = false;
    })
    .addCase(ui.reset, (state) => {
      state = initialState;
    });
});

export default reducer;
