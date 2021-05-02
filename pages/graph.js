import HeadObject from "../components/head";
import Nav from "../components/nav";
import Card from "../components/Card";
import Footer from "../components/footer";
import React from 'react';
import {Line} from 'react-chartjs-2';

function Graph({ data }) {
  console.log(data);

  const tempgraphdata = {
    labels: data.timestamp.slice(1),
    datasets: [
      {
        label: 'NodeMCU',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.temperature.slice(1)
      }
    ]
  };

  const humiditygraphdata = {
    labels: data.timestamp.slice(1),
    datasets: [
      {
        label: 'NodeMCU',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.humidity.slice(1)
      }
    ]
  };

  const airgraphdata = {
    labels: data.timestamp.slice(1),
    datasets: [
      {
        label: 'NodeMCU',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.air.slice(1)
      }
    ]
  };

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
        
        <section className="mx-8 md:mx-24 mt-24">
          <h2 className="font-montserrat text-2xl md:text-3xl text-center uppercase">
            TRENDS
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card type={2} icon="trendingup" color="blue" heading="Temperature">
              <span style={{textAlignVertical: "center",textAlign: "center",display: 'flex', justifyContent: 'center'}}>Temperature (°C) vs Time</span>
              <Line
                data={tempgraphdata}
                width={400}
                height={400}
              />
            </Card>

            <Card type={2} icon="info" color="turquoise" heading="Humidity">
              <span style={{textAlignVertical: "center",textAlign: "center",display: 'flex', justifyContent: 'center'}}>Relative Humidity (%) vs Time</span>
              <Line
                data={humiditygraphdata}
                width={400}
                height={400}
              />
            </Card>
            <Card type={2} icon="pin" color="purple" heading="Air Quality">
              <span style={{textAlignVertical: "center",textAlign: "center",display: 'flex', justifyContent: 'center'}}>Air Qualtity Index vs Time</span>
              <Line
                data={airgraphdata}
                width={400}
                height={400}
              />
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
    `http://tangled.ae/homehub/tyfficalexit.php`
  );
  const data = await res.json();
  return { props: { data } };
}

export default Graph;
