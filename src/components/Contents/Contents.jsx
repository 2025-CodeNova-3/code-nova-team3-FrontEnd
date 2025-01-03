import { Suspense, useEffect, useState } from "react";
import { Wrapper, Categorys, Posts, Title } from "./Contents.styles";
import Top4 from "../Top4/Top4";
import PostsNumSkeleton from "../../components/PostsNumSkeleton";
import PostsSkeleton from "../../components/PostsSkeleton/PostSkeleton";
import PostsNum from "../PostsNum/PostsNum";
import GetTotalPostsNum from "../../apis/getTotalPostsNum";
import { useTotalPosts } from "../../hook/useLogin";

export default function Contents() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const { totalPosts, setTotalPosts } = useTotalPosts();
  const [posts, setPosts] = useState([]);
  const categories = ["ALL", "에세이", "포엠", "노벨", "아트", "컬쳐"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // 카테고리 변경 시 1페이지로 초기화
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const loadPostNum = async () => {
      try {
        const data = await GetTotalPostsNum();
        setTotalPosts(data);
      } catch (err) {
        console.error("Failed to fetch total posts:", err);
      }
    };
    loadPostNum(); // 비동기 함수 호출
  }, [setTotalPosts]);

  return (
    <Wrapper>
      <Categorys>
        {categories.map((category) => (
          <p
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? "selected" : ""}
          >
            {category}
          </p>
        ))}
      </Categorys>
      <section>
        <Title>
          <p className="bold">많은 이들의 시선을 사로잡는 이야기</p>
          <p>문화예술을 향유하는 다채로운 방식을 담습니다.</p>
        </Title>

        {/* 1페이지일 때만 Top4 컴포넌트 렌더링 */}
        {currentPage === 1 && <Top4 category={selectedCategory} />}

        {/* Suspense로 비동기 처리된 컴포넌트 감싸기 */}
        <Suspense fallback={<PostsSkeleton />}>
          <Posts posts={posts} category={selectedCategory} />
        </Suspense>
        <Suspense fallback={<PostsNumSkeleton />}>
          {/* 페이지 네비게이션 */}
          <PostsNum
            totalPosts={totalPosts} // 서버에서 가져온 전체 게시물 수
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </Suspense>
      </section>
    </Wrapper>
  );
}
