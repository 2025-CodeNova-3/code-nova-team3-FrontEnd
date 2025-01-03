import { useState } from "react";

export function useCategoryCount() {
  const [categoryCount, setCategoryCount] = useState([]);

  return { categoryCount, setCategoryCount };
}
