import {useState} from 'react';
import './App.css';
import Tours from './components/Tours';

const toursData = [
{ 
  id: 1,
  tourImgLink: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Holidays_w_200_h_200_c_fill_g_auto_q_auto:good_f_jpg/v1433747706/Gulmarg_2.jpg",
  nameOftheTour: "Dubai",
  tourDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque vel eos ipsum fuga nihil consequuntur hic sit facilis consectetur illum sequi magnam, reiciendis ut provident repudiandae veritatis libero quisquam natus temporibus molestiae, nisi odio velit. Vitae cupiditate expedita quos.",
},
{ 
  id: 2,
  tourImgLink: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Holidays_w_200_h_200_c_fill_g_auto_q_auto:good_f_jpg/v1424845914/Domestic%20Holidays/Jammu%20and%20Kashmir/Miscellaneous/J_AND_K_7.jpg",
  nameOftheTour: "mauritius",
  tourDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque vel eos ipsum fuga nihil consequuntur hic sit facilis consectetur illum sequi magnam, reiciendis ut provident repudiandae veritatis libero quisquam natus temporibus molestiae, nisi odio velit. Vitae cupiditate expedita quos."
},
{ 
  id: 3,
  tourImgLink: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Holidays_w_200_h_200_c_fill_g_auto_q_auto:good_f_jpg/v1463145287/Munnar_overview3.jpg",
  nameOftheTour: "Bali",
  tourDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque vel eos ipsum fuga nihil consequuntur hic sit facilis consectetur illum sequi magnam, reiciendis ut provident repudiandae veritatis libero quisquam natus temporibus molestiae, nisi odio velit. Vitae cupiditate expedita quos."
},
]


function App() {
  const [ownToursData, setOwnToursData] = useState(toursData);
  
   function removeTour(currId){
    const filteredToursData = ownToursData.filter((tour) => tour.id !== currId);
      setOwnToursData(filteredToursData);
   }

  return (
    <>
    <div style={{
      display: "flex",
      gap:"30px"
    }}>
      {
        ownToursData.map( (tour) => {
          return(
            <Tours tour={tour} removeTour={removeTour}/>
          )
        })
      }
    </div>
    </>
  )
}

export default App;
