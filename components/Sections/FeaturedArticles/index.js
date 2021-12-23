import { ArticleCard } from "components/Cards/ArticleCard";
import CarouselContainer from "components/Containers/CarouselContainer";

export const FeaturedArticles = ({ topArticles }) => {
  const needsCarousel = topArticles.length > 3;
  const articles = topArticles.map((article) => {
    return <ArticleCard key={article.id} {...article} />;
  });

  return (
    <>
      <div className="container">
        <div className="articles-container">
        <h2>Featured Articles</h2>
        <hr />
          {needsCarousel ? (
            <CarouselContainer
              hideOnMobile
              array={articles}
              breakpoints={{
                320: {
                  slidesPerView: 1.1,
                  slidesPerGroup: 2,
                },
                480: {
                  slidesPerView: 2.1,
                  slidesPerGroup: 2,
                },
                1024: {
                  slidesPerView: 2.8,
                  slidesPerGroup: 3,
                },
              }}
            />
          ) : (
            articles
          )}
        </div>
      </div>
      <style jsx>{`
        h2 {
          text-align: center;
          font-weight: 600;

          font-size: 36px;
          width: 100%;
        }
        .container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: center;
          margin: 30px auto;
          padding: 5px;
        }
        .articles-container {
          max-width: 1120px;
          width: 80vw;
          position: relative;
        }
        @media screen and (max-width: 320px) {
          .articles-container {
            width: 95vw;
          }
        }
      `}</style>
    </>
  );
};
