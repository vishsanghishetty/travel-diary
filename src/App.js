import React from 'react';
import NavBar from './components/Navbar';
import Card from './components/Card';
import Data from './data'


export default function App() {
  const dataArray = Data.map(data =>
    <Card
      key={data.id}
      data={data}
    />);

  return (<div>
    <NavBar />
    <section className="card--section">
      {dataArray}
    </section>
  </div>);
}


