/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Header, Text, Content, H3, Grid, Row, Col, Input} from 'native-base';
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

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../../../assets/frontend/wp-content/uploads/2017/11/PANAMA-PNES2.png')}
          style={styles.container}>
          <Header style={styles.header}>
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
            <View style={{height: height / 2}} />
          </Content>
        </ImageBackground>
        <View style={{backgroundColor: '#948c8b'}}>
          <Image
            source={require('../../../assets/frontend/wp-content/uploads/2016/11/Panama-Golden-Pineapple-Logo-2.jpg')}
            style={{
              width: 150,
              height: 150,
              borderWidth: 5,
              borderRadius: 75,
              borderColor: 'rgba(255,255,255,0.5)',
              alignSelf: 'center',
            }}
            resizeMethod={'scale'}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 15,
            }}>
            <View>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: '#E96400',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#fff',
                  borderWidth: 2,
                }}>
                <Image
                  source={require('../../../assets/frontend/wp-content/uploads/2016/03/pineapple.png')}
                  style={{width: 80, height: 80, padding: 5}}
                  resizeMode={'contain'}
                />
              </View>
              <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
                Trái dứa
              </Text>
            </View>
            <Image
              source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/bg_empty_products.png')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode={'contain'}
            />
            <Image
              source={require('../../../assets/frontend/wp-content/themes/farmfolio/img/bg_empty_products.png')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <View style={{width: width - 50, backgroundColor: '#66ac00'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                padding: 20,
                textAlign: 'center',
              }}>
              TÀI TRỢ
            </Text>
          </View>
          <View
            style={{
              width: width - 50,
              backgroundColor: '#66ac00',
              marginTop: 15,
              padding: 20,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Dứa vàng Panama
            </Text>
            <Text
              style={{
                fontSize: 16,
              }}>
              La Chorrera, Panama
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#ebebeb', margin: 20, padding: 5}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>TỔNG QUAN</Text>
          <Text style={{fontSize: 20, fontStyle: 'italic'}}>
            Dứa cao cấp chỉ cách kênh đài Panama 40 phút
          </Text>
          <Text style={{fontSize: 18, paddingTop: 10}}>
            Giống dứa vàng phổ biến của Panama là một người chiến thắng đã được
            chứng minh tại nơi bán lẻ, đã mất nhiều năm phát triển để đạt được
            màu sắc, hương vị và thời hạn sử dụng lý tưởng. Được trồng gần hồ
            Gatun huyền thoại của kênh đào Panama, 117ha của chúng tôi sản xuất
            dứa đại diện tốt nhất của đát nước xuất khâu nông sản
          </Text>
          <Text style={{fontSize: 18, paddingTop: 10}}>
            Đồn điền được tạo thành từ 52.3ha đất có mẫu và 65.4ha tài sản cho
            thuê với tổng số 117.7ha trong tổng diện tích đâts nông nghiệp. Giả
            sử 46ha sản luọng đầy đủ hàng năm, đồn điển sẽ sản xuất 312,000 hộp
            dứa siêu chất lượng xất khẩu mỗi năm. Nhà điều hành VERBA ODREC S.A
            có một cơ sở tại chỗ và chỉ cahcs Cảng Balboa ở lối vào Thái Bình
            Dương đến kênh đài Panama chỉ 40 phút
          </Text>
          <H3 style={{paddingTop: 10, paddingBottom: 10}}>Kết luận</H3>
          <Grid style={{padding: 10}}>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Giá cổ phiếu</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>$1,000</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Số lượng cổ phiếu</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>2,200</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Tổng vốn đầu tư</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>$2,200,000,000</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>
                  Năng xuất trung bình 10 năm
                </Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>18.67%</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Tổng lợi nhuận 20 năm</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>168%</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>IRR</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>18.64%</Text>
              </Col>
            </Row>
          </Grid>
        </View>
        <View style={{backgroundColor: '#ebebeb', margin: 20, padding: 5}}>
          <H3 style={{paddingTop: 10, paddingBottom: 10}}>Đánh giá</H3>
          <Grid style={{padding: 10}}>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Tỉ lệ</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>Điểm</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>AAA</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>10</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>AA</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>9</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>A</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>8</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>BBB</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>7</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>BB</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>6</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>B</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>5</Text>
              </Col>
            </Row>
          </Grid>
        </View>
        <View style={{backgroundColor: '#ebebeb', margin: 20, padding: 5}}>
          <H3 style={{paddingTop: 10, paddingBottom: 10}}>Lịch sử</H3>
          <H3 style={{fontSize: 16, fontWeight: 'bold'}}>
            Edna Vergara (La Dona)
          </H3>
          <Image
            source={require('../../../assets/frontend/wp-content/uploads/2016/11/Edna-Vergara.png')}
            style={{width: 200, height: 200}}
          />
          <Text style={{fontSize: 18, paddingTop: 10}}>
            Edna Vergara là người tiên phong trong xuất khẩu dứa ở Panama với
            nhiều thập kỷ kinh nghiệm trong lĩnh vực kinh doanh nông sản Mỹ
            Latinh. Năm 1977, Edna Vergara bắt đầu hành trình nông nghiệp của
            mình với một ha đất và một tầm nhìn sẽ thay đổi cảnh quan của nền
            nông nghiệp Panama mãi mãi. Vốn là một nông dân chăn nuôi gia cầm
            cùng chồng, Edna bắt đầu thử nghiệm một số loại trái cây và rau quả
            kỳ lạ trên một dải đất nhỏ ở ngoại ô Panama. Hầu hết các sản phẩm đã
            được bán tại các chợ nông dân và số tiền thu được được sử dụng để
            duy trì hoạt động. Sau vài mùa, Edna đọc về một loại dứa mới đang
            được xuất khẩu ra khỏi Costa Rica, đó là MD-2
          </Text>
          <Text style={{fontSize: 18, paddingTop: 10}}>
            Biết rằng các giống dứa hiện tại không thể duy trì được chuyến tàu
            dài tới thị trường nước ngoài, Edna bắt đầu vận động chính phủ
            Panama để cho cô thử nghiệm với MD-2 tại trang trại của mình. Hai
            năm sau, cô được sự chấp thuận và doanh nghiệp xuất khẩu dứa ra
            đời..
          </Text>
          <Text style={{fontSize: 18, paddingTop: 10}}>
            Trong suốt 25 năm tiếp theo, Edna tổ chức và phát triển kinh doanh
            cùng với 55 người trồng địa phương, sẽ tiếp tục xây dựng cơ sở xuất
            khẩu dứa đầu tiên ở Panama. Sáng tạo Edna sườn sẽ tiếp tục thu hút
            các công ty đa quốc gia và tạo ra một phong trào khiến Panama trở
            thành một trong những nhà sản xuất dứa hàng đầu ở Trung Mỹ. Năm
            2007, Edna là người phụ nữ đầu tiên của Nhân viên Nông nghiệp Panama
            của năm. Cô tiếp tục dẫn đầu sự phát triển của phong trào nông
            nghiệp Panama, với tư cách là chủ tịch Hiệp hội xuất khẩu quốc gia.
            Câu chuyện của cô đã truyền cảm hứng cho hàng trăm phụ nữ và nông
            dân địa phương phát triển hơn nữa và đẩy Panama lên hàng đầu trong
            xuất khẩu nông sản trong khi vẫn duy trì các phương pháp thân thiện
            với môi trường
          </Text>

          <H3>Profile Highlights</H3>
          <Text style={{fontSize: 18, paddingTop: 10}}>
            {'\u2022'} Năm 2002, Vergara đã làm việc với chính phủ Panama để đưa
            hạt giống dứa vàng (MD2) đầu tiên vào nước này từ các hoạt động của
            Dole-Del Monte ở Costa Rica. Năm 2006, Vergara đã phát triển nhà
            đóng gói trái cây đầu tiên ở khu vực Panama Ch Laera và đảm bảo
            Chứng nhận Nhà xuất khẩu Toàn cầu, là tiêu chuẩn ngành công nghiệp
            cho xuất khẩu rau quả trên toàn thế
          </Text>
          <Text style={{fontSize: 18, paddingTop: 8}}>
            {'\u2022'} vào năm 2007, Vergara trở thành nữ chiến thắng đầu tiên
            của Người nông nghiệp giải thưởng năm.
          </Text>
          <Text style={{fontSize: 18, paddingTop: 8}}>
            {'\u2022'} vào năm 2007, Vergara trở thành nữ chiến thắng đầu tiên
            của Người nông nghiệp giải thưởng năm.
          </Text>
          <H3>Certificates</H3>
          <Text style={{fontSize: 18, paddingTop: 10}}>
            <Image
              source={require('../../../assets/frontend/wp-content/uploads/2016/11/cb_logo.png')}
              style={{width: 200, height: 197}}
            />
            Verba Odrec SA proudly partners with international institutions in
            order to maintain friendly environmental processes as well as a fair
            labor approach, thus creating holistic connections with the land,
            the environment, and its people.
          </Text>
        </View>
        <View style={{backgroundColor: '#ebebeb', margin: 20, padding: 5}}>
          <H3>Tóm tắt về quan hệ đối tác hạn chế và sử dụng vốn</H3>
          <Text style={{fontSize: 18, paddingTop: 10}}>
            Cấu trúc Đối tác hạn chế đã được thành lập với tư cách là Đối tác
            Hạn chế của Đảo Cayman với mục đích mua lại và phát triển tổng cộng
            117 ha Dứa MD-2 nằm ở vùng Chorrera của Cộng hòa Panama. Tổ chức này
            tìm cách huy động 2.200.000 đô la từ các nhà đầu tư để có 62% cổ
            phần trong LP. Các thành viên khác của LP bao gồm Edna Vergara (28%)
            và Farm portfolio LTD (10%). Đối tác chung, Farm portfolio LTD, đã
            ký hợp đồng với Verba Odrec SA, một công ty quản lý trang trại của
            Panama cho các hoạt động hàng ngày của việc trồng và phân phối sản
            phẩm.
          </Text>
          <Image
            source={require('../../../assets/frontend/wp-content/uploads/2016/11/cb_logo.png')}
            style={{width: 200, height: 197}}
          />
          <Text style={{fontSize: 18, paddingTop: 10}}>
            The project structure will give cả nhà đầu tư Mỹ và quốc tế cơ hội
            đầu tư thông qua thuế phương tiện ngoài khơi thân thiện có trụ sở
            tại Quần đảo Cayman. Thực thể Cayman sẽ là được sử dụng để có được
            52,3 ha tài sản có tiêu đề từ VERBA ODREC S.A. và cho thuê thêm 65,4
            ha liền kề với tùy chọn mua tại $ 4,00 mỗi mét vuông, cộng với giá
            lạm phát 5%. Gia đình điều hành, là ai cũng là chủ đất hiện tại, sẽ
            cam kết vốn chủ sở hữu trong tài sản có tiêu đề cho một 28% cổ phần
            của Cayman Investor Corp Trang trại sẽ trồng và thu hoạch 117,7 ha
            cỡ 6 và 7 quả dứa siêu cao cấp trong 10 năm. Vào cuối của Chu kỳ 10
            năm, một cơ hội mua lại sẽ trở thành có thể thực hiện được cho các
            nhà đầu tư lợi nhuận gốc, sẽ mang lại 168% tổng lợi tức đầu tư.
          </Text>
          <H3 style={{paddingTop: 10, paddingBottom: 10}}>Phần trăm dự án</H3>
          <Grid style={{padding: 10}}>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Cổ đông</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>Nhà đầu tư</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Tiền %</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>62%</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Cổ đông</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>Gia đình</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Tiền %</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>28%</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Cổ đông</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>Farmfolio</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Tiền %</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>10%</Text>
              </Col>
            </Row>
          </Grid>
        </View>
        <View style={{backgroundColor: '#ebebeb', margin: 20, padding: 5}}>
          <H3 style={{paddingTop: 10, paddingBottom: 10}}>Sử dụng vốn</H3>
          <Grid style={{padding: 10}}>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Cung cấp đất trồng</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>Trả nợ</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>21.45%</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>15.98%</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Cung cấp đất trồng</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>Gia đình mua đất</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>21.45%</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>15.98%</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>Cung cấp đất trồng</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>Phí phát triển</Text>
              </Col>
            </Row>
            <Row>
              <Col style={[{backgroundColor: '#e0e8d0'}, styles.col]}>
                <Text style={{textAlign: 'center'}}>21.45%</Text>
              </Col>
              <Col style={[styles.col]}>
                <Text style={{textAlign: 'center'}}>12.11%</Text>
              </Col>
            </Row>
          </Grid>
        </View>
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
    backgroundColor: '#000',
    opacity: 0.9,
    height: 70,
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
  },
  text: {
    color: 'white',
  },
  col: {
    padding: 20,
  },
  footer: {
    backgroundColor: '#E6E6E6',
    padding: 15,
  },
});

export default Detail;
