import React, {Component} from 'react';
import {Header, Text, Content} from 'native-base';
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../../../assets/frontend/wp-content/uploads/2016/01/MainBG.jpg')}
          style={styles.container}>
          <Header transparent={true} style={styles.header}>
            <Image
              // source={require('../../../assets/frontend/wp-content/uploads/2016/03/favicon.png')}
              source={require('../../../assets/frontend/wp-content/themes/farmfolio/images/Farmfolio.png')}
              width={50}
              height={50}
            />
            <TouchableOpacity
              style={styles.iconMenu}
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name={'md-menu'} size={50} color={'white'} />
            </TouchableOpacity>
          </Header>
          <View style={styles.seperator} />
          <Content>
            <View style={{height: height}}>
              <Text style={styles.text}>Content</Text>
            </View>
          </Content>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    marginTop: 5,
  },
  iconMenu: {
    borderColor: 'white',
    width: 50,
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  seperator: {
    width: width,
    height: 2,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  text: {
    color: 'white',
  },
});

export default Home;
