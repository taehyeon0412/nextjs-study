import { useEffect, useState } from "react";
import Seo from "./../components/Seo";

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />

      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}

//getServerSideProps에 쓰면 서버처리가 완료되기 전까지 client에게 보여지지 않음
//백엔드(서버)에서만 실행됨
//무엇을 리턴하던지 이걸 props로써 page에게 주게됨 ->Home({results})
