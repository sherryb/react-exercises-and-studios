import './styles.css';

function onLearnMore() {
   alert("Oh, hello, do you hear that? The sticky sound, as clear as day. Slip, slop... Drip, drop, slip, slop... How extraordinary. Do you think the water drips, even down deep below at the bottom of the sea? Can you hear it? Drip, drop, slip, slop... *maniacal chuckling* ")
}

function Button() {

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}



export default Button;