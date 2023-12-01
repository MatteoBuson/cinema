import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  ImageBackground,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function ActualFilm({ route, navigation }) {
  const { id } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMoviesFromApi = async (id) => {
    try {
      const response = await fetch(
        "https://cinema.donboscosandona.it/movie/show/" + id + ".json"
      );
      const json = await response.json();
      setMovies(json);
    } 
     finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMoviesFromApi(id);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground resizeMode="cover">
  {isLoading ? (
    <ActivityIndicator />
  ) : (
    <>
     <Image
            style={styles.image}
            source={{ uri: movies.poster_path }}
          />
      <Text>{movies.overview}</Text>
      
      <View>
              {movies.showtimes.map((showtime, index) => (
                <Text key={index} style={styles.showtimeText}>
                  {`Titolo: ${movies.title}\nRegista: ${movies.director}\nDa: ${showtime.date} Alle: ${showtime.time}`}
                </Text>
              ))}
            </View>
    </>
  )}
</ImageBackground>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    margin: 10,
  },
  loader: {
    marginTop: 50,
  },

  overview: {
    paddingHorizontal: 20,
    textAlign: "center",
    marginBottom: 20,
  },

  showtimesContainer: {
    paddingHorizontal: 20,
  },

  showtimeText: {
    marginTop:11,
    marginBottom: 5,
    fontSize: 20,
    textAlign: "center",
  },
  logo: {
    height: 150,
    resizeMode: "contain",
  },
  spazio: {
    padding: 10,
  },
  image: {
    height: 390,
  },
  text: {
    flex: 1,
  }
});
