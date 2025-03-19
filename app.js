import Pacman from "react-pacman";
import { useEffect, useState } from "react";
import "./styles.css";
import PlayerSelector from "./PlayerSelector";
import DisguisePlayer from "./DisguisePlayer";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import NextPage from './NextPage';
import AgentSelector from "./AgentSelector";
export default function App() {
  /*   const [gameKey, setGameKey] = useState(0); // Unique key to remount the Pacman component
  const [isGameOver, setIsGameOver] = useState(false); // State to track if the game is over

  // Function to reset the game
  const resetGame = () => {
    setIsGameOver(false);
    setGameKey((prevKey) => prevKey + 1); // Change key to remount component
  }; */
  const [showPlayerSelector, setShowPlayerSelector] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [showDisguisePlayer, setShowDisguisePlayer] = useState(false);
  const players = [
    { name: "Player 1", src: "images/personel/1.jpg" },
    { name: "Player 2", src: "images/personel/1 (2).jpg" },
    { name: "Player 3", src: "images/personel/2 (2).jpg" },
    { name: "Player 4", src: "images/personel/3.jpg" },
    { name: "Player 5", src: "images/personel/4.jpg" },
    { name: "Player 6", src: "images/personel/4 (2).jpg" },
  ];
  const handleSelection = (selectedPlayers) => {
    setSelectedPlayers(selectedPlayers);
    setCurrentPlayer(selectedPlayers[0]);
    setShowDisguisePlayer(true);
  };
  const handleDisguise = (disguisedImage) => {
    console.log("Disguised Image:", disguisedImage);
  };
  // You can handle the disguised image as needed };
  const handleStartClick = () => {
    setShowPlayerSelector(true);
     // Randomly select the correct agent
    const randomIndex = Math.floor(Math.random() * players.length);
    setCorrectAgent(players[randomIndex]);
  };

  const handleAgentGuess = (guessedAgent) => {
    setGuessCount(prevCount => prevCount + 1);
    
    if (guessedAgent.src === correctAgent.src) {
      setGuessResult("Correct! You guessed the right agent.");
      setShowAgentSelector(false);
    } else if (guessCount >= 2) {
      setGuessResult("Agent selection failed. Please start again.");
      setShowAgentSelector(false);
    } else {
      setGuessResult("Incorrect. Try again.");
    }
  };

  useEffect(() => {
    if (showDisguisePlayer) {
      setShowAgentSelector(true);
    }
  }, [showDisguisePlayer]);

  const resetGame = () => {
    setShowPlayerSelector(false);
    setSelectedPlayers([]);
    setCurrentPlayer(null);
    setShowDisguisePlayer(false);
    setShowAgentSelector(false);
    setCorrectAgent(null);
    setGuessCount(0);
    setGuessResult(null);
  };
  // This useEffect would simulate game over; you can replace this with your actual logic
  /* useEffect(() => {
    if (isGameOver) {
      const timer = setTimeout(() => {
        resetGame();
      }, 1000); // Delay before restarting the game
      return () => clearTimeout(timer);
    }
  }, [isGameOver]);

  // Function to simulate game ending
  const handleSimulateGameEnd = () => {
    setIsGameOver(true); // Set game as over
  }; */

  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <h1>Player Selector and Disguise</h1>
        {!showPlayerSelector && (
          <button onClick={handleStartClick}>Start</button>
        )}
        {showPlayerSelector && !showDisguisePlayer && (
          <PlayerSelector players={players} onSelection={handleSelection} />
        )}
        {showDisguisePlayer && currentPlayer && (
          <DisguisePlayer player={currentPlayer} onDisguise={handleDisguise} />
        )}

{showAgentSelector && (
          <div>
            <h2>Select the correct agent:</h2>
            <AgentSelector players={players} onSelection={handleAgentGuess} />
            {guessResult && <p>{guessResult}</p>}
            {(guessResult === "Correct! You guessed the right agent." || guessResult === "Agent selection failed. Please start again.") && (
              <button onClick={resetGame}>Start Over</button>
            )}
          </div>
        )}
      </header>
 



    <div className="App">
     <Switch>
       <Route exact path="/" component={Home} />
   <Route path="/NextPage" component={NextPage} /> 

   </Switch>
    </div> </Router>  */}
    </div>
  );
}
