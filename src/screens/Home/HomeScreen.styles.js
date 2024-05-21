// import "../../../assets/styles/base/base";
import { StyleSheet } from 'react-native';
import {themePadrao} from "../../../assets/styles/base/variables";


export const styles = StyleSheet.create({

  item:{
    marginVertical: themePadrao.spacing.small,
    marginHorizontal: themePadrao.spacing.medium,
    borderRadius: 10,
    shadowColor: '#000', // Cor da sombra
    shadowOpacity: 1, // Opacidade da sombra
    shadowRadius: 10, // Raio da sombra
    elevation: 5,
  },

  container: {
    flexDirection: 'row',
    padding: themePadrao.spacing.medium,
    alignItems: 'center',
  },
  titulo: {
    fontSize: themePadrao.fontSize.large,
    color: themePadrao.colors.text,
    paddingLeft: themePadrao.spacing.medium,
  },
  image: {
    width: 70, // Ajustei as dimensões para serem mais visíveis
    height: 70,
    borderRadius: 10,
  },

  icon: {
    marginLeft: 'auto',
  },
});