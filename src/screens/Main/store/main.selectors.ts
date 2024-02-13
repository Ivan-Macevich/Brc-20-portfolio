import { RootState } from "src/store/store";

export const selectBtcPrice = (state: RootState) => state.main.BTCPrice;
export const selectTickList = (state: RootState) => state.main.detail;
export const selectTickInfo = (state: RootState) => state.main.tickInfo;
