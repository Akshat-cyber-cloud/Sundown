import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import FixedImage from './components/FixedImage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Footer from './components/Footer';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showFixedImage, setShowFixedImage] = useState(false);
  const [fixedImageUrl, setFixedImageUrl] = useState('');


  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
    }, 4200);

    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  const handleElemContainerMouseEnter = () => {
    setShowFixedImage(true);
  };

  const handleElemContainerMouseLeave = () => {
    setShowFixedImage(false);
  };

  const handleElemMouseEnter = (imageUrl) => {
    setFixedImageUrl(imageUrl);
  };

  const elems = [
    {
      title: 'Makers Studio HOI',
      image: 'https://images.unsplash.com/photo-1756819753334-3076f06c0395?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: '50th Anniversary',
      image: 'https://images.unsplash.com/photo-1754172111686-89a5782b18c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'NYFW Popup',
      image: 'https://images.unsplash.com/photo-1755004609094-1d91b019aaa2?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'AirForce 12021',
      image: 'https://images.unsplash.com/photo-1756660908471-a4443ca3703b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'SOHO NYC',
      image: 'https://images.unsplash.com/photo-1756680967556-26861e2c836b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'SOHO 2023',
      image: 'https://images.unsplash.com/photo-1756573187428-48ffc9557eb4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <>
      <Loader showLoader={showLoader} />

      <FixedImage 
        showFixedImage={showFixedImage} 
        fixedImageUrl={fixedImageUrl} 
      />

      <div id="main">
        <Page1 />
        <Page2 />
        <Page3 
          onElemContainerMouseEnter={handleElemContainerMouseEnter}
          onElemContainerMouseLeave={handleElemContainerMouseLeave}
          onElemMouseEnter={handleElemMouseEnter}
          elems={elems}
        />

        <div id="page-4"></div>
        <div id="page-5"></div>
      </div>

      <Footer />
    </>
  );
}

export default App;


