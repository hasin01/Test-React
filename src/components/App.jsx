import { FetchImages } from './Section';
import { Rection } from "./Rection2";
import userData from '../users.json'


export const App = () => {

 
  

  return (
<>
<div className="sectionapp">
 {userData.map(user =>(

<Rection key = {user.id} name ={user.name} surname ={user.surname} age ={user.age}/>


 ))}




</div>
<fetchImages/>
</>

  );
};
