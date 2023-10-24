import { useQuery } from "@tanstack/react-query";
import { Food, FoodTag, foodTags } from "./food";
import { useSearchParams } from "react-router-dom";
import { useFoods } from "./useFoods";
import z from "zod";

const urlTagSchema = z
  .string()
  .refine((tag) => foodTags.includes(tag as FoodTag));

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag") ?? "All";
  urlTagSchema.parse(tag);

  const { data: foods = [], isLoading } = useFoods();

  const matchingFoods =
    tag === "All"
      ? foods
      : foods.filter((food) => food.tags.includes(tag as FoodTag));

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1>Menu</h1>

      <label className="block" htmlFor="tag">
        Filter by Tag
      </label>
      <select
        id="tag"
        value={tag}
        onChange={(e) =>
          setSearchParams((params) => ({ ...params, tag: e.target.value }))
        }
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
              className="h-48 w-full object-cover"
              src={"images/" + food.image}
              alt={food.name}
            />
          </div>
        ))}
      </div>
    </>
  );
}
