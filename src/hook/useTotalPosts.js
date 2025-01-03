import { useState } from "react";

export function useTotalPosts() {
  const [totalPosts, setTotalPosts] = useState(0);

  return { totalPosts, setTotalPosts };
}
