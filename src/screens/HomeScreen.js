import React from "react";
import { Box } from "@gluestack-ui/themed"
import { ScrollView } from "react-native";
import BookList from "../components/BookList";
import bookData from "../json/books.json";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <BookList 
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default HomeScreen;



