import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/99192766?v=4';
const urlToMyGithub = 'https://github.com/marianasocastro';

const App = () => {

    const handlePressGoToGithub = async () => {
        const res = await Linking.canOpenURL(urlToMyGithub)
        if(res){
           await Linking.openURL(urlToMyGithub)
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content'/>
        <View style={style.content}>
            <Image acessibilityLabel="foto de perfil de Mariana" style={style.avatar} source={{uri: imageProfileGithub}}/>
            <Text acessibilityLabel="Nome: Mariana Castro" style={[style.defaultText, style.name]}>Mariana Castro</Text>
            <Text acessibilityLabel="Nickname: Mariana SO Castro" style={[style.defaultText, style.nickName]}>marianasocastro</Text>
            <Text acessibilityLabel="Descrição:Desenvolvedora Front-end em formação | HTML | CSS | JavaScript" style={[style.defaultText, style.description]}>Desenvolvedora Front-end em formação | HTML | CSS | JavaScript</Text>
        </View>
        <Pressable onPress={handlePressGoToGithub}>
        <View style={[style.button, style.content]}>
            <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
        </View>
        </Pressable>
        </SafeAreaView>
    )
}

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: "center",
        
    },
    content: {
        alignItems: "center",
        padding: 20,
        


    },
    avatar: {
        height: 250,
        width: 250,
        borderRadius: 125,
        borderColor: colorDarkFontGithub,
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGithub,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    nickName: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 14,
        width: 250,
        textAlign: "center",
    },
    button: {
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        marginTop: 10,
        width: 250,
        alignSelf:"center",
    },
    textButton: {
        fontSize: 16,
        fontWeight: "bold",
        

    }
})