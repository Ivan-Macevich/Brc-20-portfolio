import {
	TickInfoListResponse,
	TickListResponse
} from "@screens/Main/type/mainState";
import axios, { AxiosResponse } from "axios";
import { instance } from "src/config/api/axiousInstance";
const baseURL = process.env.REACT_APP_UNISAT_API_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const getTickersList = async (
	page: number,
	limit: number
): Promise<AxiosResponse<any, any> | null>  => {
	try {
		const response = await instance.get<TickListResponse>(
			"/v1/indexer/brc20/list",
			{
				params: {
					start: (page - 1) * limit,
					limit: limit
				}
			}
		);
		return response;
	} catch (err) {
		console.log("e", err);
		return null;
	}
};

export const getTickersListInfo = async (
	timeType: string,
	tickList: Array<string>
) => {
	const response = await instance.post<TickInfoListResponse>(
		"/v3/market/brc20/auction/brc20_types",
		{ timeType: timeType, ticks: tickList }
	);

	return response;
};

export const fetchTickerInfo = async (tick: string) => {
	try{
		const response = await instance.get(
			`/v1/indexer/brc20/${tick}/info`,
		);
		return response;
	} catch (err) {
		console.log("e", err);
		return undefined;
	}
	
}