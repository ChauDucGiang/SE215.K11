/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Header, Text, Content, Button, Accordion, Input} from 'native-base';
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import ViewPagerAndroid from '@react-native-community/viewpager';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: 0,
      curProject: 0,
    };
    this.dataArray = [
      {
        id: 'tab1',
        header: 'Phát triển',
        description: `Đây là nơi mà tất cả bắt đâu. Các loại dự án này thường kà trung dài hạnm tùy thuộc sản phẩm đang được phát triển/ Một Khoản đầu tư trong một dự san tăng trưởng khởi nghiệp có thể dai động từ 2-50 năm. Dòng tiền thường dài hạn và tăng giá vốn cao`,
        timeHorizon: 'Ngắn hạn',
        investmentCategory: 'Phát triển',
        risk: 'Trung bình thấp',
        rOREst: '7-20%',
        color: 'rgba(87, 64, 60, 0.7)',
      },
      {
        id: 'tab2',
        header: 'Tiến trình',
        description: `Những loại dự án thường được dựa trên nhũng cơ sở. Tài sản được xây dựng hoặc mua lại. Các dự án luận án là những dóng tiền lớn và có xu hướng tạo thu nhập nhanh chóng.`,
        timeHorizon: 'Dài hạn',
        investmentCategory: 'Phát triển và thu thập',
        risk: 'Trung bình',
        rOREst: '9-30%',
        color: 'rgba(138, 114, 93, 0.7)',
      },
      {
        id: 'tab3',
        header: 'Đóng gói',
        description: `Các cơ sở này lấy các sản phẩm đã hoàn thành và đóng gói chúng để vận chuyển hậu cần Nhiểu loại thiết bị và lao động được yêu cầu và có thể tạo cơ hội để tài trợ cho sự phát triển và vận hành của các cơ sở này. Có 2 loại bao bì: tươi hoặc chế biến. Bao bì tươi thường lấy sản phẩm trừ trang trại đến hộp. Gia công có thể là hợp đồng đóng gói hoặc dóng gói số lượng lớn. Đóng gói hợp đồng là khi bạn đóng gói hàng gia công ở dạng bán lẻ của họ cho một thương hiệu hoặc nhà phân phối. Đóng gói số lượng lớn là khi bạn đóng gói nguyên liệu thô được xử lý ở dạng không bán lẻ. Chính thường được vận chuyển trong hộp trống hoặc hộp nhựa. Các cơ sở này thường được đặt tại trang trại hoặc tại cơ sở chế biến.`,
        timeHorizon: 'Dài hạn',
        investmentCategory: 'Phát triển và thu thập',
        risk: 'Trung bình',
        rOREst: '9-15%',
        color: 'rgba(222, 115, 62, 0.7)',
      },
      {
        id: 'tab4',
        header: 'Hậu cần',
        description: `Hậu cần của các sản phẩm vận chuyển trên toàn thế giới có thể phức tạp và tốn kém. Nhiều người trồng không sẵn sàng chấp nhận rủi ro vận chuyển container trên toàn thế giới và nhiều nhà buôn bán muốn mua các sản phẩm đã thông quan. Điều này tạo ra một cơ hội để tài trợ cho việc chuyển sản phẩm từ nước này sang nước kia.`,
        timeHorizon: 'Dài hạn',
        investmentCategory: 'Phát triển và thu thập',
        risk: 'Trung bình',
        rOREst: '9-15%',
        color: 'rgba(145, 195, 145, 0.7)',
      },
      {
        id: 'tab5',
        header: 'Xuất / Nhập khẩu',
        description: `Quá trình nhập khẩu và xuất khẩu có thể là một thách thức lớn đối với những người trong nghành sản xuất. Các nhà buôn bán và bán lẻ thường không muốn mua và trả tiền cho hàng hóa trừ khi chúng được giao và thanh toán vào đát nước họ. Rủi ro của việc bị gắn cờ để kiểm tra và các tuyến vận chuyển đường dài có thể gây ra sự chậm trễ đáng kể trong dòng tiền của nhà sản xuất. Căng thẳng dòng tiền có thể hạn chế khả năng tiếp sản xuất của họ và tạo ra sự trễ lịch sản xuất, do đó tạo ra cơ hội tài trợ cho các nhà sản xuất. Danh mục đầu tư có thể cung cấp vốn ngắn hạng với lãi suất ưu đãi cho các nhà đầu tư và sản xuẩt. Đội ngũ tư vấn của chúng tôi với sự hỗ trợ trong việc đánh giá rủi ro của từng khaonr vay và đảm bảo rằng các nhà đầu tư chỉ làm việc với các nhà sản xuất chất lượng và chỉ tài trợ cho các tuyến an toàn với xác suất thấp được gắn cờ để kiểm tra.`,
        timeHorizon: 'Trung bình - ngắn',
        investmentCategory: 'Phát triển và thu thập',
        risk: 'Thấp',
        rOREst: '7-12%',
        color: 'rgba(234, 184, 27, 0.7)',
      },
      {
        id: 'tab6',
        header: 'Bán sỉ',
        description: `Bị chi phối nhiều bởi các thương hiệu lớn, những cơ hội này rất hiếm và thường đòi hỏi một mối quan hệ liên doanh nào đó. Đây là những cơ hội tuyệt vời để tiếp cận phân phối sản phẩm. Đây là một sự kết hợp tuyệt vời vào tiếp thị thương hiệu và bán lẻ.`,
        timeHorizon: 'Trung bình - ngắn',
        investmentCategory: 'Phát triển và thu thập',
        risk: 'Thấp',
        rOREst: '7-12%',
        color: 'rgba(232, 145, 96, 0.7)',
      },
      {
        id: 'tab7',
        header: 'Bán lẻ',
        description: `Phân khúc chuỗi cung ứng của ông sẽ được đặc trưng nhất thành 2 loại. Dịch vụ và Thương hiệu / Sản phẩm. Dịch vụ sẽ là một siêu thị hoặc nhà hàng. Thương hiệu và Sản phẩm có thể được bán trực tiếp cho người tiêu dùng, tuy nhiên, họ thường được bán thông qua một công ty dịch vụ như siêu thị hoặc nhà hàng.`,
        timeHorizon: 'Dài hạn',
        investmentCategory: 'Phát triển',
        risk: 'Cao',
        rOREst: '20%+',
        color: 'rgba(186, 185, 121, 0.7)',
      },
    ];
    this.products = [
      {
        id: 0,
        name: 'Nho',
        icon: '../../../assets/frontend/wp-content/uploads/2017/05/Grapes.png',
        description: '',
      },
      {
        id: 1,
        name: 'Chuối',
        icon: '../../../assets/frontend/wp-content/uploads/2017/05/Bananas.png',
        description: '',
      },
      {
        id: 2,
        name: 'Dứa',
        icon:
          '../../../assets/frontend/wp-content/uploads/2016/03/pineapple.png',
        description: '',
      },
      {
        id: 3,
        name: 'Chanh',
        icon: '../../../assets/frontend/wp-content/uploads/2016/03/Lemon.png',
        description: `Trong canh tác thương mại, việc ra hoa có thể được tạo ra một cách nhân tạo và việc thu hoạch sớm quả chính có thể khuyến khích sự phát triển của một vụ thứ hai của các quả nhỏ hơn. Sau khi loại bỏ trong quá trình làm sạch, phần trên của quả dứa có thể được trồng trong đất và một cây mới sẽ phát triển. Slips và mút được trồng thương mại.`,
      },
      {
        id: 4,
        name: 'Vôi Ba Tư',
        icon:
          '../../../assets/frontend/wp-content/uploads/2016/02/passion_fruit.png',
        description: `Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là kích thước lớn hơn, không có hạt, độ cứng, không có gai trên bụi cây và thời gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250`,
      },
    ];
  }
  _renderHeader = data => {
    return (
      <View
        style={{
          width: width,
          height: 50,
          backgroundColor: '#000',
          borderBottomColor: data.color,
          borderBottomWidth: 1,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 25,
            justifyContent: 'center',
          }}>
          {data.header}
        </Text>
      </View>
    );
  };
  _renderContent = data => {
    return (
      <View
        style={{
          backgroundColor: '#000',
          borderBottomColor: data.color,
          borderBottomWidth: 1,
        }}>
        <Text style={{color: '#fff', textAlign: 'left'}}>
          {data.description}
        </Text>
        <Text style={{color: '#fff', textAlign: 'left', marginTop: 10}}>
          Thời gian: {data.timeHorizon}
        </Text>
        <Text style={{color: '#fff', textAlign: 'left'}}>
          Loại đầu tư: {data.investmentCategory}
        </Text>
        <Text style={{color: '#fff', textAlign: 'left'}}>
          Rủi ro: {data.risk}
        </Text>
        <Text style={{color: '#fff', textAlign: 'left'}}>
          ROR Est: {data.rOREst}
        </Text>
      </View>
    );
  };

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
            <ViewPagerAndroid
              style={styles.viewPager}
              initialPage={0}
              ref={'viewpager'}
              onPageSelected={e =>
                this.setState({curPage: e.nativeEvent.position})
              }
              keyboardDismissMode={'on-drag'}>
              <View style={styles.pageStyle} key="1">
                <Text style={[styles.text, {width: 300}]}>
                  Đầu tư thành công được rèn thông qua quan hệ đối tác thành
                  công
                </Text>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 35}]}>
                  Nền tảng đầu tư nền nông nghiệp số
                </Text>
                <View
                  style={{
                    width: 50,
                    height: 10,
                    backgroundColor: 'green',
                    marginTop: 20,
                  }}
                />
                <Text style={[styles.text, {marginTop: 40}]}>
                  Đa dạng hóa danh mục đầu tư của bạn hoặc tích hợp theo chiều
                  dọc sự phát triển nông nghiệp tiếp theo của bạn với Farmshares
                  ™ của Farmfolio.
                </Text>
              </View>
              <View style={styles.pageStyle} key="2">
                <Text style={[styles.text, {width: 300}]}>
                  Sự khởi đầu của một lớp tài sản mới
                </Text>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 35}]}>
                  Nền tảng đầu tư nền nông nghiệp số
                </Text>
                <View
                  style={{
                    width: 50,
                    height: 10,
                    backgroundColor: 'green',
                    marginTop: 20,
                  }}
                />
                <Text style={[styles.text, {marginTop: 40}]}>
                  Trong suốt lịch sử nông nghiệp đã được chứng minh là một trong
                  những loại tài sản trở lại ổn định nhất. Đầu tư vào tài sản
                  hữu hình sẽ đóng vai trò ngày càng quan trọng trong việc duy
                  trì các xã hội toàn cầu.
                </Text>
                <TouchableOpacity
                  style={{
                    width: 200,
                    backgroundColor: '#4D8E42',
                    padding: 10,
                    borderRadius: 100,
                    marginTop: 20,
                    opacity: 0.7,
                    borderColor: '#000',
                    borderWidth: 2,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: 20,
                    }}>
                    ĐẦU TƯ NGAY
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.pageStyle} key="3">
                <Text style={[styles.text, {width: 300}]}>
                  Tài trợ cho dự án tiếp theo của bạn
                </Text>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 35}]}>
                  Nền tảng đầu tư nền nông nghiệp số
                </Text>
                <View
                  style={{
                    width: 50,
                    height: 10,
                    backgroundColor: 'green',
                    marginTop: 20,
                  }}
                />
                <Text style={[styles.text, {marginTop: 40}]}>
                  Bạn có hồ sơ theo dõi về kinh doanh nông nghiệp thành công?.
                  Hợp tác với các nhà đầu tư của chúng tôi để tài trợ cho dự án
                  mở rộng hoặc dự án phát triển mới của bạn.
                </Text>
                <TouchableOpacity
                  style={{
                    width: 200,
                    backgroundColor: '#E96400',
                    padding: 10,
                    borderRadius: 100,
                    marginTop: 30,
                    opacity: 0.7,
                    borderColor: '#000',
                    borderWidth: 2,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: 20,
                    }}>
                    GỌI VỐN NGAY
                  </Text>
                </TouchableOpacity>
              </View>
            </ViewPagerAndroid>
            <View style={styles.groupBtn}>
              <Button
                onPress={() => this.refs.viewpager.setPage(0)}
                style={{
                  width: 50,
                  height: 2,
                  backgroundColor: this.state.curPage === 0 ? 'white' : 'green',
                  marginRight: 20,
                }}
              />
              <Button
                onPress={() => this.refs.viewpager.setPage(1)}
                style={{
                  width: 50,
                  height: 2,
                  backgroundColor: this.state.curPage === 1 ? 'white' : 'green',
                  marginRight: 20,
                }}
              />
              <Button
                onPress={() => this.refs.viewpager.setPage(2)}
                style={{
                  width: 50,
                  height: 2,
                  backgroundColor: this.state.curPage === 2 ? 'white' : 'green',
                  marginRight: 20,
                }}
              />
            </View>
          </Content>
        </ImageBackground>
        <View>
          <Text
            style={{
              fontSize: 25,
              color: 'green',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            CÁC DỰ ÁN MỞ
          </Text>
          <ViewPagerAndroid
            style={styles.viewPagerProjects}
            initialPage={0}
            // ref={'viewpager'}
            // onPageSelected={e =>
            //   this.setState({curPage: e.nativeEvent.position})
            // }
            keyboardDismissMode={'on-drag'}>
            <View style={styles.pageStyle} key="1">
              <View style={styles.titleProject}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#fff',
                    marginTop: 10,
                  }}>
                  Panama Gikden Pineapple II
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
              <View style={styles.contentProject}>
                <ImageBackground
                  source={require('../../../assets/frontend/wp-content/uploads/2016/01/Wholesale.jpg')}
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}
                  >
                    <Image
                      source={require('../../../assets/frontend/wp-content/uploads/2016/11/Panama-Golden-Pineapple-Logo-2.jpg')}
                      style={{
                        width: 150,
                        height: 150,
                        borderWidth: 5,
                        borderRadius: 75,
                        borderColor: 'rgba(255,255,255,0.5)',
                      }}
                      resizeMethod={'scale'}
                      
                    />
                  </TouchableOpacity>
                  <View style={{position: 'relative'}}>
                    <View
                      style={{
                        backgroundColor: '#000',
                        width: 300,
                        height: 30,
                        // borderWidth: 5,
                        borderRadius: 75,
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
                        top: -30,
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
              </View>
              <View style={styles.footerProject}>
                <View style={{width: 400, paddingTop: 15, paddingLeft: 15}}>
                  <Text style={{textAlign: 'justify', fontSize: 20}}>
                    Bán hết............................................
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                        fontWeight: 'bold',
                      }}>
                      Bán hết
                    </Text>
                  </Text>
                  <Text style={{textAlign: 'justify', fontSize: 20}}>
                    Năng suát trung bình năm*...........
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                      }}>
                      18,67%
                    </Text>
                  </Text>
                  <Text style={{textAlign: 'justify', fontSize: 20}}>
                    Đơn vị giá**.....................................
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                      }}>
                      $1000
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.pageStyle} key="2">
              <View style={styles.titleProject}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#fff',
                    marginTop: 10,
                  }}>
                  Ganaderia Pietrasanta II
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    fontStyle: 'italic',
                  }}>
                  Monteria, Colombia
                </Text>
              </View>
              <View style={styles.contentProject}>
                <ImageBackground
                  source={require('../../../assets/frontend/wp-content/uploads/2016/03/11915477_xl.jpg')}
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}
                  >
                    <Image
                      source={require('../../../assets/frontend/wp-content/uploads/2016/09/LogoGP2-01-01-01-01.png')}
                      style={{
                        width: 150,
                        height: 150,
                        borderWidth: 5,
                        borderRadius: 75,
                        borderColor: 'rgba(255,255,255,0.5)',
                      }}
                      resizeMethod={'scale'}
                    />
                  </TouchableOpacity>
                  <View style={{position: 'relative'}}>
                    <View
                      style={{
                        backgroundColor: '#000',
                        width: 300,
                        height: 30,
                        // borderWidth: 5,
                        borderRadius: 75,
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
                        top: -30,
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
              </View>
              <View style={styles.footerProject}>
                <View style={{width: 400, paddingTop: 15, paddingLeft: 15}}>
                  <Text style={{textAlign: 'justify', fontSize: 20}}>
                    Bán hết............................................
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                        fontWeight: 'bold',
                      }}>
                      Bán hết
                    </Text>
                  </Text>
                  <Text style={{textAlign: 'justify', fontSize: 20}}>
                    Năng suát trung bình năm*...........
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                      }}>
                      18,67%
                    </Text>
                  </Text>
                  <Text style={{textAlign: 'justify', fontSize: 20}}>
                    Đơn vị giá**.....................................
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                      }}>
                      $1000
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.pageStyle} key="3">
              <View style={styles.titleProject}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#fff',
                    marginTop: 10,
                  }}>
                  Valle Verde
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    fontStyle: 'italic',
                  }}>
                  Apartado, Colombia
                </Text>
              </View>
              <View style={styles.contentProject}>
                <ImageBackground
                  source={require('../../../assets/frontend/wp-content/uploads/2019/09/ValleVerdeIcon.jpg')}
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                  onPress={()=>this.props.navigation.navigate('Detail')}
                  >
                    <Image
                      source={require('../../../assets/frontend/wp-content/uploads/2019/09/Valle-Verde-Logo.png')}
                      style={{
                        width: 150,
                        height: 150,
                        borderWidth: 5,
                        borderRadius: 75,
                        borderColor: 'rgba(255,255,255,0.5)',
                      }}
                      resizeMethod={'scale'}
                    />
                  </TouchableOpacity>
                  <View style={{position: 'relative'}}>
                    <View
                      style={{
                        backgroundColor: '#000',
                        width: 300,
                        height: 30,
                        // borderWidth: 5,
                        borderRadius: 75,
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
                        top: -30,
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
              </View>
              <View style={styles.footerProject}>
                <View style={{width: 400, paddingTop: 15, paddingLeft: 15}}>
                  <Text style={{textAlign: 'justify', fontSize: 20}}>
                    Bán hết............................................
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                        fontWeight: 'bold',
                      }}>
                      Bán hết
                    </Text>
                  </Text>
                  <Text style={{textAlign: 'justify', fontSize: 20}}>
                    Năng suát trung bình năm*...........
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                      }}>
                      18,67%
                    </Text>
                  </Text>
                  <Text style={{textAlign: 'justify', fontSize: 20}}>
                    Đơn vị giá**.....................................
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'green',
                      }}>
                      $1000
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </ViewPagerAndroid>
        </View>
        <View style={{width: width, height: 200}}>
          <ImageBackground
            source={require('../../../assets/frontend/wp-content/uploads/2016/01/CocoSprout.jpg')}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <ImageBackground
              source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/pathern.png')}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#fff',
                }}>
                NHÀ ĐẦU TƯ
              </Text>
              <View
                style={{height: 3, width: width, backgroundColor: '#fff'}}
              />
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#fff',
                }}>
                CHỦ VƯỜN
              </Text>
            </ImageBackground>
          </ImageBackground>
        </View>
        <View style={styles.about}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 25,
              padding: 10,
            }}>
            Về chúng tôi
          </Text>
          <Text
            style={{
              textAlign: 'center',
            }}>
            Chúng tôi đang thay đổi cách đầu tư của mọi người
          </Text>
          <Image
            source={require('../../../assets/frontend/wp-content/uploads/2016/01/Farmshares1-e1455919558472.png')}
            style={{width: 300, height: 200, alignSelf: 'center'}}
          />
          <Text
            style={{
              textAlign: 'center',
            }}>
            Farmfolio đang tạo ra 1 loại tìa sản mới cung cấp cho các nhà đầu tư
            quyền truy cập trực tiếp vào Đầu tư Nông nghiệp thường dành cho các
            tổ chức lớn
          </Text>
          <TouchableOpacity
            style={{
              width: 250,
              padding: 10,
              borderRadius: 100,
              marginTop: 10,
              opacity: 0.7,
              borderColor: '#000',
              borderWidth: 2,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
              }}>
              GẶP NHÓM
            </Text>
          </TouchableOpacity>
        </View>
        <Accordion
          dataArray={this.dataArray}
          expanded={0}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
        <ImageBackground
          source={require('../../../assets/frontend/wp-content/uploads/2016/01/SupplyChainDark.jpg')}
          style={{width: width}}>
          <Text>CÁC SẢN PHẨM ĐẶC TRƯNG</Text>
          <Text>
            Những sản phẩm có sẵn trong các dự án để tạo ra cổ tức dọc theo
            chuỗi cung ứng
          </Text>
          <ViewPagerAndroid
            style={styles.viewPagerProjects}
            initialPage={0}
            ref={'viewproject'}
            onPageSelected={e =>
              this.setState({curProject: e.nativeEvent.position})
            }
            keyboardDismissMode={'on-drag'}>
            <View style={styles.pageStyle} key="0">
              <View
                style={{
                  width: 170,
                  height: 170,
                  borderRadius: 85,
                  backgroundColor: '#E96400',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#fff',
                  borderWidth: 2,
                }}>
                <Image
                  source={require('../../../assets/frontend/wp-content/uploads/2017/05/Grapes.png')}
                  style={{width: 130, height: 130, padding: 5}}
                  resizeMode={'contain'}
                />
              </View>
            </View>
            <View style={styles.pageStyle} key="1">
              <View
                style={{
                  width: 170,
                  height: 170,
                  borderRadius: 85,
                  backgroundColor: '#E96400',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#fff',
                  borderWidth: 2,
                }}>
                <Image
                  source={require('../../../assets/frontend/wp-content/uploads/2017/05/Bananas.png')}
                  style={{width: 130, height: 130, padding: 5}}
                  resizeMode={'contain'}
                />
              </View>
            </View>
            <View style={styles.pageStyle} key="2">
              <View
                style={{
                  width: 170,
                  height: 170,
                  borderRadius: 85,
                  backgroundColor: '#E96400',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#fff',
                  borderWidth: 2,
                }}>
                <Image
                  source={require('../../../assets/frontend/wp-content/uploads/2016/03/pineapple.png')}
                  style={{width: 130, height: 130, padding: 5}}
                  resizeMode={'contain'}
                />
              </View>
            </View>
            <View style={styles.pageStyle} key="3">
              <View
                style={{
                  width: 170,
                  height: 170,
                  borderRadius: 85,
                  backgroundColor: '#E96400',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#fff',
                  borderWidth: 2,
                }}>
                <Image
                  source={require('../../../assets/frontend/wp-content/uploads/2016/03/Lemon.png')}
                  style={{width: 130, height: 130, padding: 5}}
                  resizeMode={'contain'}
                />
              </View>
            </View>
          </ViewPagerAndroid>
          <View style={{width: width, height: 1, backgroundColor: '#fff'}} />
          <View style={{padding: 15}}>
            <Text style={{fontSize: 21, color: '#fff'}}>
              {this.products[this.state.curProject].name}
            </Text>
            <Text style={{fontSize: 18, color: '#fff', marginTop: 10}}>
              {this.products[this.state.curProject].description}
            </Text>
          </View>
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
    textAlign: 'center',
    marginTop: 10,
  },
  viewPager: {
    height: height - 102,
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
  groupBtn: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '70%',
    alignSelf: 'center',
  },
  viewPagerProjects: {
    height: 550,
  },
  titleProject: {
    height: 100,
    width: width,
    backgroundColor: '#9DBA76',
  },
  contentProject: {
    height: 300,
    width: width,
    backgroundColor: 'red',
  },
  footerProject: {
    height: 150,
    width: width,
  },
  about: {
    width: width,
    height: 400,
  },
  footer: {
    backgroundColor: '#E6E6E6',
    padding: 15,
  },
});

export default Home;
