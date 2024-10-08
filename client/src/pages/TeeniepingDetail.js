import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Badge from '../components/Badge';

const TeeniepingDetail = () => {
  const { id } = useParams();
  const [teenieping, setTeenieping] = useState(null);

  useEffect(() => {
    const fetchTeenieping = async () => {
      try {
        // const response = await fetch(`/teeniepings/${id}`);
        const response = await fetch(`/db/teeniepings/${id}.json`);
        if (!response.ok) {
          throw new Error("데이터를 가져오는 중 문제가 발생했습니다.");

        }
        const data = await response.json();
        setTeenieping(data);
      } catch (error) {
        console.error(error)
      }
    };

    fetchTeenieping();
  }, [id]);

  if (!teenieping) return <div>유효하지 않은 아이디 값으로 접근 중입니다. 유효한 아이디 값을 입력해보세요.</div>;

  return (
    <div>
      <div>
        <img src={teenieping.imageUrl} alt={teenieping.name} />
      </div>
      <div>
        <div>
          <Badge color='#eee' text={teenieping.series} />
          <Badge color='#eee' text={teenieping.rank} />
        </div>
        <div>
          <h2>{teenieping.name}</h2>
          <p>{teenieping.description}</p>
        </div>
        <div>
          <span>소품</span>
          <span>{teenieping.items}</span>
        </div>
        <div>
          <span>마법</span>
          <span>{teenieping.magic}</span>
        </div>
        <div>
          <span>성격</span>
          <span>{teenieping.personality}</span>
        </div>
      </div>
    </div>
  );
}

export default TeeniepingDetail;
