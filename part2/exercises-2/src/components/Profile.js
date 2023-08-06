import './styles.css';
import Button from './Button';
import oceans from './oceans.json'

const listItem = oceans.map(ocean =>
   <div key={ocean.id} className={`${ocean.fishCheck === 'true' ? "isAFish" : "profile"}`}>
      <h2> {ocean.name} </h2>
      <img src={ocean.image} alt={ocean.name} classname="img"/>
      <h3> Fun Facts: </h3>
         <ul>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
            <Button />
         </ul>
   </div>
);

function Profile()
{
   return(
      <ul>
         {listItem}
      </ul>
   );
}

export default Profile;