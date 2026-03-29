import { useEffect, useState } from "react";
import Header from "../component/Header";
import ImageCard from "../component/ImageCard";
import { useNavigate, useParams } from "react-router-dom";

export default function Review(){

    const navigate = useNavigate();
    const {id} = useParams();
      const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR&page=1`;
const [movie, SetMovies] = useState(null)


  useEffect(() => {
    setTimeout(() => {
    }, 100);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        SetMovies(data);
      })
      .catch((err) => console.error("데이터 로드 실패!", err));
  }, [id]);

    return(
        <div className="min-h-screen bg-[#0B1120] text-white">
            <Header/>
{movie && (
    <main className="pt-24 flex justify-center">
    <div className="p-6 bg-slate-800 rounded-3xl shadow-2xl max-w-sm transition-transform " key={id}>
      <ImageCard
        imageUrl={`${IMAGE_BASE_URL}${movie.poster_path}`}
        title={movie.title}
        rating={movie.vote_average?.toFixed(1)}
        />
      <p className="text-lg text-slate-300 leading-relaxed">{movie.overview || "등록된 줄거리가 없습니다"}
</p>      </div>
      </main>
    )}
        </div>
    )
}