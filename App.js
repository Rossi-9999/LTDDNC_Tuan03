import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <LinearGradient colors={["white", "#50C787"]} style={styles.linearGradient}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 3}}>
          <Image source={require('./img/circle.png')}/>
        </View>
        <View style={{flex: 1, }}>
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 24}}>
            GROW
          </Text>
          <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 24}}>
            YOUR BUSINESS
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{textAlign: "center", fontWeight: "bold"}}>
            We will help you to grow your business using
          </Text>
          <Text style={{textAlign: "center", fontWeight: "bold"}}>
            online server
          </Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", width: "50%"}}>
          <Button title='LOGIN' color = "#C7B350"></Button>
          <Button title='SIGN UP' color = "#C7B350"></Button>
        </View>
        <View style={{flex: 1}}>
        <View style={{flex: 1}}></View>
          <Text style={{textAlign: "center", fontWeight: "bold",  fontSize: 20}}>
            HOW WE WORK?
          </Text>
        </View>
        <View style={{flex: 1}}></View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ["purple","white"],
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
    width: 410
  }
})