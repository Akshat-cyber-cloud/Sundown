function Page3({ 
  onElemContainerMouseEnter, 
  onElemContainerMouseLeave, 
  onElemMouseEnter, 
  elems 
}) {
  return (
    <div id="page3">
      <div 
        id="elem-container"
        onMouseEnter={onElemContainerMouseEnter}
        onMouseLeave={onElemContainerMouseLeave}
      >
        {elems.map((elem, index) => (
          <div 
            key={index}
            id="elem" 
            className={index === 0 ? "elem1" : ""}
            onMouseEnter={() => onElemMouseEnter(elem.image)}
          >
            <div className="overlay"></div>
            <h2>{elem.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page3;

