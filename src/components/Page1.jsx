import Nav from './Nav';

function Page1() {
  return (
    <div id="page1">
      <Nav />

      <div id="center">
        <div id="left">
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, eius quae cupiditate explicabo
            mollitia sit?</h3>
        </div>
        <div id="right">
          <h1>SPACES <br /> THAT <br /> INSPIRE</h1>
        </div>
      </div>

      <div id="hero-shape">
        <div id="hero1"></div>
        <div id="hero2"></div>
        <div id="hero3"></div>
      </div>

      <video autoPlay loop muted>
        <source src="https://sundown-ivory.vercel.app/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Page1;

