import React from 'react';
import Head from 'next/head';

const SmartAgricultureDashboard: React.FC = () => {
  return (
    <>
      <Head>
        <title>Smart Agriculture Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ fontFamily: 'sans-serif', backgroundColor: '#121212', color: '#e0e0e0', padding: '20px' }}>
        <header style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2em', fontWeight: 'bold', color: '#00bcd4' }}>
            Smart Agriculture
          </h1>
          <p style={{ fontSize: '1.2em' }}>
            Growing Tomorrow's <strong>Sustainable Future</strong>
          </p>
          <p style={{ marginTop: '10px' }}>
            Harness the power of smart technology to optimize your greenhouse operations and maximize crop yields sustainably.
          </p>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
          <section style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>98%</p>
                <p style={{ fontSize: '0.9em', color: '#a0a0a0' }}>Resource Efficiency</p>
              </div>
              <div>
                <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>40%</p>
                <p style={{ fontSize: '0.9em', color: '#a0a0a0' }}>Water Savings</p>
              </div>
              <div>
                <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#4caf50' }}>+25%</p>
                <p style={{ fontSize: '0.9em', color: '#a0a0a0' }}>Yield Increase</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={{ backgroundColor: '#00bcd4', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                View Analytics
              </button>
              <button style={{ backgroundColor: 'transparent', color: '#00bcd4', padding: '10px 20px', border: '1px solid #00bcd4', borderRadius: '5px' }}>
                Learn More
              </button>
            </div>

            <div style={{ marginTop: '30px' }}>
              <h2 style={{ fontSize: '1.3em', marginBottom: '15px' }}>System Overview</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                <div style={{ backgroundColor: '#272727', padding: '15px', borderRadius: '5px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Temperature</p>
                  <p style={{ fontSize: '1.2em' }}>23°C <span style={{ color: '#4caf50' }}>+2.5°C</span></p>
                  <p style={{ color: '#ff9800' }}>WARNING</p>
                </div>
                <div style={{ backgroundColor: '#272727', padding: '15px', borderRadius: '5px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Humidity</p>
                  <p style={{ fontSize: '1.2em' }}>65% <span style={{ color: '#f44336' }}>-5%</span></p>
                  <p style={{ color: '#4caf50' }}>NORMAL</p>
                </div>
                <div style={{ backgroundColor: '#272727', padding: '15px', borderRadius: '5px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Soil Moisture</p>
                  <p style={{ fontSize: '1.2em' }}>42% <span style={{ color: '#4caf50' }}>+3%</span></p>
                  <p style={{ color: '#4caf50' }}>NORMAL</p>
                </div>
                <div style={{ backgroundColor: '#272727', padding: '15px', borderRadius: '5px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Light Level</p>
                  <p style={{ fontSize: '1.2em' }}>85% <span style={{ color: '#f44336' }}>-2%</span></p>
                  <p style={{ color: '#4caf50' }}>NORMAL</p>
                </div>
              </div>
            </div>
          </section>

          <aside style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.3em', marginBottom: '15px' }}>Upcoming Events</h2>
            <div style={{ marginBottom: '15px' }}>
              <p style={{ fontWeight: 'bold' }}>Automated Irrigation</p>
              <p style={{ fontSize: '0.9em', color: '#a0a0a0' }}>Zone A scheduled watering</p>
              <p style={{ textAlign: 'right', color: '#00bcd4' }}>02:05:30</p>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <p style={{ fontWeight: 'bold' }}>Nutrient Distribution</p>
              <p style={{ fontSize: '0.9em', color: '#a0a0a0' }}>Weekly nutrient cycle</p>
              <p style={{ textAlign: 'right', color: '#00bcd4' }}>04:20:30</p>
            </div>
            <div>
              <p style={{ fontWeight: 'bold' }}>System Maintenance</p>
              <p style={{ fontSize: '0.9em', color: '#a0a0a0' }}>Regular system checkup</p>
              <p style={{ textAlign: 'right', color: '#00bcd4' }}>26:50:30</p>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <a href="#" style={{ color: '#00bcd4', textDecoration: 'none' }}>View All Events →</a>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
};

export default SmartAgricultureDashboard;