import * as Redux from "@reduxjs/toolkit";

const ui = {
  settings: {
    app: {
      show: Redux.createAction("ui/settings/app/show"),
      hide: Redux.createAction("ui/settings/app/hide"),
    },
    game: {
      show: Redux.createAction("ui/settings/game/show"),
      hide: Redux.createAction("ui/settings/game/hide"),
    },
  },
  help: {
    show: Redux.createAction("ui/help/show"),
    hide: Redux.createAction("ui/help/hide"),
  },
  loader: {
    show: Redux.createAction("ui/loader/show"),
    hide: Redux.createAction("ui/loader/hide"),
  },
  reset: Redux.createAction("ui/reset"),
};

export default ui;
