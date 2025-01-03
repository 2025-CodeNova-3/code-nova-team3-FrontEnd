import OutputFooter from "../../components/OutputFooter/OutputFooter";
import Header from "../../components/Header/Header";
import Output from "../../components/Output/Output";
import Comments from "../../components/Comments/Comments";
import { useParams } from "react-router-dom";

const OutputPost = ({ login, setLogin }) => {
  const { boardId } = useParams();

  return (
    <>
      <Header login={login} setLogin={setLogin} />
      <Output boardId={boardId} />
      <OutputFooter />
      <Comments boardId={boardId} />
    </>
  );
};

export default OutputPost;
