import GridBox from "./components/GridBox"
import ScoreBar from "./components/ScoreBar"

const App = () => {
  return (
    <div className="w-screen h-screen bg-(--Primary_Color) text-(--Secondary_Color) px-20 py-3">
      <div className="w-full h-full flex flex-col">
        <ScoreBar />
        <GridBox />
      </div>
    </div>
  )
}

export default App