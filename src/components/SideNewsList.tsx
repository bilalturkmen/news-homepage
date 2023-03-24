interface sideNewsListProps {
  title: string;
  news: sideNews[];
}

const SideNewsList: React.FC<sideNewsListProps> = ({ title, news }) => (
  <>
    <h1>{title}</h1>
    {news.map(({ id, url, title, description }) => (
      <section key={id} className="side__news">
        <h2>{title}</h2>
        <p>{description}</p>
      </section>
    ))}
  </>
);

export default SideNewsList;
