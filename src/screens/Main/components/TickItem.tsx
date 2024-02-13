import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme, Text } from '@rneui/themed';
import { TickInfo } from '../type/mainState';
import PercentDecrease from '@assets/svg/PercentDecrease';
import { NavigationContext } from '@react-navigation/native';
import { Routes } from '@navigation/routes';
import PercentIncrease from '@assets/svg/PercentIncrease';

type Props = {
    index: number;
    item: TickInfo;
    btcPrice: number;
};

const TickItem = React.memo(({ index, item, btcPrice }: Props) => {
    const themeConfig = useTheme();
    const theme = themeConfig.theme;
    const styles = createStyles(themeConfig);
    const [percent, setPercent] = useState<number>(0);
    const [usdPrice, setUsdPrice] = useState<number>(0);
    const navigation = useContext(NavigationContext);
    useEffect(() => {
        setPercent(item.changePercent)
        setUsdPrice(((item.curPrice / 100000000) * btcPrice))
    }, [])
    return (
        <TouchableOpacity onPress={() => navigation?.navigate(Routes.HOME, {params: { tickName: item.tick }, screen: 'TICKINFO' })}>
            <View style={styles.container} key={index} >
                <View>
                    <View style={styles.tickNameContainer}>
                        <View style={styles.numberContainer}>
                            <Text t1 style={styles.txtNumber}>
                                #{index}
                            </Text>
                        </View>
                        <View>
                            <Text t1 style={styles.txtTick} >{item.tick}</Text>
                            <Text t4 style={[styles.txtTick, { color: percent > 0 ? theme.colors.success : theme.colors.error }]}>
                                {item.changePercent > 0 ? <PercentIncrease /> : <PercentDecrease/>} {item.changePercent ? (item.changePercent * 100).toFixed(2) : 0}%
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text t1 style={styles.txtTick}>{item.curPrice} SATS</Text>
                    <Text t1 style={styles.txtTick}>{usdPrice.toFixed(2)} USD</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
});

const createStyles = ({ theme }: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        height: 64,
        backgroundColor: theme.colors.secondaryBackground,
        marginBottom: 10,
        borderRadius: 10,
    },
    tickNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    numberContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#3B3B4F',
        borderRadius: 50
    },
    txtTick: {
        color: theme.colors.primaryText
    },
    txtNumber: {
        color: theme.colors.secondaryText,
    }
});

export default TickItem;