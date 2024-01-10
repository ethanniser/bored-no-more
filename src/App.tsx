import { Html5Game, getFourRandomGames } from "./html5games";

function App() {
  return (
    <>
      <div className="h-screen flex flex-wrap">
        {getFourRandomGames().map((game) => (
          <Quadrant>
            <Html5Game gameName={game} />
          </Quadrant>
        ))}
      </div>
      <iframe
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-[500px] z-50"
        src="https://www.youtube.com/embed/zZ7AimPACzc?controls=0&autoplay=1&mute=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </>
  );
}

function Quadrant({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-1/2 h-1/2 flex justify-center items-center">
      {children}
    </div>
  );
}

export default App;
