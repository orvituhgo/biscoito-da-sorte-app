import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState} from 'react';

export default function App() {
  // const [urlBiscoito, setUrlBiscoito] = useState('./assets/biscoito.png')
  const [mostrarFrase, setMostrarFrase] = useState(false)
  const [indexFrase, setIndexFrase] = useState(0)

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  function quebrarBiscoito() {
    // setUrlBiscoito('./assets/biscoitoAberto.png')
    setMostrarFrase(true)
    const random = randomNumber(0, frases.length)
    if (random === indexFrase) {
      const randomNew = randomNumber(0, frases.length)
      setIndexFrase(randomNew)
      return
    }    
    setIndexFrase(random)
  }
  function regenerarBiscoito() {
    // setUrlBiscoito('./assets/biscoito.png')
    setMostrarFrase(false)
  }




  let frases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];


  return (
    <View style={styles.container}>
      <Image source={mostrarFrase ? require('./assets/biscoitoAberto.png') : require('./assets/biscoito.png')} style={styles.image}/>
      {mostrarFrase && (
        <View style={styles.containerText}>
          <Text style={styles.frase}>" {frases[indexFrase]} "</Text>
        </View>
      ) }
      <TouchableOpacity style={styles.TouchableOpacity} onPress={quebrarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar biscoito</Text>
          </View>
          </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity} onPress={regenerarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Regenerar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  frase: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  containerText: {
    margin: 10,
    marginHorizontal: 20,
    paddingTop: 10,
    height: 60,
  },
  image: {
    paddingBottom: 10,
    height: 200,
    width: 200
  },
  btnArea: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    textAlign:'center',
    fontSize: 18
  },
  TouchableOpacity: {
    width: 180,
    height: 60,
    borderColor: '#ffb750',
    borderRadius: 16,
    borderWidth: 2,
  }
});
