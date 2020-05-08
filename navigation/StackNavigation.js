import {  createAppContainer, createStackNavigator } from 'react-navigation';

import TabNavigation from './TabNavigation';
import Decks from '../screens/Decks';
import Deck from '../screens/Deck';
import AddDeck from '../screens/AddDeck';
import AddCard from '../screens/AddCard';
import Quiz from '../screens/Quiz';

const StackNavigator = createStackNavigator({
  Primary: {
    screen: TabNavigation,
    navigationOptions: {
      header: null
    }
  },
  Decks: {
    screen: Decks
  },
  Deck: {
    screen: Deck
  },
  AddDeck: {
    screen: AddDeck
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
});

const StackNavigation = createAppContainer(StackNavigator);

export default StackNavigation;


