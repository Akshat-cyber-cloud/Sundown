function FixedImage({ showFixedImage, fixedImageUrl }) {
  return (
    <div 
      id="fixed-image" 
      style={{
        display: showFixedImage ? 'block' : 'none',
        backgroundImage: fixedImageUrl ? `url(${fixedImageUrl})` : 'none'
      }}
    />
  );
}

export default FixedImage;

