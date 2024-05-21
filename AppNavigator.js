import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Login/LoginScreen';
import CriarContaScreen from './src/screens/CriarConta/CriarContaScreen';
import EditarContaScreen from './src/screens/EditarConta/EditarContaScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import ProdutoScreen from './src/screens/Produto/ProdutoScreen';
import VisualizarContaScreen from './src/screens/VisualizarConta/VisualizarContaScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

      <Stack.Screen name="CriarConta" component={CriarContaScreen} />
      <Stack.Screen name="EditarCadastro" component={EditarContaScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Produto" component={ProdutoScreen} />
      <Stack.Screen name="VisualizarConta" component={VisualizarContaScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;



