import Header from "./component/Header";
import Button from "./component/Button";
import ImageCard from "./component/ImageCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./App.css"

export default function App() {
  const [movies, SetMovies] = useState([]);
  const [IsReady, setIsReady] = useState(false);
  const [Tab] = useState(0);
  const navigate = useNavigate()
  const Gohome = () => {
    navigate("/")
  }
  
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
  
  useEffect(() => {
    setTimeout(()=>{
      setIsReady(true);
    }, 100)
    fetch(API_URL)
    .then((res)=> res.json())
    .then((data)=> {
      SetMovies(data.results);
    })
    .catch((err)=> console.error("데이터 로드 실패!", err))
  }, []) 

  console.log(IsReady)
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <Header onLogoClick={Gohome}/>
      <main className="pt-24 flex flex-col items-center gap-10">
        <Button onClick={Gohome}/>
  
        <div className=" w-full flex overflow-x-auto gap-6 py-4 scrollbar-hide">
          {movies.map((movie) => (
            <div key={movie.id} className="shrink-0 w-50"> 
            <ImageCard
              key={movie.id}
              imageUrl={`${IMAGE_BASE_URL}${movie.poster_path}`}
              title={movie.title}
              buttonText="영화소개"
              onButtonClick={() => alert(`${movie.title}입니다!`)} 
              rating={movie.vote_average?.toFixed(1)}
            />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}