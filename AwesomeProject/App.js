import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, StatusBar } from 'react-native';
import AllRoutes from './src/Component/AllRoutes';
// import Settings from './src/Component/Settings';


const THEME_COLOR = '#285E29';
// const statusBarTransition = Tra
const App = () => {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <StatusBar barStyle="dark-content" showHideTransition='fade' backgroundColor="#61dafb" />
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.logo}>Qikbuk</Text> */}
        < View style={styles.contentContainer} >
          < AllRoutes />
        </ View >
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white', // Set the background color
    width: '100%',
    // marginTop: 10,
  },

  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'dodgerblue', // Set the logo color
    // marginBottom: 10, // Add margin to the logo
  },

  contentContainer: {
    flex: 1,
    width: '100%',
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: THEME_COLOR
  },
});

export default App;
