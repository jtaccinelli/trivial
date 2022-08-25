import type { Game } from "~/types/games";

import * as Redux from "@reduxjs/toolkit";

const history = {
  log: Redux.createAction<Game>("history/log"),
  clear: Redux.createAction("history/clear"),
};

export default history;
