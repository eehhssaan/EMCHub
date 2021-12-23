import { RichContent } from "components/generic";
import Chips from "./Chips";
import Title from "./Title";

const Slug = ({
  location: { name, address, description, slug, categories },
  route,
  handleHover,
  ...props
}) => {
  return (
    <div className="locations-result-card" onMouseEnter={handleHover} {...props}>
      <div  style={{
          backgroundColor:'#c7c7c7',
          borderRadius: '5px',
          color: 'black',
          padding: '5px'
          }}>
        <Title {...{ name, route, slug }}>
          <Chips {...{ categories }} style={{ fontSize:'100px'}}/>
        </Title>
        <h3 >
          <b >{address}</b>
        </h3>
      </div>
      {description && <hr />}
      <RichContent>{description}</RichContent>
      <style jsx>{`
        hr {
          width: 50%;
          margin-left: 0;
        }
      `}</style>
    </div>
  );
};

export default Slug;
