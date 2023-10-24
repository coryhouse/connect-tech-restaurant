import { foods } from "./food";

// Exercise: Display food info
// and style info and card via Tailwind
function App() {
  return (
    <>
      <h1>Menu</h1>
      <div className="flex flex-wrap">
        {foods.map((food) => (
          <div
            className="bg-slate-200 shadow-lg m-2 w-96 border p-2 rounded"
            key={food.id}
          >
            <h2>{food.name}</h2>
            <p className="font-bold">${food.price}</p>
            <p>{food.description}</p>
            <img
              className="h-48"
              src={"images/" + food.image}
              alt={food.name}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
