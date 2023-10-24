import { useMutation, useQuery } from "@tanstack/react-query";
import ky from "ky";
import { Food, NewFood } from "./food";

export function useFoods() {
  return useQuery<Food[]>({
    queryKey: ["foods"],
    queryFn: () => ky.get("http://localhost:3001/foods").json(),
  });
}

export function useAddFood(onSuccess: (food: Food) => void) {
  return useMutation({
    mutationFn: (food: NewFood) =>
      ky.post("http://localhost:3001/foods", { json: food }).json(),
    onSuccess,
  });
}
