import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { NewFood } from "./food";

const newFood: NewFood = {
  name: "",
  description: "",
  price: 0,
  tags: [],
  image: "",
};

export default function Admin() {
  const [food, setFood] = useState(newFood);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFood({ ...food, [e.target.id]: e.target.value });
  }

  return (
    <>
      <h1>Admin</h1>
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
      <Input placeholder="Price" value={food.price} />
      <Button>Save</Button>
    </>
  );
}
