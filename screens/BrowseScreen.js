import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import DataCard from '../components/DataCard';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';

import { MOCK_DATA } from '../data/sampleData';
import { filterByQuery } from '../utils/searchHelpers';
import { colors } from '../styles/colors';

export default function BrowseScreen() {
  const [data, setData] = useState(MOCK_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(MOCK_DATA);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const query = searchQuery.trim();
    setFilteredData(query ? filterByQuery(data, query) : data);
  }, [searchQuery, data]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setData(currentData => [...currentData].sort(() => Math.random() - 0.5));
    setRefreshing(false);
  };

  const handleCardPress = (item) => {
    console.log('Pressed:', item.title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search products..."
      />

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <DataCard item={item} onPress={handleCardPress} />
        )}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <EmptyState
            message={searchQuery.trim() ? `No results for "${searchQuery}"` : 'No items available'}
            emoji={searchQuery.trim() ? '😕' : '📦'}
          />
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
    flexGrow: 1,
  },
});
