// import React from 'react';
// import Slider from 'react-slick';
// import './Home.css'; // Add your styling here

// const ReviewCarousel = () => {
//   const reviews = [
//     {
//       name: "Shrey Agrawal",
//       review: "My first experience with TREx was from their first seminar and since then, I have nothing but good things to say. From their guidance relating to industrial standards, on technical aspects, everything important was explained and helped in becoming better programmers.",
//     },
//     {
//       name: "Pranav Manbhekar",
//       // position: "Software Engineering at Pivotal",
//       review: "Fantastic and various knowledge sessions helped me in my competitive coding and interview preparation. TREx was quite helpful as it helped to improve java development skills in a fun way and it also improved my coding culture.",
      
//     },
//     {
//       name: "Sudhanshi Bhogal",
//       // position: "SDE-1 at Amazon",
//       review: "I took part in Courses developed and organized by TREx. Before taking these plans I was not able to solve even very simple coding problems. After receiving proper guidance, I improved a lot in few months.",
      
//     },
//     {
//       name: "Ananya Mishra",
//       review: "TREx has completely changed my perspective on learning. The structured approach and practical insights offered by their sessions have significantly improved my understanding of industry practices. The mentors are truly invested in your success.",
//     },
//     {
//       name: "Rahul Verma",
//       review: "Joining TREx was one of the best decisions I made during my career transition. The guidance and support provided throughout the training were exceptional. The real-world examples used in teaching were particularly helpful in bridging the gap between theory and practice.",
//     },
//     {
//       name: "Priya Kapoor",
//       review: "TREx offers an incredible learning experience. The sessions are well-organized, and the trainers are industry experts who share valuable knowledge. The hands-on approach really helped me apply what I learned and gain confidence in my skills.",
//     },
//     {
//       name: "Saurabh Singh",
//       review: "The TREx team is amazing! They are passionate about teaching and provide all the resources needed to succeed. The combination of theory and practical work made learning enjoyable and effective. I highly recommend TREx to anyone looking to advance their career.",
//     },
//     {
//       name: "Kavya Sharma",
//       review: "What I love about TREx is their commitment to providing top-notch education. The instructors are knowledgeable and approachable, making the learning process smooth and enjoyable. The focus on real-world applications has made a huge difference in my professional growth.",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: false,
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
//           centerMode: false,
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
      review: "My first experience with TREx was from their first seminar and since then, I have nothing but good things to say. From their guidance relating to industrial standards, on technical aspects, everything important was explained and helped in becoming better programmers.",
    },
    {
      name: "Pranav Manbhekar",
      review: "Fantastic and various knowledge sessions helped me in my competitive coding and interview preparation. TREx was quite helpful as it helped to improve java development skills in a fun way and it also improved my coding culture.",
    },
    {
      name: "Sudhanshi Bhogal",
      review: "I took part in Courses developed and organized by TREx. Before taking these plans I was not able to solve even very simple coding problems. After receiving proper guidance, I improved a lot in few months.",
    },
    {
      name: "Ananya Mishra",
      review: "TREx has completely changed my perspective on learning. The structured approach and practical insights offered by their sessions have significantly improved my understanding of industry practices. The mentors are truly invested in your success.",
    },
    {
      name: "Rahul Verma",
      review: "Joining TREx was one of the best decisions I made during my career transition. The guidance and support provided throughout the training were exceptional. The real-world examples used in teaching were particularly helpful in bridging the gap between theory and practice.",
    },
    {
      name: "Priya Kapoor",
      review: "TREx offers an incredible learning experience. The sessions are well-organized, and the trainers are industry experts who share valuable knowledge. The hands-on approach really helped me apply what I learned and gain confidence in my skills.",
    },
    {
      name: "Saurabh Singh",
      review: "The TREx team is amazing! They are passionate about teaching and provide all the resources needed to succeed. The combination of theory and practical work made learning enjoyable and effective. I highly recommend TREx to anyone looking to advance their career.",
    },
    {
      name: "Kavya Sharma",
      review: "What I love about TREx is their commitment to providing top-notch education. The instructors are knowledgeable and approachable, making the learning process smooth and enjoyable. The focus on real-world applications has made a huge difference in my professional growth.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
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
      },
      {
        breakpoint: 480, // For very small screens
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: false, // Hide dots on very small screens
          arrows: false, // Hide arrows on very small screens
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
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
