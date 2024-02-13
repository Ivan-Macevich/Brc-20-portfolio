import { createTheme } from "@rneui/themed";

export const theme = createTheme({
	lightColors: {
		primary: "#F56E3F",
		primaryBackground: "#171821",
		primaryText: "#FFFFFF",
		secondaryBackground: "#2A2A3C",
		secondaryText: "#A0A0AC",
		fields: '#3B3B4F',
		success: '#C5FD4D',
		orange: "#F56E3F",
		secondary: "#989EA7",		
		purpleOptional: "#C0A3FF",
		purpleExtraLight: "#CFB9FF",
		purpleLight: "#ECE3FF",
		gray: "#989EA7",
		grayOptional: "#3B3B4F",
		grayExtraLight: "#818085",
		grayLight: "#989EA7",
		grayMedium: "#373541",
		
		black: "#04020B"
	},
	darkColors: {
		primary: "#F56E3F",
		primaryBackground: "#171821",
		primaryText: "#FFFFFF",
		secondaryBackground: "#2A2A3C",
		secondaryText: "#A0A0AC",
		fields: '#3B3B4F',
		success: '#C5FD4D',
		purpleOptional: "#C0A3FF",
		purpleExtraLight: "#CFB9FF",
		purpleLight: "#ECE3FF",
		white: "#FFFFFF",
		white_15: "rgba(255, 255, 255, 0.15)",
		white_17: "rgba(255, 255, 255, 0.17)",
		white_31: "rgba(255, 255, 255, 0.31)",
		white_40: "rgba(255, 255, 255, 0.4)",
		white_45: "rgba(255, 255, 255, 0.45)",
		white_50: "rgba(255, 255, 255, 0.5)",
		white_60: "rgba(255, 255, 255, 0.6)",
		white_80: "rgba(255, 255, 255, 0.8)",
		gray: "#989EA7",
		gray_75: "rgba(67, 65, 72, 0.75)",
		grayOptional: "#3B3B4F",
		grayExtraLight: "#818085",
		grayLight: "#989EA7",
		grayMedium: "#373541",
		green: "#4DD874",
		black: "#04020B"
	},
	components: {
		Button: (props, theme) => ({
			buttonStyle:
				props.variant === "main"
					? {
							borderRadius: 24,
							paddingVertical: 12,
							marginBottom: 10
					  }
					: {
							borderRadius: 100,
							marginBottom: 12,
							paddingVertical: 18
					  },
			titleStyle:
				props.variant === "main"
					? {
							fontFamily: "Jost_400Regular",
							fontWeight: "400",
							fontSize: 16,
							lineHeight: 24,
							color: "white"
					  }
					: {
							fontFamily: "Jost_400Regular",
							fontWeight: "400",
							fontSize: 14,
							lineHeight: 22,
							color: theme.colors.primary
					  },
			iconContainerStyle: {
				margin: 20
			}
		}),
		LinearProgress: (props, theme) => ({
			variant: "determinate",
			color: "rgba(173, 0, 255, 1)",
			trackColor: theme.colors.white_17,
			style: {
				borderRadius: 4,
				minWidth: 200
			}
		}),
		Input: (props, theme) => ({
			inputContainerStyle: {
				backgroundColor: theme.colors.grayOptional,
				borderRadius: 10,
				marginTop: 8,
				marginBottom: -11,
				borderBottomWidth: 0
			},

			inputStyle: {
				fontFamily: "Jost_400Regular",
				fontWeight: "400",
				fontSize: 16,
				lineHeight: 20.83,
				color: theme.colors.grayLight,
				opacity: 0.29
			},
			labelStyle: {
				fontFamily: "Jost_400Regular",
				fontWeight: "400",
				fontSize: 14,
				lineHeight: 18.23,
				color: theme.colors.white
			}
		}),
		Text: (props, theme) => ({
			h1Style: {
				fontFamily: "Jost_600SemiBold",
				fontWeight: "600",
				fontSize: 32,
				lineHeight: 38,
				textAlign: "center",
				padding: 0,
				color: theme.colors.white
			},
			h2Style: {
				fontFamily: "Jost_400Regular",
				fontWeight: "400",
				lineHeight: 24,
				fontSize: 16,
				color: theme.colors.white,
				textAlign: "center"
			},
			h3Style: {
				fontFamily: "Jost_400Regular",
				fontWeight: "400",
				fontSize: 20,
				lineHeight: 26.04,
				color: theme.colors.primary,
				textAlign: "center"
			},
			h4Style: {
				fontFamily: "Jost_600SemiBold",
				fontWeight: "600",
				fontSize: 22,
				lineHeight: 28.64,
				color: theme.colors.white,
				textAlign: "center"
			},
			style: props.t1
				? {
						fontFamily: "Jost_600SemiBold",
						fontWeight: "600",
						fontSize: 16,
						lineHeight: 33.85,
						color: theme.colors.primaryBackground
				  }
				: props.t2
				? {
						fontFamily: "Jost_400Regular",
						fontWeight: "400",
						fontSize: 16,
						lineHeight: 20.83,
						color: theme.colors.secondary
				  }
				: props.t3
				? {
						fontFamily: "Jost_600SemiBold",
						fontSize: 16,
						lineHeight: 33.85,
						color: theme.colors.white,
						textAlign: "right"
				  }
				: props.t4
				? {
						fontFamily: "Jost_400Regular",
						fontWeight: "400",
						fontSize: 14,
						lineHeight: 21,
						color: theme.colors.white
				  }
				: props.t5
				? {
						fontFamily: "Jost_600SemiBold",
						fontWeight: "600",
						fontSize: 16,
						lineHeight: 21,
						color: theme.colors.white
				  }
				: props.t6
				? {
						fontFamily: "DMSans-Regular",
						fontWeight: "400",
						fontSize: 15,
						lineHeight: 19.53,
						color: theme.colors.gray
				  }
				: props.t7
				? {
						fontFamily: "DMSans-Regular",
						fontWeight: "400",
						fontSize: 10,
						lineHeight: 15,
						color: theme.colors.white_45
				  }
				: props.t8
				? {
						fontFamily: "Jost_400Regular",
						fontWeight: "normal",
						fontSize: 12,
						lineHeight: 23,
						color: theme.colors.secondary
				  }
				: props.h5
				? {
						fontFamily: "DMSans-Medium",
						fontWeight: "500",
						fontSize: 16,
						lineHeight: 20.83,
						color: theme.colors.white
				  }
				: props.h6
				? {
						fontFamily: "Jost_400Regular",
						fontWeight: "normal",
						fontSize: 24,
						lineHeight: 32,
						textAlign: "center",
						padding: 0,
						color: theme.colors.purpleOptional
				  }
				: props.h7
				? {
						fontFamily: "DMSans-Medium",
						fontWeight: "500",
						fontSize: 14,
						lineHeight: 20,
						color: theme.colors.white,
						textAlign: "center"
				  }
				: {
						fontFamily: "Jost_400Regular",
						fontWeight: "normal",
						fontSize: 22,
						lineHeight: 28.64
				  }
		})
	},
	mode: "dark"
});
