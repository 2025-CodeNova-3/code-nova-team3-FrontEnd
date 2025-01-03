import styled from "styled-components";

export default function PostsNum({ totalPosts, onPageChange, currentPage }) {
  const totalPages = calculatePages(totalPosts);

  return (
    <Wrapper>
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          onClick={() => onPageChange(index + 1)}
          key={index}
          className={`page ${currentPage === index + 1 ? "selected" : ""}`}
        >
          {index + 1}
        </div>
      ))}
      <p>다음 »</p>
    </Wrapper>
  );
}
function calculatePages(totalItems) {
  return Math.ceil(totalItems / 10);
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  gap: 20px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;

  > div.page {
    cursor: pointer;
    font-size: 17px;
    color: #7c7c7c;
  }

  > div.page.selected {
    color: black;
    font-weight: bold;
  }

  > p {
    font-size: 17px;
    color: #7c7c7c;
    font-weight: 550;
  }
`;
