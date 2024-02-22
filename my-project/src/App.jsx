// import React, { useEffect, useState } from 'react'


// import image1 from "./assets/image1.png";
// import image2 from "./assets/image2.png";
// import image3 from "./assets/image3.png";
// import image4 from "./assets/image4.png"

// const App = () => {
//   const [images , setImages]=useState([
//     'image1',
//     'image2',
//     'image3',
//     'image4'


//   ]);
//   const [currentIndex, setCurrentIndext]=useState (0);

//   useEffect(()=>{
//     const intervalId =setInterval(()=>{
//       setCurrentIndext((prevIndex)=>(prevIndex + 1) % images.length);
//     },15000);
//     return ()=>clearInterval(intervalId);
//   },[images.length]);
//   return (
//     <div className='image-carousel'>
//         {images.map((image, index)=>(
//           <img
//           key={index}
//           src={image}
//           alt={'image1 ${index + 1}'}
//           style={{display : index === currentIndex ?'block':'none'}}
//           />          
//         ))}
//     </div>
//   );
// };

// export default App



import React, { useEffect, useState } from 'react';

import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";

const App = () => {
  const [images, setImages] = useState([image1, image2, image3, image4]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className='image-carousel'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
};

export default App;




















