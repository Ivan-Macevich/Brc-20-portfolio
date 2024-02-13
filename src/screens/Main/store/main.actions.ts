import { createAsyncThunk } from "@reduxjs/toolkit";
import { TickInfo, TickInfoListData } from "../type/mainState";
import { fetchTickerInfo, getTickersList, getTickersListInfo } from "src/libs/axios";

export const getTicksList = createAsyncThunk<
	TickInfoListData,
	{ page: number; limit: number },
	{ rejectValue: string }
>("ticks/getTicksList", async ({ page, limit }, { rejectWithValue }) => {
	try {
		console.log(page, limit)
		const responseTicks = await getTickersList(page, limit);
		if (!responseTicks) {
			throw new Error('error`');
		}
		const responseTicksInfo = await getTickersListInfo(
			"day1",
			responseTicks.data.data.detail
		);
		const tickers = responseTicks.data.data.detail;

		if (responseTicks.status === 200 && responseTicksInfo.status === 200) {
			const tickInfoMap: Record<string, TickInfo> = {};

			if (responseTicksInfo.data && responseTicksInfo.data.data) {
				responseTicksInfo.data.data.list.forEach((tickInfo) => {
					tickInfoMap[tickInfo.tick] = tickInfo;
				});
			}
			const tickListWithDefaults = tickers.map((ticker: any) => ({
				...(tickInfoMap[ticker] || {
					tick: ticker,
					curPrice: 0,
					btcVolume: 0,
					changePrice: 0
				})
			}));
			return (
				{
					BTCPrice: responseTicksInfo.data.data.BTCPrice,
					list: tickListWithDefaults
				} || []
			);
		} else {
			console.error("Failed to fetch coins");
			return rejectWithValue("Failed to fetch coins");
		}
	} catch (err:any) {
		console.error("Error while fetching coins:", err.message);
		return rejectWithValue("Error while fetching coins");
	}
});


export const getTickInfo = createAsyncThunk<TickInfo, {tick: string, timeType: string}, {rejectValue: string}>(
	'ticks/getTickInfo', async ({tick, timeType}, {rejectWithValue}) => {
		try{
			const fetchInfo = await fetchTickerInfo(tick)
			const responseInfo = await getTickersListInfo(timeType, [tick]);
			if (!fetchInfo?.data.data) {
				return (
					{
						btcPrice: responseInfo.data.data.BTCPrice,
						tick: tick,
						creator: '',
						totalMinted: 0,
						holderCount: 0,
						curPrice: 0,
						btcVolume: 0,
						changePercent: 0,
						changePrice: 0
					}
				);
			}
			if (responseInfo?.data.data.list.length === 0) {
				const tickInfo = {
						btcPrice: responseInfo.data.data.BTCPrice,
						tick: tick,
						creator: '',
						totalMinted: 0,
						holderCount: 0,
						curPrice: 0,
						btcVolume: 0,
						changePercent: 0,
						changePrice: 0
				};
				return tickInfo;
			}
                return (
                    {
                        tick,
						creator: fetchInfo.data.data.creator,
						totalMinted: fetchInfo.data.data.totalMinted,
						holderCount: fetchInfo.data.data.holdersCount,
						changePercent: responseInfo.data.data.list[0].changePercent,
						buyingPrice: responseInfo.data.data.list[0].buyingPrice,
						amountVolume: responseInfo.data.data.list[0].amountVolume,
						curPrice: responseInfo.data.data.list[0].curPrice,
						btcVolume: responseInfo.data.data.list[0].btcVolume,
						changePrice: responseInfo.data.data.list[0].changePrice,
						btcPrice: responseInfo.data.data.BTCPrice
                    }
                );
			
		} catch (err) {
			return rejectWithValue("Failed to fetch coins");
		}
	})
