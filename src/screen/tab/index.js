import {View, Text, SafeAreaView, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: 'orange'}}
      renderLabel={({route, focused, color}) => (
        <Text style={{color: focused ? 'black' : 'red', margin: 8}}>
          {route.title}
        </Text>
      )}
      renderIcon={({route, focused, color}) =>
        route.title == 'First' ? (
          <AntDesign name={'home'} color={color} size={20} />
        ) : (
          <AntDesign name={'user'} color={color} size={20} />
        )
      }
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  );
}
