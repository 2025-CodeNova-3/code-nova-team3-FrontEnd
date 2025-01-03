import { Wrapper } from "./Output.styles";
import { useEffect, useState } from "react";
import GetPost from "../../apis/getPost";
import Timer from "../Timer/Timer";
import TimerSkeleton from "../TimerSkeleton/TimerSkeleton";

const Output = ({ boardId }) => {
  console.log(boardId);
  const [postData, setPostData] = useState("");
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const data = await GetPost(boardId);
        setPostData(data.data);
        console.log(data.data);
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
    <div style={{ marginTop: "100px" }}>
      <Wrapper>{postData.openContent}</Wrapper>
      {hidden && <Wrapper>{postData.hiddenContent}</Wrapper>}
      {!hidden &&
        (loading ? (
          <TimerSkeleton />
        ) : (
          <Timer
            setHidden={setHidden}
            openTime={postData.openTime}
            color={"#787878"}
          />
        ))}
    </div>
  );
};

export default Output;
