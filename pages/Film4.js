// Film4.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Film4Screen = ({ navigation }) => {
  const hanldleCompraBiglietti = () => {
    alert('Aprire il link per l\'acquisto del biglietto');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://services.meteored.com/img/article/titanic-10-curiosidades-sobre-el-naufragio-mas-famoso-de-la-historia-1681429632845_1280.jpg' }} style={styles.poster} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Titanic</Text>
        <Text>Gli orari: Lunedì - Venerdì: 18:00, 20:00 | Sabato - Domenica: 15:00, 17:00</Text>

        <Text>Dettagli:Diretto da James Cameron, "Titanic" è un film drammatico e romantico basato sulla tragedia del naufragio del RMS Titanic.</Text>

        <Text>Trama:La storia segue l'amore proibito tra Jack Dawson, un giovane artista, e Rose DeWitt Bukater, una giovane aristocratica, a bordo del transatlantico RMS Titanic. La loro relazione viene messa alla prova quando la nave colpisce un iceberg e affonda nell'oceano Atlantico.</Text>
      </View>
      <Button title="Acquista biglietti" onPress={hanldleCompraBiglietti} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Film4Screen;
