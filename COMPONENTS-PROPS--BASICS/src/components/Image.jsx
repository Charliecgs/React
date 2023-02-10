const Imagen = ({ source, alt, width1, height }) => {
  console.log(width1);
  return <img src={source} alt={alt} width={width1} height={height} />;
};

export default Imagen;
