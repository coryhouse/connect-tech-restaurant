import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { NewFood } from "./food";
import { useAddFood, useFoods } from "./useFoods";
import { useNavigate } from "react-router-dom";
import ky from "ky";
import { useMutation } from "@tanstack/react-query";

const newFood: NewFood = {
  name: "",
  description: "",
  price: 0,
  tags: [],
  image: "",
};

export default function Admin() {
  const [food, setFood] = useState(newFood);

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFood({ ...food, [e.target.id]: e.target.value });
  }

  const addFood = useMutation({
    mutationFn: (food: NewFood) =>
      ky.post("http://localhost:3001/foods", { json: food }).json(),
    onSuccess: () => {
      navigate(`/`);
    },
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addFood.mutate(food);
  }

  return (
    <>
      <h1>Admin</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          placeholder="Name"
          value={food.name}
          onChange={handleChange}
        />
        <Input
          id="description"
          placeholder="Description"
          value={food.description}
          onChange={handleChange}
        />
        <Input
          id="price"
          onChange={handleChange}
          placeholder="Price"
          value={food.price}
        />
        <Button type="submit" aria-disabled={!addFood.isIdle}>
          {addFood.isIdle ? "Save" : "Saving..."}
        </Button>
      </form>
    </>
  );
}
