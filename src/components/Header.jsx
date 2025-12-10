function Header() {
  return (
    // DỊCH NGHĨA CÁC CLASS CỦA TAILWIND:
    // bg-slate-800 : Màu nền (BackGround) màu xám đậm (Slate 800)
    // p-5          : Padding (Khoảng cách đệm) là 20px (5 * 4)
    // text-center  : Căn giữa chữ
    // text-white   : Chữ màu trắng
    // rounded-b-xl : Bo tròn (Rounded) 2 góc dưới (Bottom) cỡ lớn (XL)
    // shadow-lg    : Đổ bóng (Shadow) cỡ lớn (Large)
    
    <div className="bg-slate-800 p-5 text-center text-white rounded-b-xl shadow-lg">
      
      {/* text-3xl: Chữ to cỡ 3XL. font-bold: Chữ đậm */}
      <h1 className="text-3xl font-bold uppercase tracking-widest">
        Hồ sơ cá nhân
      </h1>
      
      {/* opacity-80: Độ mờ 80% (cho chữ bớt chói) */}
      <p className="mt-2 opacity-80">Lập trình viên React & Tailwind</p>
      
    </div>
  );
}

export default Header;