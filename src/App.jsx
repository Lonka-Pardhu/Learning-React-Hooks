import AddItems from "./components/AddItems"
import YesNo from "./components/YesNo"
import PlusMinus from "./components/PlusMinus"
export default function App() {
  return (
    <div className="container">
      <h1 className="mainHead">Understanding useState in React</h1>
      <AddItems />
      <PlusMinus />
      <YesNo />
    </div>
  )
}
