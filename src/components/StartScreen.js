
const StartScreen = ({ startGame }) => {
  return (
    <div className='Start'>
      <h1>Secret Word</h1>
      <p>Clique no botao</p>
      <button onClick={startGame}>Inicar jogo</button>
    </div>
  )
}

export default StartScreen