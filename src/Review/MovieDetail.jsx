import { useEffect, useState } from "react";
import Header from "../component/Header";
import ImageCard from "../component/ImageCard";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button";

export default function Review(){

    const navigate = useNavigate();
    const {id} = useParams();
      const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR&page=1`;
const [movie, setMovies] = useState(null)
const [comments, setComments] = useState(() => {
  const saved = localStorage.getItem(`comment-${id}`)
  return saved ? JSON.parse(saved) : []
})
const [newComment, setNewComment] = useState("")

// 댓글함수
const handleAddComment = () => {
  if(newComment.trim() === "") return;
  setComments([...comments, {id: Date.now(), text: newComment}]);
  setNewComment("")
}
  useEffect(() => {
    localStorage.setItem(`comment-${id}`, JSON.stringify(comments))
    setTimeout(() => {
    }, 100);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data)
      })
      .catch((err) => console.error("데이터 로드 실패!", err));
  }, [comments, id]);

    return(
        <div className="min-h-screen bg-[#0B1120] text-white">
            <Header/>
{movie && (
    <main className="pt-24 flex justify-center">
    <div className="p-6 bg-slate-800 rounded-2xl rounded-s-rg shadow-2xl max-w-sm transition-transform " >
      <ImageCard
        imageUrl={`${IMAGE_BASE_URL}${movie.poster_path}`}
        title={movie.title}
        rating={movie.vote_average?.toFixed(1)}
        />
      <p className="text-lg text-slate-300 leading-relaxed">{movie.overview || "등록된 줄거리가 없습니다"}
</p>      
</div>

{/* 댓글영역 */}
<div className="p-6 bg-[#1e293b] w-full rounded-xl md:w-1/2 ">
<h3 className="text-xl font-bold mb-4">댓글({comments.length})</h3>
<input type="text" value={newComment} className="p-1 rounded-xl text-white border-2"
placeholder="댓글을 입력하세요"
 onChange={(e) => setNewComment(e.target.value)}/>
<button className="px-2 border-2 rounded-xl p-1 bg-black" onClick={handleAddComment}>등록</button>

{/* 댓글입력기능 */}
<ul className="space-y-3 mt-6">
  {comments.map((comment) => (
  <li 
  key={comment.id} 
  className="p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-sm">
    <p className="text-slate-200">{comment.text}</p>
    <span className="text-xs text-slate-500 block mt-2">{new Date(comment.id).toLocaleDateString()}</span></li>
))}</ul>
</div>

      </main>
    )}
        </div>
    )
}