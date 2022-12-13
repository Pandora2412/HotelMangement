import './Home.css';
import CardDV from "../components/CardDV";
import CardDP from "../components/CardDP";
import Gallery from '../components/Gallery';

const Home =() =>{
    const CardDVList=[
        {
          name: 'HỒ BƠI',
          des1: 'Hồ bơi hiện đại',
          des2: 'Miễn phí vé vào',
          des3: 'Đảm bảo an toàn',
          img: 'hoboi'
        },
        {
          name: 'NHÀ HÀNG',
          des1: 'Đa dạng các loại món ăn',
          des2: 'Nguyên liệu đảm bảo',
          des3: 'Phục vụ 24/7',
          img: 'nhahang'
        },
        {
          name: 'SPA',
          des1: 'Không gian thư giãn, thoải mái',
          des2: 'Giải tỏa căng thẳng',
          des3: 'Phục vụ các loài trà đặc biệt',
          img: 'spa'
        },
        {
          name: 'BAR',
          des1: 'Nhiều loại hình giải trí',
          des2: 'Đa dạng nước uống',
          des3: 'Không gian thoáng mát',
          img: 'bar'
        },
      ]
    
      const CardDPList=[
        {
          price: '500.000 VND/ngày',
          roomName: 'STANDARD ROOM',
          room: 'Phòng tiêu chuẩn',
          img: 'standard'
        },
        {
          price: '1.000.000 VND/ngày',
          roomName: 'SUSPERIOR ROOM',
          room: 'Phòng cao cấp',
          img: 'susperior'
        },
        {
          price: '2.000.000 VND/ngày',
          roomName: 'VIP ROOM',
          room: 'Phòng VIP',
          img: 'vip'
        },
    ]
    return(
        <>
          <div className="container-fluid home" style={{padding: '0px', width: '100%', margin: '0px'}}>
            {/* CAC LOAI DICH VU */}
            <div className='dv'>
              <div className="container-fluid" id="dichvu"> 
                <div className="row"> 
                    <div className="col-3"> <h1 className="float-end">Các loại dịch vụ</h1> </div>
                    <div className="col-6 line"> </div>
                </div>
              </div>
              <div className="container-fluid" id="anhdichvu"> 
                <div className="row">
                        {
                        CardDVList.map((item) => (
                            <div className="col-3 d-flex justify-content-center">
                            <CardDV name={item.name} des1={item.des1} des2={item.des2} des3={item.des3} img={item.img}></CardDV>
                            </div>
                        ))
                        }
                </div>
              </div>
            </div>

            {/* CAC LOAI PHONG */}
            <div className='cacloaiphong'>
                <div className="container-fluid" id="loaiphong"> 
                  <div className="row"> 
                      <div className="col-3"> <h1 className="float-end">Các loại phòng</h1> </div>
                      <div className="col-6 line"> </div>
                  </div>
                </div>

                <div className="container-fluid" id="anhloaiphong">
                <div className="row justify-content-center">
                    {
                        CardDPList.map((item) => (
                        <div className="col-4 d-flex justify-content-center">
                            <CardDP price={item.price} roomName={item.roomName} room={item.room} img={item.img}></CardDP>
                        </div>
                        ))
                    }
                </div>
                </div>
            </div>

            {/* Gallery */}
            <Gallery></Gallery>

          </div>
        </>
    );
}

export default Home;