import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "../../../hooks/useFetch";
import { COLORS, SIZES } from "../../../constants";
import PopulaJobCard from "../../common/cards/popular/PopularJobCard";

import styles from "./popularjobs.style";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopulaJobCard item={item} />}
            keyExtractor={({ item }) => item?.jon_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
