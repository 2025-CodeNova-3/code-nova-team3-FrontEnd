import { useState } from "react";

export function useTotalPosts() {
  const [totalPosts, settotalPosts] = useState(null);

  return { totalPosts, settotalPosts };
}
