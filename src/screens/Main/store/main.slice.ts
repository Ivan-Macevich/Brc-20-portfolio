import { StateStatus } from "src/types/baseState";
import { MainState, TickInfo, TickInfoListData } from "../type/mainState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getTicksList, getTickInfo } from "./main.actions";

const initialState: MainState = {
	detail: [],
	total: 0,
	BTCPrice: 0,
	tickInfo: {
		tick: '', 
		changePercent: 0,
	 	curPrice: 0, 
	 	btcVolume: 0,
	  	changePrice: 0
	},
	ticksForUserData: [],
	ticksData: { list: [], BTCPrice: 0 },
	status: StateStatus.INIT,
	error: null
};

const mainSlice = createSlice({
	name: 'MAIN',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTicksList.pending, (state) => {
			state.status = StateStatus.LOADING;
			state.error = null;
		});
		builder.addCase(getTicksList.fulfilled, (state, action: PayloadAction<TickInfoListData>) => {
			state.status = StateStatus.SUCCESS;
			state.BTCPrice = action.payload.BTCPrice;
			state.detail = action.payload.list
		});
		builder.addCase(getTicksList.rejected, (state,action)=>{
			state.status = StateStatus.ERROR;
			state.error = action.payload;
		});
		builder.addCase(getTickInfo.pending, (state)=>{
			state.status = StateStatus.LOADING;
			state.error = null;
		});
		builder.addCase(getTickInfo.fulfilled, (state, action: PayloadAction<TickInfo>) => {
			state.status = StateStatus.SUCCESS;
			state.tickInfo = action.payload;
		});
		builder.addCase(getTickInfo.rejected, (state,action)=>{
			state.status = StateStatus.ERROR;
			state.error = action.payload;
		});
	}
})

export const { reducer: mainReducer } = mainSlice
