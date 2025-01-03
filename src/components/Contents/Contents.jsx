import { useEffect, useState } from "react";
import { Wrapper, Categorys, Title } from "./Contents.styles";
import Top4 from "../Top4/Top4";
import PostsNum from "../PostsNum/PostsNum";
import PostsSkeleton from "../../components/PostsSkeleton/PostSkeleton";
import PostsNumSkeleton from "../../components/PostsNumSkeleton/Skeleton";
import GetTotalPostsNum from "../../apis/getTotalPostsNum";
import GetPaged from "../../apis/getPaged";
import Posts from "../../components/Posts/Posts";
export default function Contents() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [categoryCount, setCategoryCount] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ["ALL", "ESSAY", "POEM", "NOVEL", "BOOK", "SOCIAL", "ROMANCE", "COMEDY", "SF", "FANTASY"];

  // 🚀 카테고리 및 페이지에 따라 데이터를 로드하는 함수
  const loadCategoryData = async (reset = false) => {
    setLoading(true);
    try {
      // 첫 번째 API 호출: 총 게시물 수 가져오기
      const totalNumData = await GetTotalPostsNum();
      setTotalPosts(totalNumData.data.totalCount);
      setCategoryCount(Object.values(totalNumData.data.categoryCounts));

      // 두 번째 API 호출: 페이지별 게시물 가져오기

      const pagedData = await GetPaged(selectedCategory, 1);

      setPosts(pagedData.data.boards);
    } catch (err) {
      console.error("Failed to load category data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setPosts([]);
    loadCategoryData(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    loadCategoryData();
  };

  useEffect(() => {
    loadCategoryData(true);
  }, [selectedCategory, Number(currentPage)]);

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

        {/* ✅ 스켈레톤 적용 */}
        {loading ? (
          <>
            <PostsSkeleton />
            <PostsNumSkeleton />
          </>
        ) : (
          <>
            <Top4 category={selectedCategory} />
            <Posts posts={posts} />
            <PostsNum
              totalPosts={totalPosts}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </>
        )}
      </section>
    </Wrapper>
  );
}
