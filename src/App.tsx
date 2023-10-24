import { useState } from "react";
import { FoodTag, foodTags, foods } from "./food";

function App() {
  const [tag, setTag] = useState<FoodTag | "All">("All");

  const matchingFoods =
    tag === "All" ? foods : foods.filter((food) => food.tags.includes(tag));

  return (
    <>
      <h1>Menu</h1>

      <label className="block" htmlFor="tag">
        Filter by Tag
      </label>
      <select
        id="tag"
        value={tag}
        onChange={(e) => setTag(e.target.value as FoodTag)}
      >
        <option>All</option>
        {foodTags.map((tag) => (
          <option key={tag}>{tag}</option>
        ))}
      </select>

      <div className="flex flex-wrap">
        {matchingFoods.map((food) => (
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
