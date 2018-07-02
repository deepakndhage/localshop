import * as React from 'react';
import { Platform, StyleSheet , Text, View, FlatList, StatusBar} from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, List, ListItem } from 'native-base'
import { Constants, Font, AppLoading } from "expo";
import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        
          <AppLoading />
        
      );
    }
    return (
      
        <AppDrawerNavigator/>
      
    );
  }
}
const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <Header style={[{ backgroundColor: '#3a455c', height: 90 }, styles.androidHeader]}>
        <Left style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="person" style={{ color: 'white' }} />
          <Text style={{ marginLeft: 5, fontSize: 22, color: 'white', fontStyle: 'italic' }}>Hello, Varun</Text>
        </Left>
      </Header>
      <Content>
        <FlatList
          data={[
            {key:'Home'}, {key:'Shop by Category'}, {key:"Today's Deals"}
          ]}
          renderItem={({ item }) => (

            <ListItem noBorder>
              <Text>{item.key}</Text>                                            
            </ListItem>

          )}



        />
        <FlatList
          style={{ borderTopWidth: 0.5, borderTopColor: '#f0f0f0' }}
          data={[
            {key:'Your Wish List'},{key:'Your Account'},{key: "Amazon Pay"},{key: "Prime"},{key: "Sell on Amazon"}
          ]}
          renderItem={({ item }) => (

            <ListItem noBorder>
              <Text>{item.key}</Text>
            </ListItem>

          )}



        />

        <FlatList
          style={{ borderTopWidth: 0.5, borderTopColor: '#f0f0f0' }}
          data={[
            {key:'Settings'},{key: 'Customer Service'}
          ]}
          renderItem={({ item }) => (

            <ListItem noBorder>
              <Text>{item.key}</Text>
            </ListItem>

          )}



        />
      </Content>
    </Container>
  )
}
const AppDrawerNavigator = createDrawerNavigator(
  { Home : 
    { 
      screen : HomeScreen,
      navigationOptions: {
        title: 'Home',
        headerStyle:{
          marginTop: (Platform.OS === 'ios') ? 0 : Constants.statusBarHeight 
        }
      }
    }
  }, {
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'

  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;