import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useTheme, Text } from '@rneui/themed';
import { NavigationContext } from '@react-navigation/native';
import { Routes } from '@navigation/routes';
import ArrowBack from '@assets/svg/ArrowBack';
import HeartFilled from '@assets/svg/HeartFilled';
import { useSelector } from 'react-redux';
import { selectTickInfo } from '../store/main.selectors';
import { useAppDispatch } from 'src/store/store';
import { getTickInfo } from '../store/main.actions';

const TickInfoScreen = ({ route }: any) => {
    const { tickName } = route.params;
    const themeConfig = useTheme();
    const theme = themeConfig.theme
    const styles = createStyles(themeConfig)
    const navigation = useContext(NavigationContext);
    const tick = useSelector(selectTickInfo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTickInfo({ tick: tickName, timeType: 'day1' }))
    }, [])
    console.log(tick.amountVolume)
    return (
        <View style={[{ ...styles.container }]}>
            <View>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={
                        () => navigation?.navigate(Routes.HOME, { screen: 'MAIN', })
                    }>
                        <ArrowBack />
                    </TouchableOpacity>
                    <Text h1>{tickName}</Text>
                    <TouchableOpacity>
                        <HeartFilled />
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity onPress={
                    () => navigation?.navigate(Routes.HOME, { screen: 'MAIN', })
                }>
                    <Text>Exit</Text>
                </TouchableOpacity> */}

                <View style={{ marginTop: 20 }}>
                    <View style={styles.infoContainer}>
                        <Text t5>Ticker</Text>
                        <Text t5>{tick.tick}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text t5>Creator:</Text>
                        <Text t5 style={{ width: 200 }}>{tick.creator}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text t5>Total minted:</Text>
                        <Text t5>{tick.totalMinted}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text t5>Holder count:</Text>
                        <Text t5>Ordi</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text t5>Current price, $:</Text>
                        <Text t5>{tick.curPrice}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text t5>BTC volume:</Text>
                        <Text t5>{tick.btcVolume}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text t5>Amount volume:</Text>
                        <Text t5>{tick.amountVolume}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text t5>Change price (24h):</Text>
                        <Text t5>{tick.changePrice}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.btnsContainer}>
                <TouchableOpacity style={[
                    styles.logInBtn,
                    {
                        backgroundColor: theme.colors.primary,
                        paddingVertical: 13,
                        borderRadius: 10,
                    }
                ]}>
                    <Text t1 style={styles.txtAlignCenter}>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                    styles.logInBtn,
                    {
                        backgroundColor: theme.colors.primary,
                        paddingVertical: 13,
                        borderRadius: 10,
                    }
                ]}>
                    <Text t1 style={styles.txtAlignCenter}>Sell</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TickInfoScreen

const createStyles = ({ theme }: ReturnType<typeof useTheme>) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primaryBackground,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        paddingTop: 60,
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: theme.colors.secondaryBackground,
        marginBottom: 10,
        borderRadius: 10
    },
    txtAlignCenter: {
        textAlign: 'center',
    },
    logInBtn: {
        marginTop: 15,
        backgroundColor: theme.colors.primary,
        paddingVertical: 13,
        borderRadius: 10,
        width: '50%',
    },
    btnsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
});
