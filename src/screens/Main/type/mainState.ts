import { BaseState } from '../../../types/baseState';

//state for redux type 
export interface MainState extends BaseState {
	detail: Array<TickInfo>;
	tickInfo: TickInfo;
	total: number;
	BTCPrice: number;
	ticksForUserData: Array<TickInfo>;
	ticksData: TickInfoListData;
}

// response when we get list of tick strings
export interface TickListResponse {
	code: number;
    msg: string;
    data: TickListData;
}

// response when we get list of tick info
export interface TickInfoListResponse {
	data: TickInfoListData;
}

// data with array of tick names string
export interface TickListData {
	height: number;
	total: number;
	start: number;
	detail: Array<string>;
}

// data with array of tick info
export interface TickInfoListData {
	BTCPrice: number;
	list: Array<TickInfo>;
}

// tick info
export interface TickInfo {
	tick: string;
	creator?: string;
	totalMinted?: number;
	holderCount?: number;
	changePercent: number;
	buyingPrice?: number;
	amountVolume?: number;
	curPrice: number;
	btcVolume: number;
	changePrice: number;
	btcPrice?: number;
}