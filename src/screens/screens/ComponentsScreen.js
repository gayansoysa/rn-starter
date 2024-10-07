//import react libraries

import React from "react";
import { Text,StyleSheet, View } from "react-native"  // Text , View, Image, Button - premitive react elements

// create component and appply the styles to the object

/* const ComponentsScreen = () =>{
    return <Text style={styles.testStyle}>This is the components screen</Text>; // Jsx. JSX configuration objects are
    reffered to as "props" (propertis) such as the style
};
*/

const ComponentsScreen = () =>{

    const greetings = "Hi There!";
    const date = <Text>Sunday, OCT 06</Text>

    return (
    <View style={styles.viewStyle}>
        <Text style={styles.headerStyle}>This is the components screen</Text>
        <Text style={styles.subtextStyle}>{greetings} Mr. Soysa</Text>
        <Text style={styles.subtextStyle}>Today's date is {date}</Text>
    </View>
    );
};


//create styles
const styles = StyleSheet.create({
    viewStyle:{
        padding:20
    },
    headerStyle: {
        fontSize:30
    },
    subtextStyle:{
        fontSize:20
    }
});

//export the compoents so it can be called form anywhere
export default ComponentsScreen;