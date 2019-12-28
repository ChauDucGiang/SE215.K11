/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Header,
  Text,
  Content,
  List,
  ListItem,
  Thumbnail,
  Body,
  CardItem,
  Card,
  Input,
} from 'native-base';
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

class OpenIvest extends Component {
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
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                NHỮNG DỰ ÁN ĐANG CHẤP NHẬN TÀI TRỢ TỪ CÁC NHÀ ĐẦU TƯ
              </Text>
            </View>
            <List>
              <ListItem>
                <Card>
                  <CardItem>
                    <ImageBackground
                      source={require('../../../assets/frontend/wp-content/uploads/2016/01/Wholesale.jpg')}
                      style={{height: 200, flex: 1}}>
                      <View style={{position: 'absolute', bottom: 0}}>
                        <View
                          style={{
                            backgroundColor: '#000',
                            width: 300,
                            height: 30,
                            // borderWidth: 5,
                            borderRadius: 75,
                            marginLeft: 15,
                            marginBottom: 10,
                          }}>
                          <Image
                            source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/progress.jpg')}
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 30,
                              // resizeMode: 'repeat',
                            }}
                          />
                        </View>
                        <Image
                          source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/progress-buble.png')}
                          style={{
                            height: 50,
                            borderWidth: 5,
                            borderRadius: 75,
                            resizeMode: 'contain',
                            position: 'absolute',
                            bottom: 20,
                            right: -17,
                          }}
                        />
                        <Text
                          style={{
                            color: '#fff',
                            position: 'absolute',
                            top: -20,
                            right: -17,
                          }}>
                          100%
                        </Text>
                      </View>
                    </ImageBackground>
                  </CardItem>
                  <CardItem style={{flexDirection: 'column'}}>
                    <View style={styles.titleProject}>
                      <Text
                        style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: '#fff',
                          marginTop: 10,
                        }}>
                        Panama Gikden Co
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: 'center',
                          fontStyle: 'italic',
                        }}>
                        La Charenra, Panama
                      </Text>
                    </View>
                    <View style={styles.footerProject}>
                      <View
                        style={{width: 400, paddingTop: 10, paddingLeft: 0}}>
                        <Text style={{textAlign: 'justify', fontSize: 18}}>
                          Bán hết............................................
                          <Text
                            style={{
                              fontSize: 18,
                              color: 'green',
                              fontWeight: 'bold',
                            }}>
                            Bán hết
                          </Text>
                        </Text>
                        <Text style={{textAlign: 'justify', fontSize: 18}}>
                          Năng suát trung bình năm*...........
                          <Text
                            style={{
                              fontSize: 18,
                              color: 'green',
                            }}>
                            18,67%
                          </Text>
                        </Text>
                        <Text style={{textAlign: 'justify', fontSize: 18}}>
                          Đơn vị giá**.....................................
                          <Text
                            style={{
                              fontSize: 18,
                              color: 'green',
                            }}>
                            $1000
                          </Text>
                        </Text>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('Detail')
                          }
                          style={{
                            width: 150,
                            height: 50,
                            marginTop: 10,
                            borderRadius: 25,
                            backgroundColor: '#e96400',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            marginRight: 50,
                          }}>
                          <Text
                            style={{
                              textAlign: 'justify',
                              fontSize: 18,
                              color: '#fff',
                            }}>
                            Xem chi tiết
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              </ListItem>
              <ListItem>
                <Card>
                  <CardItem>
                    <ImageBackground
                      source={require('../../../assets/frontend/wp-content/uploads/2016/01/CocoSprout.jpg')}
                      style={{height: 200, flex: 1}}>
                      <View style={{position: 'absolute', bottom: 0}}>
                        <View
                          style={{
                            backgroundColor: '#000',
                            width: 300,
                            height: 30,
                            // borderWidth: 5,
                            borderRadius: 75,
                            marginLeft: 15,
                            marginBottom: 10,
                          }}>
                          <Image
                            source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/progress.jpg')}
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 30,
                              // resizeMode: 'repeat',
                            }}
                          />
                        </View>
                        <Image
                          source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/progress-buble.png')}
                          style={{
                            height: 50,
                            borderWidth: 5,
                            borderRadius: 75,
                            resizeMode: 'contain',
                            position: 'absolute',
                            bottom: 20,
                            right: -17,
                          }}
                        />
                        <Text
                          style={{
                            color: '#fff',
                            position: 'absolute',
                            top: -20,
                            right: -17,
                          }}>
                          100%
                        </Text>
                      </View>
                    </ImageBackground>
                  </CardItem>
                  <CardItem style={{flexDirection: 'column'}}>
                    <View style={styles.titleProject}>
                      <Text
                        style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: '#fff',
                          marginTop: 10,
                        }}>
                        Panama Gikden Côc Sprout
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: 'center',
                          fontStyle: 'italic',
                        }}>
                        La Charenra, Panama
                      </Text>
                    </View>
                    <View style={styles.footerProject}>
                      <View
                        style={{width: 400, paddingTop: 10, paddingLeft: 0}}>
                        <Text style={{textAlign: 'justify', fontSize: 18}}>
                          Bán hết............................................
                          <Text
                            style={{
                              fontSize: 18,
                              color: 'green',
                              fontWeight: 'bold',
                            }}>
                            Bán hết
                          </Text>
                        </Text>
                        <Text style={{textAlign: 'justify', fontSize: 18}}>
                          Năng suát trung bình năm*...........
                          <Text
                            style={{
                              fontSize: 18,
                              color: 'green',
                            }}>
                            18,67%
                          </Text>
                        </Text>
                        <Text style={{textAlign: 'justify', fontSize: 18}}>
                          Đơn vị giá**.....................................
                          <Text
                            style={{
                              fontSize: 18,
                              color: 'green',
                            }}>
                            $1000
                          </Text>
                        </Text>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('Detail')
                          }
                          style={{
                            width: 150,
                            height: 50,
                            marginTop: 10,
                            borderRadius: 25,
                            backgroundColor: '#e96400',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            marginRight: 50,
                          }}>
                          <Text
                            style={{
                              textAlign: 'justify',
                              fontSize: 18,
                              color: '#fff',
                            }}>
                            Xem chi tiết
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              </ListItem>
              <ListItem>
                <Card>
                  <CardItem>
                    <ImageBackground
                      source={require('../../../assets/frontend/wp-content/uploads/2016/01/AvocadoPacking.jpg')}
                      style={{height: 200, flex: 1}}>
                      <View style={{position: 'absolute', bottom: 0}}>
                        <View
                          style={{
                            backgroundColor: '#000',
                            width: 300,
                            height: 30,
                            // borderWidth: 5,
                            borderRadius: 75,
                            marginLeft: 15,
                            marginBottom: 10,
                          }}>
                          <Image
                            source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/progress.jpg')}
                            style={{
                              width: '70%',
                              height: '100%',
                              borderRadius: 30,
                              // resizeMode: 'repeat',
                            }}
                          />
                        </View>
                        <Image
                          source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/progress-buble.png')}
                          style={{
                            height: 50,
                            borderWidth: 5,
                            borderRadius: 75,
                            resizeMode: 'contain',
                            position: 'absolute',
                            bottom: 20,
                            right: -17,
                          }}
                        />
                        <Text
                          style={{
                            color: '#fff',
                            position: 'absolute',
                            top: -20,
                            right: -17,
                          }}>
                          70%
                        </Text>
                      </View>
                    </ImageBackground>
                  </CardItem>
                  <CardItem style={{flexDirection: 'column'}}>
                    <View style={styles.titleProject}>
                      <Text
                        style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: '#fff',
                          marginTop: 10,
                        }}>
                        Avacado Packing
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: 'center',
                          fontStyle: 'italic',
                        }}>
                        La Charenra, Panama
                      </Text>
                    </View>
                    <View style={styles.footerProject}>
                      <View
                        style={{width: 400, paddingTop: 10, paddingLeft: 0}}>
                        <Text style={{textAlign: 'justify', fontSize: 18}}>
                          Bán hết............................................
                          <Text
                            style={{
                              fontSize: 18,
                              color: 'green',
                              fontWeight: 'bold',
                            }}>
                            Bán hết
                          </Text>
                        </Text>
                        <Text style={{textAlign: 'justify', fontSize: 18}}>
                          Năng suát trung bình năm*...........
                          <Text
                            style={{
                              fontSize: 18,
                              color: 'green',
                            }}>
                            18,67%
                          </Text>
                        </Text>
                        <Text style={{textAlign: 'justify', fontSize: 18}}>
                          Đơn vị giá**.....................................
                          <Text
                            style={{
                              fontSize: 18,
                              color: 'green',
                            }}>
                            $1000
                          </Text>
                        </Text>
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('Detail')
                          }
                          style={{
                            width: 150,
                            height: 50,
                            marginTop: 10,
                            borderRadius: 25,
                            backgroundColor: '#e96400',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            marginRight: 50,
                          }}>
                          <Text
                            style={{
                              textAlign: 'justify',
                              fontSize: 18,
                              color: '#fff',
                            }}>
                            Xem chi tiết
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              </ListItem>
            </List>
          </Content>
        </ImageBackground>
        <View style={styles.footer}>
          <Image
            // source={require('../../../assets/frontend/wp-content/uploads/2016/03/favicon.png')}
            source={require('../../../assets/frontend/wp-content/themes/farmfolio/images/Farmfolio.png')}
            width={50}
            height={50}
          />
          <Text style={{marginTop: 10}}>
            Farm portfolio đang tạo ra một cách có trách nhiệm xã hội và đơn
            giản để mang lại cho các nhà đầu tư và chủ đất / nhà phát triển cùng
            với Farmshares™
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Đầu tư</Text>
              <Text style={{fontSize: 18, marginTop: 15}}>Farmshares™</Text>
            </View>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Gọi vốn</Text>
              <TouchableOpacity>
                <Text style={{fontSize: 18, marginTop: 15}}>Cách thức</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{fontSize: 18}}>Gửi tài sản</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Công ty</Text>
              <TouchableOpacity>
                <Text style={{fontSize: 18, marginTop: 15}}>Về chúng tôi</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{fontSize: 18}}>Bài viết</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>Đăng kí thư</Text>
            <View style={{position: 'relative', width: width / 2}}>
              <Input
                placeholder={'Email'}
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: width / 4,
                  padding: 5,
                }}
              />
              <Icon
                name={'md-mail'}
                size={40}
                color={'gray'}
                style={{position: 'absolute', right: 15, top: 2}}
              />
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 30,
                  backgroundColor: '#607C22',
                  marginTop: 10,
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  Đăng kí
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  footerProject: {
    width: width - 75,
  },
  titleProject: {
    height: 90,
    width: width - 75,
    backgroundColor: '#9DBA76',
  },
  footer: {
    backgroundColor: '#E6E6E6',
    padding: 15,
  },
});

export default OpenIvest;
