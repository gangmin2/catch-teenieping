import { useEffect, useState } from "react";
import TeeniepingCard from "../components/TeeniepingCard";

const AllTeeniepings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        // const response = await fetch('/teeniepings/summary');
        const response = await fetch('/db/summaryData.json');
        if (!response.ok) {
          throw new Error("데이터를 가져오는 중 문제가 발생했습니다.");

        }
        const data = await response.json();
        setSummary(data);
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (isLoading) {
    return (
      <p>로딩중...</p>
    )
  }
  return (
    <div>
      {summary && summary.map(t => (
        <TeeniepingCard
          key={t.id}
          imageUrl={t.imageUrl}
          series={t.series}
          rank={t.rank}
          name={t.name}
        />
      ))}
      {!summary &&
        <p>데이터가 존재하지 않습니다.</p>
      }
    </div>
  )
}

export default AllTeeniepings;