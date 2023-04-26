import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const User = () => {
  // Define state variables for loading state and API data
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetch data from API using async/await
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

  // Call the fetchApiData function when the component mounts
  useEffect(() => {
    fetchApiData();
  }, []);

  // Handle the button press events
  const handleCallPress = () => {
    alert("Call button clicked");
  };

  const handleMessagePress = () => {
    alert("Message button clicked");
  };

  const handleImagePress = () => {
    alert("Image clicked!");
  };

  const handleTitlePress = (title) => {
    alert(`${title} clicked`);
  };

  // Define the render function for each movie item in the list
  const renderMovieItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
      }}
    >
      <TouchableOpacity onPress={handleImagePress}>
        <View style={{ overflow: "hidden", borderRadius: 50 }}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{ uri: item.Poster }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTitlePress(item.Title)}>
        <View
          style={{
            marginLeft: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>{item.Title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCallPress}>
        <Icon
          name="phone"
          size={20}
          color="black"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMessagePress}>
        <Icon
          name="comment"
          size={20}
          color="black"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {/* Display an activity indicator while data is being fetched */}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        /* Render the flat list with the fetched data and the renderMovieItem function */
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderMovieItem}
        />
      )}
    </View>
  );
};

export default User;
