import './App.scss';
import Card from './Components/Card/Card';

function App() {
  const cards_info = [
      {
        price: 300,
        mbit: 10,
        color: 'blue',
      },
      {
        price: 450,
        mbit: 50,
        color: 'green',
      },
      {
        price: 550,
        mbit: 100,
        color: 'red',
      },
      {
        price: 1000,
        mbit: 200,
        color: 'black',
      }
  ]
  return (
    <div className="App">
      <Card price={cards_info[0].price} mbit={cards_info[0].mbit} color={cards_info[0].color}/>
      <Card price={cards_info[1].price} mbit={cards_info[1].mbit} color={cards_info[1].color}/>
      <Card price={cards_info[2].price} mbit={cards_info[2].mbit} color={cards_info[2].color}/>
      <Card price={cards_info[3].price} mbit={cards_info[3].mbit} color={cards_info[3].color}/>
    </div>
  );
}

export default App;
