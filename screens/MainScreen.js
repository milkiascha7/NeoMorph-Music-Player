import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Entypo , Ionicons, Feather } from '@expo/vector-icons'
import playListData from '../assets/data/playListData'
import favoriteListData from '../assets/data/favoriteListData'
import BottomPlay from '../components/BottomPlay'


const MainScreen = ({ navigation }) => {

  const renderPlayListItem = ({ item}) => {
    return(
      <TouchableOpacity 
        style={[styles.playListWrapper,
            { marginLeft: item.id === 1 ? 10 : 0} ]}
            key={item.id}
            onPress={() => navigation.navigate('PlayScreen', { item: item })}    
        >
        <Image 
          source={item.image}
          style={styles.playListImageWrapper}
        />
        <View style={[ styles.textContainer,{ marginLeft: item.id === 1 ? 20 : 0}  ]}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemSubTitle}>{item.subTitle}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  const renderFavoriteListItem = ({ item}) => {
    return(
      <TouchableOpacity style={[styles.playListWrapper,
        { marginLeft: item.id === 1 ? 10 : 0} ]}
        key={item.id}
        onPress={() => navigation.navigate('PlayScreen', { item: item })}
      >
        <Image 
          source={item.image}
          style={styles.playListImageWrapper}
        />
        <View style={[ styles.textContainer,{ marginLeft: item.id === 1 ? 20 : 0}  ]}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemSubTitle}>{item.subTitle}</Text>
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={{ display: 'none'}}>MainScreen</Text>
      </SafeAreaView>

      <View style={styles.mainBody}>
        <Text style={styles.mainTitle}>Library</Text>

        <View style={styles.searchContainer}>

          <AntDesign name="search1" size={24} color="gray" />
          <TextInput placeholder='Song or Artist' type="text" style={{marginLeft: 15}} />

        </View>

        <View style={styles.playlistContainer}>
          <Text style={styles.topic}>Playlists</Text>
          <FlatList 
            data={playListData}
            renderItem={renderPlayListItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>


        <View style={styles.playlistContainer}>
          <Text style={styles.topic}>Favorite</Text>
          <FlatList 
            data={favoriteListData}
            renderItem={renderFavoriteListItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <BottomPlay />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  mainTitle:{
    marginTop: -20,
  },
  mainBody: {
    margin: 0
  },
  mainTitle:{
    fontSize: 40,
    marginLeft: 20,
    color: "#7B9BFF",
    fontWeight: '700'
  },
  searchContainer:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding:15,
    borderRadius:50,
  },
  playlistContainer:{
    marginTop: 20, 
  },
  topic:{
    marginBottom: 20,
    marginLeft: 20,
    color: 'gray',
    fontSize: 30,
    fontWeight: '300'
  },
  playListWrapper:{
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  playListImageWrapper:{
    width: 200,
    height: 200,
    borderRadius: 20,
    marginHorizontal: 10
  },
  textContainer:{
    marginTop: 5,
  },
  itemTitle:{
    fontWeight: '500',
    fontSize: 20,
  },
  itemSubTitle:{
    fontSize: 14,
    fontWeight: '300'
  },
})