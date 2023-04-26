import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const User = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchApiData = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?s=batman&apikey=39df4eee"
      );
      const jsonData = await response.json();
      setData(jsonData.Search);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const handleCallPress = () => {
    alert("Call button clicked");
  };

  const handleMessagePress = () => {
    alert("Message button clicked");
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
              <View style={{overflow: 'hidden', borderRadius: 50}}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: item.Poster }} />
              </View>
              <View style={{marginLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
                <Text>{item.Title}</Text>
                <TouchableOpacity onPress={handleCallPress}>
                  <Icon name="phone" size={20} color="black" style={{marginLeft: 10}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMessagePress}>
                  <Icon name="comment" size={20} color="black" style={{marginLeft: 10}} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default User;
