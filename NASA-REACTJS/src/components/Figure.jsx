const Figure = ({ data }) => {
  return (
    <figure>
      <img src={data.url} alt={data.title} />
      <div>
        <div>
          <button aria-label="Close"></button>
          <h1>{data.title}</h1>
          <button aria-label="Resize"></button>
        </div>
        <div>
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <div>{data.explanation}</div>
      </div>
    </figure>
  );
};

export default Figure;
