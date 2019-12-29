/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Header, Text, Content, Accordion, Input} from 'native-base';
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

class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.step = [
      {
        id: 0,
        name: 'Tạo hồ sơ nông dân / nhà phát triển',
        description: [
          'Hồ sơ nông dân / nhà phát triển',
          'Kinh nghiệm nông dân / nhà phát triển',
          'Dự án trước của nông dân / nhà phát triển',
        ],
      },
      {
        id: 1,
        name: 'Gửi dự án',
        description: [
          'Hoàn thành bảng câu hỏi trực tiếp ban đầu',
          'Gửi ảnh',
          'Giải thích vốn cần thiết cho dự án',
        ],
      },
      {
        id: 2,
        name: 'Dự án do siêng năng',
        description: [
          'Nhóm của chúng tôi đánh giá mỗi bài nộp',
          'Khi sàn lọc ban đầu bên thứ ba của chúng tôi sẽ đến thăm nhóm bất động sản và xem tính khả thi',
        ],
      },
      {
        id: 3,
        name: 'Phê duyệt và khởi chạy trên nền tảng Farmfolio',
        description: [
          'Bảng hạn đươc lập và dự án được đưa ra và được tiếp thị cho mạng lưới nhà đầu tư của chúng tôi',
        ],
      },
      {
        id: 4,
        name:
          'Tài trợ khi bát đầu ngay khi kí quỹ tối thiểu được đáp ứng từ các nhà đầu tư',
        description: [
          'Khi nhận được kí quỷ tối thiểu chúng tôi sẽ giải phóng tài trợ ban đầu cho dự án',
        ],
      },
      {
        id: 5,
        name: 'Thanh toán tự động và báo cáo',
        description: [
          'Farmfolio thu các khoản thanh toán và phân phối cổ tức hoặc trả lãi cho các nhà đầu tư',
        ],
      },
    ];
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
  }
  _renderHeaderdata = data => {
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
  _renderContentdata = data => {
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
  _renderHeader = data => {
    return (
      <View
        style={{
          width: width,
          height: 50,
          borderBottomColor: '#6d9a13',
          borderBottomWidth: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 20,
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderWidth: 1,
            borderRadius: 15,
            alignItems: 'center',
          }}>
          <Text
            style={{textAlign: 'center', fontWeight: '700', color: '#6d9a13'}}>
            {data.id + 1}
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            justifyContent: 'center',
            paddingLeft: 5,
            fontWeight: '700',
            color: '#6d9a13',
          }}>
          {data.name}
        </Text>
      </View>
    );
  };
  _renderContent = data => {
    return (
      <View
        style={{
          padding: 20,
        }}>
        <View style={{borderWidth: 1, padding: 15, borderColor: '#607c22'}}>
          {data.description.map(item => (
            <Text style={{textAlign: 'left', color: '#6d9a13'}}> - {item}</Text>
          ))}
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../../../assets/frontend/wp-content/uploads/2016/01/WaterColor31.jpg')}
          style={styles.container}>
          <ImageBackground
            source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/pathern.png')}
            style={{width: width, height: '100%'}}
            resizeMode="cover">
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
              <View
                style={{
                  height: height,
                  alignItems: 'center',
                  top: '20%',
                }}>
                <Text style={{color: '#fff', fontSize: 18, marginBottom: 20}}>
                  Nông dân - Chủ vườn - Nhà phát triển
                </Text>
                <View
                  style={{width: 50, height: 10, backgroundColor: '#607C22'}}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 40,
                    fontWeight: 'bold',
                    marginTop: 20,
                  }}>
                  Cách hoạt động
                </Text>
              </View>
            </Content>
          </ImageBackground>
        </ImageBackground>
        <Accordion
          dataArray={this.step}
          expanded={0}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
        <ImageBackground
          source={require('../../../assets/frontend/wp-content/uploads/2016/01/SupplyChainDark.jpg')}
          style={{width: width}}>
          <View style={{paddingTop: 30, paddingLeft: 10}}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 19,
              }}>
              Khi dự án của bạn được tài trợ, chúng tôi sẽ xử lý quản lý nhà đầu
              tư và tự động hóa phân phối cổ đông để bạn có thể tập trung vào
              những gì bạn làm tốt nhất - Nuôi trồng.
            </Text>
            <Text
              style={{
                color: '#fff',
                textAlign: 'justify',
                fontSize: 18,
                paddingLeft: 10,
                paddingRight: 20,
                paddingTop: 15,
                paddingBottom: 20,
              }}>
              Mỗi dự án được thành lập như một thực thể riêng và cổ phần của
              thực thể được phát hành dựa trên quy mô của dự án. Khi cổ phiếu
              ban đầu được phát hành, chúng bị giới hạn và không thể bị pha
              loãng. Farm portfolio sẽ đóng vai trò là tổng giám đốc của dự án
              nhằm đảm bảo quản lý và phục vụ cổ đông đúng cách. Cổ tức sẽ được
              chi trả khi lợi nhuận được nhận và các cổ đông sẽ có cơ hội bán
              lại cổ phiếu trên sàn giao dịch Farmlist sau khi đạt được thời
              gian nắm giữ tối thiểu.
            </Text>
          </View>
        </ImageBackground>
        <Accordion
          dataArray={this.dataArray}
          expanded={0}
          renderHeader={this._renderHeaderdata}
          renderContent={this._renderContentdata}
        />
        <ImageBackground
          source={require('../../../assets/frontend/wp-content/uploads/2016/01/LimeFarm-1.jpg')}
          style={{width: width, height: 250}}>
          <ImageBackground
            source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/pathern.png')}
            style={{width: width, height: '100%', alignItems: 'center'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 24,
                width: (width * 2) / 3,
                textAlign: 'center',
                marginTop: 20,
              }}>
              Tương lai của{' '}
              <Text style={{color: '#fff', fontSize: 26, fontWeight: 'bold'}}>
                đầu tư nông nghiệp
              </Text>{' '}
              là đây
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 19,
                textAlign: 'center',
              }}>
              bắt đầu dự án mới của bạn ngay hôm nay
            </Text>
            <TouchableOpacity
              style={{
                width: 200,
                backgroundColor: '#4D8E42',
                padding: 10,
                borderRadius: 100,
                marginTop: 40,
                opacity: 0.7,
                borderColor: '#fff',
                borderWidth: 2,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: 20,
                }}>
                TẠO HỒ SƠ
              </Text>
            </TouchableOpacity>
          </ImageBackground>
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
    width: width,
    height: (height * 2) / 3,
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

export default HowItWorks;
