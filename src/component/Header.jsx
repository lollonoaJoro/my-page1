import { Link } from "react-router-dom";

export default function Header({search, setSearch}) {
  return (
    
    <header className="fixed top-0 w-full bg-[#0B1120] border-b border-slate-800 z-50">

      <div className="px-4 h-14 flex items-center justify-between">
        
{/* TODO: 왼쪽로고 */}
<Link to="/">
<div 
className="text-white font-bold cursor-pointer text-[20px]">JaminMovie</div>
</Link>
<div className="flex items-center gap-6">
<input type="text"
value={search}
style={{fontFamily: 'Pretendard, sans-serif'}}
placeholder="입력하세요..."
onChange={(e) => setSearch(e.target.value)}
/>
<div className="nav-item">내정보</div>
<div className="nav-item">영화</div>
<div className="nav-item">⋮</div>
</div>
</div>

     
    </header>
  );
}