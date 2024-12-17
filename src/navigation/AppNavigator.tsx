import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CalendarScreen from '../screens/CalenderScreen';
import TaskScreen from '../screens/TaskScreen';
import ExamScreen from '../screens/ExamScreen';
import TriviaScreen from '../screens/TriviaScreen';
import FlashcardsScreen from '../screens/FlashCardsScreen';
import FocusTimeScreen from '../screens/FocusTimeScreen';
import ImportResourcesScreen from '../screens/ImportResourcesScreens';
import HelpScreen from '../screens/HelpScreen';
import SettingsScreen from '../screens/SettingScreen'; 
import HomeScreen from '../screens/HomeScreen'; 


const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
        <Drawer.Screen name="Tasks" component={TaskScreen} />
        <Drawer.Screen name="Exam" component={ExamScreen} />
        <Drawer.Screen name="Trivia" component={TriviaScreen} />
        <Drawer.Screen name="Flash Cards" component={FlashcardsScreen} />
        <Drawer.Screen name="Focus Time" component={FocusTimeScreen} />
        <Drawer.Screen name="Import Resources" component={ImportResourcesScreen} />
        <Drawer.Screen name="Help" component={HelpScreen} />
        <Drawer.Screen name="Setting" component={SettingsScreen} />





      </Drawer.Navigator>
  );
};

export default AppNavigator;
