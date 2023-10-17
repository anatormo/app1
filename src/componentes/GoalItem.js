function GoalItem({ header, goalList }) {
    return (
      <div>
        <h1>{header}</h1>
        <p>{goalList}</p>
      </div>
    );
  }
  
  function App() {
    return (
      <div>
        <GoalItem header ="Marcador con props:" goalList="Primer Gol" />
        <GoalItem header ="" goalList="Segundo Gol" />
        <GoalItem header ="" goalList="Tercer Gol" />
        
      </div>
    );
  }
  
  export default App;