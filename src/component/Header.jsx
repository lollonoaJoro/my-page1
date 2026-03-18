export default function Header(onLogoClick) {
  return (
    
    <header className="fixed top-0 w-full bg-[#0B1120] border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        
{/* TODO: 왼쪽로고 */}
<div 
style={{fontFamily: 'Pretendard, sans-serif'}}
className="text-white font-bold cursor-pointer text-[20px]" onClick={onLogoClick} >JaminMovie</div>
<input type="text" className="border border-wehit ml-auto text-white pr-4 font-lg mr-5 px-2 py-1 bg-transparent rounded-lg" />
<div className="nav-item">내정보</div>
<div className="nav-item">영화</div>
<div className="nav-item">⋮</div>
      </div>
     
    </header>
  );
}