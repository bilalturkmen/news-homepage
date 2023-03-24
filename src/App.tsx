import {
  Navbar,
  HeroBanner,
  HeroNews,
  SideNewsList,
  FeaturedNewsList,
  FooterAttribution,
  jsonData,
} from "./components";

export default function Home() {
  return (
    <div className="container">
      <header>
        <Navbar links={jsonData.navLinks} />
      </header>
      <main>
        <article className="hero">
          <section className="hero__news">
            <HeroBanner />
            <HeroNews news={jsonData.heroNews} />
          </section>
          <aside className="hero__side">
            <SideNewsList title="New" news={jsonData.sideNews} />
          </aside>
        </article>
        <FeaturedNewsList news={jsonData.featuredNews} />
      </main>
      <footer>
        <FooterAttribution data={jsonData.footData} />
      </footer>
    </div>
  );
}
