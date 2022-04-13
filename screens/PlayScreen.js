import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Slider, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo , Ionicons, Feather } from '@expo/vector-icons'
import NeoMorph from '../components/NeoMorph';


const gray="#91A1BD"


export default function PlayScreen({ navigation, route }) {

    const { item } = route.params

  return (
    <View style={styles.container} >
      <SafeAreaView style={{ alignSelf: 'stretch' }}>
        <View style={{ marginHorizontal: 32, marginTop:32 }}>
          <View style={styles.topContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <NeoMorph size={48}>
                    <AntDesign name="arrowleft" size={20} color={gray} />
                </NeoMorph>
            </TouchableOpacity>
            
            <View>
                <Text style={styles.playing}>Playing Now</Text>
            </View>
            <TouchableOpacity>
                <NeoMorph size={48}>
                    <Entypo name="menu" size={24} color={gray} /> 
                </NeoMorph>
            </TouchableOpacity>
            
          </View>

          <View style={styles.songArtContainer}>
            <NeoMorph size={300}>
              <Image source={item.image} style={styles.songArt} />
            </NeoMorph>
          </View>

          <View style={styles.songContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.subtitle}</Text>
          </View>

          <View style={styles.trackContainer}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={styles.time}>1.21</Text>
              <Text style={styles.time}>3:46</Text>
            </View>
            <Slider   
              minimumValue={0} 
              maximumValue={1} 
              minimumTrackTintColor="#8AAAFF" 
              maximumTrackTintColor="#DAE6F4" 
              thumbTintColor="#7B9BFF"
            />
          </View>

          <View style={styles.controlsContainer}>
            <TouchableOpacity>
              <NeoMorph size={60}>
                <Feather name="rewind" size={32} color={gray} />
              </NeoMorph>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <NeoMorph size={80} style={{ backgroundColor: "#8AAAFF", borderColor: "#8AAAFF"}}>
                <Ionicons name="ios-pause" size={32} color="#FFFFFF" />
              </NeoMorph>
            </TouchableOpacity>
           
            <TouchableOpacity>
              <NeoMorph size={60}>
                <Feather name="fast-forward" size={32} color={gray} />
              </NeoMorph>
            </TouchableOpacity>
           
          </View>

        </View>
       
      </SafeAreaView>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
  },
  topContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  playing:{
    color: gray,
    fontWeight: "800",
  },
  songArtContainer: {
    marginVertical: 32,
    alignItems: "center"
  },
  songArt:{
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "#D7E1F3",
    borderWidth: 10
  },
  songContainer:{
    alignItems: 'center',
  },
  title:{ 
    fontSize: 30,
    color: "#6C7A93",
    fontWeight: "600",
  },
  artist:{
    fontSize: 14,
    marginTop: 6,
    color: gray,
    fontWeight: "500",
  },
  trackContainer: {
    marginTop: 32,
    marginBottom: 64,
  },
  time:{
    fontSize: 10,
    color: gray
  },
  controlsContainer: {
    alignItems:"center",
    flexDirection: "row",
    justifyContent: 'space-around'
  },  
});
