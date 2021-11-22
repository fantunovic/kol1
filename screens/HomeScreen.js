import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';


export function HomeScreen({route, navigation}) {

    function handleSettingsPress(){
        navigation.navigate("Settings")
    }

    return (






        <View style={styles.container}>

<View style={styles.jumbotron}>

<View style={styles.rightContaire}>
<Image style={styles.image} source={require("../assets/slika2.jpg")}/>
</View>

<View style={styles.leftContaire}>
<Text style={styles.text}>Filip</Text>
<Text style={styles.text}>Antunović</Text>
<Text style={styles.text}>fantunovic@ffos.hr</Text>


</View>

<View>
    
    
     </View>


</View>


<Text style={styles.text2}>Filozofski fakultet Osijek</Text>
<Text style={styles.text2}>Opća gimnazija Đakovo</Text>
<Text style={styles.text2}>Osnovna škola Vladimir Nazor Đakovo</Text>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    jumbotron: {
        flexDirection: "row",
        justifyContent: "space-between",
        
    
      },

      
    text: {
        padding: 5,
        fontSize: 25,
        paddingLeft: 25,
        
    
      },

      text2: {
        padding: 15,
        fontSize: 25,
        textAlign:"center"
        
    
      },

      image: {
        height: 150,
        width: 100,
        padding: 25
        
    
      },
});