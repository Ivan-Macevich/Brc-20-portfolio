import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useTheme, Input, Button, Text } from '@rneui/themed';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAppDispatch } from 'src/store/store';
import { useSelector } from 'react-redux';
import { selectBtcPrice, selectTickList } from '../store/main.selectors';
import { getTicksList } from '../store/main.actions';
import { TickInfo } from '../type/mainState';
import TickItem from '../components/TickItem';
import { NavigationContext } from '@react-navigation/native';


const HomeScreen = () => {
  const themeConfig = useTheme();
  const theme = themeConfig.theme
  const styles = createStyles(themeConfig)

  const navigation = useContext(NavigationContext);

  const dispatch = useAppDispatch();
  const ticks = useSelector(selectTickList);
  const btcPrice = useSelector(selectBtcPrice);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [tickToShow, setTickToShow] = useState<TickInfo[]>([])
  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    dispatch(getTicksList({ page: page - 1, limit }));
  };

  const handleNextPage = async () => {
    const currentPage = page;
    setPage((prevPage) => prevPage + 1);
    await dispatch(getTicksList({ page: currentPage + 1, limit }));
    
  };

  useEffect(() => {
    setTickToShow((prevValue) => [...prevValue, ...ticks])
  }, [ticks])

  useEffect(() => {
    dispatch(getTicksList({ page, limit }));
  }, []);

  return (
    <View style={[{ ...styles.container }]}>
        <TouchableOpacity>
          <Text h4 style={{ marginTop: 28 }}>USD</Text>
        </TouchableOpacity>

        {(tickToShow.length === 0) ? (
          <View>
            <Text>No ticks were found</Text>
          </View>) : (
          <View>
            <FlatList
              data={tickToShow}
              initialNumToRender={10}
              renderItem={({ item, index }) => (
                <TickItem item={item} index={index} btcPrice={btcPrice} />
              )}
              onEndReached ={handleNextPage}
              onEndReachedThreshold={0.5}
            />
          </View>
        )}
    </View>)
}

export default HomeScreen

const createStyles = ({ theme }: ReturnType<typeof useTheme>) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryBackground,
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 20
  },

  tickBox: {
    backgroundColor: theme.colors.secondaryBackground,
  }
})