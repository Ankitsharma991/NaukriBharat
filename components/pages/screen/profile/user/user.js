import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const User = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://thehuntsman4.pythonanywhere.com/api/');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }releaseYear
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
                <Text>
                    {item.name}, {item.id}
                </Text>

              )}
        />
        )}

    </View>
  );
};

export default User;