import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((p) => (
            <PlanetCard planetName={ p.name } planetImage={ p.image } key={ p.name } />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
