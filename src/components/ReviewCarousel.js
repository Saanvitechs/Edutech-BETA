// import React from 'react';
// import Slider from 'react-slick';
// import './Home.css'; // Add your styling here

// const ReviewCarousel = () => {
//   const reviews = [
//     {
//       name: "Shrey Agrawal",
//       position: "Power Programmer at Infosys",
//       review: "My first experience with O(1) coding club was from their first seminar and since then, I have nothing but good things to say. From their guidance relating to placements, both on and off campus, to their CPL, everything important was explained and helped in becoming better programmers.",
//       image: "path-to-shrey-image",
//     },
//     {
//       name: "Pranav Manbhekar",
//       position: "Software Engineering at Pivotal",
//       review: "CPI and various knowledge sessions helped me in my competitive coding and interview preparation. O(1) was quite helpful as it helped to improve competitive coding in a fun way and it also improved coding culture.",
//       image: "path-to-pranav-image",
//     },
//     {
//       name: "Sudhanshu Bhogal",
//       position: "SDE-1 at Amazon",
//       review: "I took part in Coding Premier League and multiple Competitive Coding Sprint contests organized by O(1) Coding Club. Before attending these events I was not able to solve even very simple coding problems. After receiving proper guidance, I improved a lot in few months.",
//       image: "path-to-sudhanshu-image",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0',
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="review-carousel">
//       <h2>Stories to Inspire</h2>
//       <Slider {...settings}>
//         {reviews.map((review, index) => (
//           <div key={index} className="review-card">
//             <div className="review-content">
//               <p>"{review.review}"</p>
//               <div className="review-author">
//                 <img src={review.image} alt={review.name} className="review-author-image" />
//                 <h3>{review.name}</h3>
//                 <p>{review.position}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ReviewCarousel;

import React from 'react';
import Slider from 'react-slick';
import './Home.css'; // Add your styling here

const ReviewCarousel = () => {
  const reviews = [
    {
      name: "Shrey Agrawal",
      // position: "Power Programmer at Infosys",
      review: "My first experience with TREx was from their first seminar and since then, I have nothing but good things to say. From their guidance relating to placements, both on and off campus, to their CPL, everything important was explained and helped in becoming better programmers.",
    
    },
    {
      name: "Pranav Manbhekar",
      // position: "Software Engineering at Pivotal",
      review: "CPI and various knowledge sessions helped me in my competitive coding and interview preparation. TREx was quite helpful as it helped to improve competitive coding in a fun way and it also improved coding culture.",
      
    },
    {
      name: "Sudhanshu Bhogal",
      // position: "SDE-1 at Amazon",
      review: "I took part in Coding Premier League and multiple Competitive Coding Sprint contests organized by TREx. Before attending these events I was not able to solve even very simple coding problems. After receiving proper guidance, I improved a lot in few months.",
      
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className="review-carousel">
      <h2>Stories to Inspire</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-content">
              <p>"{review.review}"</p>
              <div className="review-author">
                <h3>{review.name}</h3>
                <p>{review.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
