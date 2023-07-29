export default function BookList() {
   let pageTitle = "books";
   let book1 = "https://target.scene7.com/is/image/Target/GUEST_c9f49c3e-365e-4aae-a80d-114fb5c496c3?wid=1437&hei=1437&fmt=pjpeg"
   let book2 = "https://m.media-amazon.com/images/I/91PECfAcJgL.jpg";
   let book3 = "https://colorem.files.wordpress.com/2016/09/william-yates.jpg?w=761&h=1024";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Storm Front" />
         <img src={book2} alt="book about magic" />
         <img src={book3} alt="a poet" />
      </div>      
   );
}