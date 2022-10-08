import Adress from "./component/profile/Address";
import FullName from "./component/profile/FullName";
import ProfilePhoto from "./component/profile/ProfilePhoto";

function App() {
  return (

  <div className="card"style={{textAlign: "center", display: "flex",backgroundColor:'orange' ,position:'center' ,marginLeft : '600px', marginTop : '50px',marginButtom : '20px' ,marginRight : '600px',width: '1050px' }} >
   <ProfilePhoto />
  <FullName />
  <Adress />
    
  
  </div>
  );
}


    


export default App;
