import './GameOver.css';


const GameOver = ({ retry , score}) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h2>A sua pontuacao foi de : <spam>{score}</spam></h2>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver