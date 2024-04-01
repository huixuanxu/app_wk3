import React from "react";
import { Box, HStack, VStack, Text, Image, Pressable, Center } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import StarList from "./StarList";

const BookDetail = ({ book, navigation }) => {
  return (
    <Box p={1}>
      <VStack bg='#fff' pr={20} pb={15}>
        <Box bg="#fff" pt={5}>
          <Pressable 
            onPress={() => navigation.navigate('Detail', book)}
            >
            <Center>
              <Image height={200} width={140}
                source={{ uri: book.image }}
                alt="book"
            />
            </Center>             
          </Pressable>
        </Box>   
        <Box>
        <VStack justifyContent="space-between">
            {book.StarAppear?
              <Box  paddingTop={5} >
                <StarList star={(book.star)} />
              </Box>
              :null}
              
            <Text bold paddingTop={5} paddingBottom={5} fontSize={16} fontWeight='500' color='#131313' lineHeight={18}>{book.title}</Text>
            <Text fontSize={14} fontWeight='400' color='gray'  lineHeight={16}>{book.author}</Text>
          </VStack>
        </Box>
      </VStack>
      
    </Box>
  )};

export default BookDetail;