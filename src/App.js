import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Chat from './components/Chat';
import React, { useState } from 'react';

const App = () => {
  const [showContent, setShowContent] = useState(true);

  const handleHideContent = () => {
    setShowContent(false);
  };

  return (
    <div id="wrapper">
      <Header onHideContent={handleHideContent} />
      {/* Render Slider and Content conditionally based on showContent state */}
      {showContent && (
        <div>
          <Slider />
          <div id="container">
            <Content />
            <Sidebar />
          </div>
        </div>
      )}
      <Footer />
      <Chat />
    </div>
  );
};

export default App;

// const App = () => {
//   const [showContent, setShowContent] = useState(true);

//   const handleHideContent = () => {
//     setShowContent(false);
//   };

//   return (
//     <div>
//       <Header onHideContent={handleHideContent} />
//       {/* Render Slider and Content conditionally based on showContent state */}
//       {showContent && (
//         <div>
//           <Slider />
//           <Content />
//         </div>
//       )}
//       <Footer />
//       <Chat />
//     </div>
//   );
// };

// export default App;
