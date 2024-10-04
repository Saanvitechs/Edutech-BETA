// // src/TopicContent.js

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const TopicContent = () => {
//   const { topicName } = useParams(); // Extract topic name from URL params
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     // Generate the path dynamically based on the topic name
//     const fetchTopicContent = async () => {
//       try {
//         const response = await fetch(`./topics/${topicName}.html`);
//         const data = await response.text();
//         setContent(data);
//       } catch (error) {
//         console.error('Error loading topic content:', error);
//       }
//     };

//     fetchTopicContent();
//   }, [topicName]);

//   return (
//     <div>
//       <h2>{topicName.replace(/-/g, ' ').toUpperCase()}</h2>
//       <div dangerouslySetInnerHTML={{ __html: content }} />
//     </div>
//   );
// };

// export default TopicContent;

// src/components/TopicContent.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TopicContent = () => {
  const { topicName } = useParams(); // Extract the topic name from the URL
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchTopicContent = async () => {
      try {
        // Path to the HTML file in the public folder
        const response = await fetch(`/topics/${topicName}.html`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.text();
        setContent(data);
      } catch (error) {
        console.error('Error loading topic content:', error);
        setContent('<p>Content not found</p>'); // Set a fallback message if the file isn't found
      }
    };

    fetchTopicContent();
  }, [topicName]);

  return (
    <div>
      <h2>{topicName.replace(/-/g, ' ').toUpperCase()}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default TopicContent;
