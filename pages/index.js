import HeadObject from "../components/head";
import Nav from "../components/nav";
import Card from "../components/Card";
import Footer from "../components/footer";

function Home({ data }) {
  console.log(data);
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <div className="text-4xl md:text-6xl font-montserrat font-bold text-center md:text-left md:ml-8 lg:ml-24">
        <h1 className="leading-loose">
          Welcome to{" "}
          <span className="font-extrabold italic underline">Home Hub!</span>
        </h1>
      </div>
      <main>
        <section className="mx-8 md:mx-24 mt-8">
          <h2 className="font-montserrat text-2xl md:text-3xl text-center uppercase">
            Alerts
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card
              type={2}
              icon="fire"
              color="red"
              heading="Current Fire Danger"
            >
              {data.fire}
            </Card>

            <Card type={2} icon="sun" color="orange" heading="Outdoor Activity">
              {data.outdoor}
            </Card>
          </div>
        </section>
        
        <section className="mx-8 md:mx-24 mt-24">
          <h2 className="font-montserrat text-2xl md:text-3xl text-center uppercase">
            CURRENTLY
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card type={2} icon="trendingup" color="blue" heading="Temperature">
              {data.temperature}° C
            </Card>

            <Card type={2} icon="info" color="turquoise" heading="Humidity">
              {data.humidity}% relative humidity
            </Card>
            <Card type={2} icon="pin" color="purple" heading="Air Quality">
              {data.air} Air Quality Index
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://tangled.ae/homehub/exit.php`
  );
  const data = await res.json();
  return { props: { data } };
}

export default Home;
