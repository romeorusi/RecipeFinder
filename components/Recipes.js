import {View, Text, Button, TextInput, FlatList, ActivityIndicator, Image } from 'react-native';
import React, {useState} from 'react';



export default function Recipes () {
    
    const [data, setData] = useState([]);
    const [keyw, setKeyw] = useState([]);


    const fetchRepos = () => { //tässä tehdään verkkopyyntö
   
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyw}`)
        .then(response => response.json())
        .then(data => setData(data.meals))
        .catch(err => {console.error(err)})
        

    }
    
    return (
        <View style={{marginTop:80}}>

        <TextInput
        value={keyw}
        placeholder='Ainesosa'
        onChangeText={text => setKeyw(text)}
        style={{ width:300, borderColor: 'gray', borderWidth: 1 }}
        />

        <Button title='ETSI' onPress={fetchRepos} />

        <FlatList
        data={data}
        renderItem={({ item })=>
        <View>
            <Text style={{fontSize:20}}>{item.strMeal}</Text>
            <Image 
            style={{width: 50, height:50}}
            source={{uri: item.strMealThumb}}
            />
        </View>}
        />

        </View>
    );

}