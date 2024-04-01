import React from "react";
import { FlatList,View,StyleSheet } from "react-native";
import { Text } from "@gluestack-ui/themed";
import BookDetail from "./BookDetail";
import booklist from "../json/books.json";

const BooksList = ({ navigation }) => {

  return (
    <View style={styles.list}>
      <Text style={styles.listHeader}>
        {booklist[0].title}
      </Text>
      <FlatList
        horizontal={true}
        data={booklist[0].data}
        renderItem={({item}) => <BookDetail book={item} navigation={navigation}/>}
        keyExtractor={item => item.bookname}
      />

      <Text style={styles.listHeader}>
        {booklist[1].title}
      </Text>
      <FlatList
        horizontal={true}
        data={booklist[1].data}
        renderItem={({item}) => <BookDetail book={item} navigation={navigation}/>}
        keyExtractor={item => item.booknaHHme}
      />
    </View>
  );  
};

const styles = StyleSheet.create({
  list: {
    marginLeft: 20,
    marginright: 20,
    backgroundColor:'#fff'
  },
  listHeader: {
      fontWeight: 'bold',
      fontSize: 24,
      paddingTop: 8
    }
})

export default BooksList;
