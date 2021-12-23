import { Image } from "components/generic";

export const ServicesBanner = ({ title, images = [] }) => {
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <hr />
        <Icons images={images} />
      </div>
      <style jsx>{`
        .container {
          background-color: #bfc2c7;
          height: fit-content;
          font-weight: 700;
          text-align: center;
           margin: 0px auto;
          padding: 5px;
        }
        .hr {
          background-color: white;
        }
        h2 {
          font-size: 36px;
          color: 'black';
          text-align: center;
          padding: 1%;
        }
      `}</style>
    </>
  );
};

const Icons = ({ images }) => {
  return (
    <>
      <div className="container">
        {images.map(({ id, title, image }) => {
          return (
            <div key={id}>
              <Image image={image} alt={`icon-${title}`} className="icons" />
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          flex-basis: 100%;
          justify-content: center;
          gap: 5vw;
        }
        h3 {
          font-size: 20px;
          margin-top: 20px;
        }
      `}</style>
      <style jsx global>{`
        .icons {
          width: 120px;
          height: 120px;
          border-radius: 20%;
        }
      `}</style>
    </>
  );
};
