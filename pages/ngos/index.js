import { NGOCard } from "components/Cards";
import { fetchAPI } from "lib/api";

const Home = ({ ngosPage }) => {
  return (
    <>
      <div style={{}}>
        <section >
          <h1 style={{ textAlign: 'center', paddingBottom: '40px'}}>
            {ngosPage.title}
          </h1>
          {ngosPage.ngos.map((ngo) => {
            return (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
                <NGOCard ngo={ngo} key={ngo.id} />
            </div>
            )
          })}
        </section>
      </div>
     
    </>
  );
};

export async function getStaticProps() {
  const ngosPage = await fetchAPI("/ngo-s-page");

  return {
    props: { ngosPage },
    revalidate: 600,
  };
}

export default Home;
