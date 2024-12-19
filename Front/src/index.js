import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15.00,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

function App() {

  const [pizzaData, setPizzaData] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get('/api/pizzas/'); // Adjust this endpoint to match your Django URL
        // Transform the data to match your React component's expected format
        const transformedData = response.data.map(pizza => ({
          name: pizza.name,
          ingredients: pizza.ingredients,
          price: pizza.price,
          photoName: pizza.photo_name, // Note the transformation from snake_case to camelCase
          soldOut: pizza.sold_out
        }));
        setPizzaData(transformedData);
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };

    fetchPizzas();
  }
  , []);

  return (
  <div className="container">
    {/* <h1>I am nobody</h1> */}
    <Header />
    <Menu pizzaData={pizzaData} />
    <Footer pizzaData={pizzaData} />
  </div>
  );
}

function Header() {
  const styles = {
  };
  return (
    <header className="header">
      <h1 style={styles}>My Pizza Place</h1>
    </header>
  );
}

function Menu( {pizzaData} ) {
  const pizzas = pizzaData.map((pizza) => (
    <Pizza
      name={pizza.name}
      ingredients={pizza.ingredients}
      price={pizza.price}
      photoName={pizza.photoName}
      soldOut={pizza.soldOut}
      key={pizza.name}
    />
  ));
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Amazing pizzas made with fresh ingredients and a touch of love.
            Choose your favorite from our selection below and enjoy a delightful meal that will satisfy your cravings.
          </p>

          <ul className="pizzas">
            {pizzas}
          </ul>
        </>
      ) : <p>Unfortunately, there are no items in the menu. Please come back later!</p>}
    </main>
  );
}
function Footer( {pizzaData} ) { 
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const someItems = pizzaData.length;

  if (!someItems) return null;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until {closeHour}:00.
            Come visit us or order online.
          </p> 
          <button className='btn'>Order Now</button>
        </div>
      ) : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}
      
    </footer>
  );
}

function Pizza(props) {

  if (props.soldOut) return (
    <li className='pizza sold-out'>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p> 
        <span>SOLD OUT</span>
      </div>
    </li>
  );

  return (
  <li className="pizza">
    <img src={props.photoName} alt={props.name} />
    <div>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p> 
      <span>${props.price}</span>
    </div>
  </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App />
    </React.StrictMode>);