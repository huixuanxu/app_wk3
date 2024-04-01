import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HStack } from '@gluestack-ui/themed';

const StarList = ({star}) => {

    let starlist = [];
    for(let i=1; i<=5; i++){
        if(star >= i){
            starlist.push( <MaterialCommunityIcons name="star" color="#FFC41F" size={14} key={i}/>)
        }else{
            starlist.push( <MaterialCommunityIcons name="star" color="#EDEDEF" size={14} key={i}/>)
        }
    }
   

    // for (let i=1; i <= star; i++){
    //     lightstar.push( <MaterialCommunityIcons name="star" color="#FFC41F" size={14} key={i}/>)
    // }
    // for (let i=star+1; i <= 5; i++){
    //      darkstar.push( <MaterialCommunityIcons name="star" color="#EDEDEF" size={14} key={i}/>)
    // }
    // // console.log(StarList);
    // let StarList = lightstar.concat(darkstar);

    return (
     <HStack>
        {starlist}
     </HStack>
    );
};

export default StarList;