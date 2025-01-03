import { Wrapper } from "./Output.styles";
import Timer from "../Timer/Timer";
import { useEffect, useState } from "react";
import GetPost from "../../apis/getPost";

const Output = ({ boardId }) => {
  console.log(boardId);
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const data = await GetPost(boardId);
        setPostData(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to load post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (boardId) {
      fetchPostData();
    }
  }, [boardId]);
  return (
    <>
      <Wrapper></Wrapper>
      <Timer color={"#787878"} />
    </>
  );
};

export default Output;
