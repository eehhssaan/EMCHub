import { RichContent } from "components/generic";

export const TitlePara = ({ title, paragraph }) => {
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <hr />
        <RichContent className="short-description">{paragraph}</RichContent>
      </div>
      <style jsx>{`
        .container {
          text-align: center;
          max-width: 1024px;
          width: 90%;
          margin: 30px auto;
          padding: 5px;
          
        }
        h2 {
          font-size: 36px;
          font-weight: 600;
          
        }
      `}</style>
      <style jsx global>{`
        .short-description {
          text-align: center;
					font-size: 20px;
					line-height: 26px;
          
        }
      `}</style>
    </>
  );
};
