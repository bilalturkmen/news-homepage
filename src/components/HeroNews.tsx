interface heroNewsProps {
  news: heroNews[];
}

const HeroNews = ({ news }: heroNewsProps) => {
  return (
    <section className="hero__content">
      {news.map(({ title, description, readlink, url }) => (
        <>
          <h1>{title}</h1>
          <div>
            <p>{description}</p>
            <a href={url}>{readlink}</a>
          </div>
        </>
      ))}
    </section>
  );
};

export default HeroNews;
