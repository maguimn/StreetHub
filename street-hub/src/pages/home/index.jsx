import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './styles.css';
import { Header } from '../../components/header/index';
import { Caroussel } from '../../components/carousel';
import { Release } from '../../components/release';
import { ExcluisveSquare } from '../../components/exclusive-square';
import { Footer } from '../../components/footer';

;


export function Home() {

  const releases = [
    { title: 'Af1 Travis Scott', image: '/src/assets/af1-travis.png', brand: 'Nike' },
    { title: 'Bapesta', image: '/src/assets/bapesta.png', brand: 'Bape' },
    { title: 'Nike dunk low', image: '/src/assets/dunk.png', brand: 'Nike' },

  ];
  return (
    <>
      <Header />
     
        <Caroussel />
    

      <div className='release releaseCard'>
        {releases.map((release, index) => (
          <Release
            key={index}
            title={release.title}
            image={release.image}
            brand={release.brand}
          />
        ))}
      </div>


      <div className='exclusive'>
        < ExcluisveSquare />
      </div>


      <Footer />




    </>
  );
}
