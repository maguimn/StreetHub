import React from "react";
import './style.css';

export function Release({ title, image, brand }) {

  const generateColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    return `#${redHex}${greenHex}${blueHex}`;
  };

  const generateRandomNumbers = () => {
    const randomNumbers = [];

    while (randomNumbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * 10) + 35;

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }

    // Ordena os números em ordem crescente
    randomNumbers.sort((a, b) => a - b);

    return randomNumbers;
  };

  const randomNumbers = generateRandomNumbers();
  const colors = [generateColor(), generateColor(), generateColor()];



  return (
  
    <div className="background-position">
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={image} alt={title} />
          </div>
          <div className="contentBx">
            <h2>{title}</h2>
            <div className="size">
              <h3>Tamanho :</h3>
              {randomNumbers.map((number, index) => (
                <span key={index}>{number}</span>
              ))}
            </div>
            <div className="color">
              <h3>Cores :</h3>
              {colors.map((color, index) => (
                <span key={index} style={{ backgroundColor: color }}></span>
              ))}

            </div>

            <button className="buttonBx">Comprar</button>
            <div className="brand">{brand}</div>
          </div>
        </div>
      </div>
    </div>
    

  );
}


