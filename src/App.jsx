import React from 'react';

// ==================================================================
// --- 1. MOCK DATA (ข้อมูลจำลอง) ---
// ==================================================================

// (ในโปรเจกต์จริง นี่ควรจะอยู่ใน 'src/data/promoData.js')
const PROMOTIONS = [
  {
    id: 1,
    title: "ลดราคาสูงสุด 50%",
    subtitle: "ข้อเสนอสุดพิเศษสำหรับคุณ",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrIsk7P5_nFQWu_nguUiz9VsfMgqIAFCBGjsTaPeG6QAs8W7xeXG14AbSz43E08iy9PvINzIRXoG-45JEoGxLIQ29l3x7rpMxrZ-lFSbMGzaqWUjYNL0IPSCX6zNxhpP9WDoUM5zrLrULcvozX17xALFX2AzsFJNg2xL0_uUqboV4nNizIzoGlPLl-qF7YJs6iUOTrbhy-NSX8al4QuLLHEj09L8OPzI46Ta2y1bWtCdM6msS0o64rqSKs3HPuUDj0zs5wMcIeZmQ", // (อัปเดต!)
    details: "พบกับมหกรรมลดล้างสต็อกครั้งยิ่งใหญ่! มือถือแบรนด์ดังลดราคาสูงสุดถึง 50% ทั้งรุ่นเก่าและรุ่นใหม่ ไม่ว่าจะเป็น Apple, Samsung, หรือ Xiaomi ก็ลดจัดหนักจัดเต็ม",
    steps: [
      "เลือกซื้อมือถือที่เข้าร่วมรายการ (สังเกตสัญลักษณ์ 'Sale 50%')",
      "สินค้าโปรโมชั่นมีจำนวนจำกัด หมดแล้วหมดเลย",
      "โปรโมชั่นนี้ไม่สามารถใช้ร่วมกับส่วนลดอื่นๆ ได้",
      "ระยะเวลาโปรโมชั่น: วันนี้ - 30 พ.ย. 2568 เท่านั้น"
    ]
  },
  {
    id: 2,
    title: "ผ่อน 0% 10 เดือน",
    subtitle: "เป็นเจ้าของได้ง่ายขึ้น",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTG_u5Asugcw6OZJw6P4QpA3-IIEhJ2RJ-beW5XOEuMqPZu3L7RZPriVnCQM4hLiXVZHhBxOK1vz_kmJOEJq_7301CeEzyGcw5ZRE3aafQ4iDKr1Hi4fS8kXW96yVJR_umob6pGW6GbdmEu3yUfgmfzC91GWgpRB55q4uD2oOxf7ugNDycMG3cYGE8b4aEt_Piz7rhIlF3g0AePRsqroqr1Vc6YsuBtB-cbvqHGQidazAK_2Lpv2T9XrYmwK_SR0ILnxcqXfYDBPI", // (อัปเดต!)
    details: "สบายกระเป๋า! เป็นเจ้าของมือถือในฝันได้ง่ายขึ้นด้วยโปรโมชั่นผ่อน 0% นานสูงสุด 10 เดือน เมื่อชำระผ่านบัตรเครดิตที่ร่วมรายการ",
    steps: [
      "เลือกซื้อมือถือรุ่นใดก็ได้ในแอพของเรา",
      "ที่หน้าชำระเงิน เลือก 'ผ่อนชำระผ่านบัตรเครดิต'",
      "ตรวจสอบบัตรเครดิตที่ร่วมรายการ (เช่น KBank, SCB, BBL)",
      "เลือกระยะเวลาผ่อนชาระ (สูงสุด 10 เดือน) และยืนยันการสั่งซื้อ"
    ]
  },
  {
    id: 3,
    title: "iPhone รุ่นใหม่ล่าสุดมาแล้ว!",
    subtitle: "สั่งจองล่วงหน้าได้แล้ววันนี้",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFtHr45ov9fCVcndkBfaAWemmgY6Zebi_s_xGb4rQ4oB-rX6_DbkE3R_RMbrast2SuZhz-ecvcbmrx8IRSxPdiln4kiGW2rWpgYhpcgoNpuaqePpJUVNhXJDxJv-srffN5Ix-x1yMW2wFvQF-f84VKDzHSemL62GJrFIGomslQQxU22_YGe6jWweJXnC72qZLyc0tDFLC6z2cyI_9DXeoFGJQWSUa-D8KR_-_MP70XzgkLLMkkwwCLwTHSBcZR6PXqmW0fvaoNDMo", // (อัปเดต!)
    details: "สัมผัสอนาคตก่อนใคร สั่งจอง iPhone รุ่นใหม่ล่าสุดกับเราวันนี้ รับข้อเสนอสุดพิเศษ 3 ต่อ: ฟรี! เคสใส, ส่วนลดฟิล์มกระจก 50%, และสิทธิ์ลุ้นรับ AirPods ฟรี",
    steps: [
      "กด 'สั่งจองล่วงหน้า' บนหน้าสินค้า iPhone",
      "ชำระเงินมัดจำ 2,000 บาท ผ่านช่องทางใดก็ได้",
      "คุณจะได้รับอีเมลยืนยันการจองและลำดับคิว",
      "รอรับเครื่องในวันวางจำหน่ายวันแรกได้เลย (ของแถมจะถูกจัดส่งพร้อมกัน)"
    ]
  }
];

// (อัปเดต!) (ในโปรเจกต์จริง นี่ควรจะอยู่ใน 'src/data/productData.js')
const POPULAR_PRODUCTS = [
  // --- Apple (3) ---
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 41900,
    rating: 4.9,
    brand: "Apple",
    isFlagship: true,
    imageUrl: "/images/iPhone_15_Pro.jpg", // (แก้ไข!)
    gallery: [
      "/images/iPhone_15_Pro.jpg", // (แก้ไข!)
      "/images/iPhone_15_Pro1.jpg", // (แก้ไข!)
      "/images/iPhone_15_Pro2.jpg" // (แก้ไข!)
    ],
    specs: { 
      'จอภาพ': '6.1" Super Retina XDR (ProMotion 120Hz)', 
      'ชิป': 'A17 Pro', 
      'กล้อง': '48MP Main | 12MP Ultra Wide | 12MP Telephoto', 
      'วัสดุ': 'Titanium Design' 
    },
    warranty: 'รับประกันแบบจำกัด 1 ปี (โดย Apple Thailand)'
  },
  {
    id: 5,
    name: "iPhone 15",
    price: 32900,
    rating: 4.7,
    brand: "Apple",
    isFlagship: false,
    imageUrl: "/images/iPhone_15.jpg", // (แก้ไข!)
    gallery: [
      "/images/iPhone_15.jpg", // (แก้ไข!)
      "/images/iPhone_151.jpg", // (แก้ไข!)
      "/images/iPhone_152.jpg" // (แก้ไข!)
    ],
    specs: { 'จอภาพ': '6.1" Super Retina XDR', 'ชิป': 'A16 Bionic', 'กล้อง': '48MP Main | 12MP Ultra Wide', 'วัสดุ': 'Aluminium' },
    warranty: 'รับประกันแบบจำกัด 1 ปี (โดย Apple Thailand)'
  },
  {
    id: 8,
    name: "iPhone 14 Pro",
    price: 38900,
    rating: 4.8,
    brand: "Apple",
    isFlagship: true,
    imageUrl: "/images/iPhone_14_Pro.jpg", // (แก้ไข!)
    gallery: [
      "/images/iPhone_14_Pro.jpg", // (แก้ไข!)
      "/images/iPhone_14_Pro1.jpg", // (แก้ไข!)
      "/images/iPhone_14_Pro2.jpg" // (แก้ไข!)
    ],
    specs: { 'จอภาพ': '6.1" Super Retina XDR (ProMotion 120Hz)', 'ชิป': 'A16 Bionic', 'กล้อง': '48MP Main | 12MP Ultra Wide | 12MP Telephoto', 'วัสดุ': 'Stainless Steel' },
    warranty: 'รับประกันแบบจำกัด 1 ปี (โดย Apple Thailand)'
  },
  
  // --- Samsung (3) ---
  {
    id: 2,
    name: "Galaxy S24 Ultra",
    price: 46900,
    rating: 4.8,
    brand: "Samsung",
    isFlagship: true,
    imageUrl: "/images/Samsung_Galaxy_S24_ULTRA.jpg", // (แก้ไข!)
    gallery: [
      "/images/Samsung_Galaxy_S24_ULTRA.jpg", // (แก้ไข!)
      "/images/Samsung_Galaxy_S24_ULTRA1.jpg", // (แก้ไข!)
      "/images/Samsung_Galaxy_S24_ULTRA2.jpg" // (แก้ไข!)
    ],
    specs: { 
      'จอภาพ': '6.8" Dynamic AMOLED 2X (120Hz)', 
      'ชิป': 'Snapdragon 8 Gen 3 for Galaxy', 
      'กล้อง': '200MP Main | 12MP Ultra Wide | 50MP Telephoto (5x)', 
      'ฟีเจอร์': 'Galaxy AI, S Pen' 
    },
    warranty: 'รับประกันแบบจำกัด 1 ปี (โดย Samsung Thailand)'
  },
  {
    id: 6,
    name: "Galaxy A55",
    price: 15999,
    rating: 4.5,
    brand: "Samsung",
    isFlagship: false,
    imageUrl: "/images/Samsung_Galaxy_A55.jpg", // (แก้ไข!)
    gallery: [
      "/images/Samsung_Galaxy_A55.jpg", // (แก้ไข!)
      "/images/Samsung_Galaxy_A551.jpg", // (แก้ไข!)
      "/images/Samsung_Galaxy_A552.jpg" // (แก้ไข!)
    ],
    specs: { 'จอภาพ': '6.6" Super AMOLED (120Hz)', 'ชิป': 'Exynos 1480', 'กล้อง': '50MP Main | 12MP Ultra Wide | 5MP Macro', 'ฟีเจอร์': 'กันน้ำ IP67' },
    warranty: 'รับประกันแบบจำกัด 1 ปี (โดย Samsung Thailand)'
  },
  {
    id: 9,
    name: "Galaxy S23",
    price: 29900,
    rating: 4.7,
    brand: "Samsung",
    isFlagship: true,
    imageUrl: "/images/Samsung_Galaxy_S23.jpg", // (แก้ไข!)
    gallery: [
      "/images/Samsung_Galaxy_S23.jpg", // (แก้ไข!)
      "/images/Samsung_Galaxy_S231.jpg", // (แก้ไข!)
      "/images/Samsung_Galaxy_S232.jpg" // (แก้ไข!)
    ],
    specs: { 'จอภาพ': '6.1" Dynamic AMOLED 2X (120Hz)', 'ชิป': 'Snapdragon 8 Gen 2 for Galaxy', 'กล้อง': '50MP Main | 12MP Ultra Wide | 10MP Telephoto', 'ฟีเจอร์': 'Compact Flagship' },
    warranty: 'รับประกันแบบจำกัด 1 ปี (โดย Samsung Thailand)'
  },

  // --- Xiaomi (3) ---
  {
    id: 3,
    name: "Xiaomi 14",
    price: 29990,
    rating: 4.7,
    brand: "Xiaomi",
    isFlagship: true,
    imageUrl: "/images/Xiaomi_14.jpg", // (แก้ไข!)
    gallery: [
      "/images/Xiaomi_14.jpg", // (แก้ไข!)
      "/images/Xiaomi_141.jpg", // (แก้ไข!)
      "/images/Xiaomi_142.jpg" // (แก้ไข!)
    ],
    specs: { 
      'จอภาพ': '6.36" AMOLED (120Hz)', 
      'ชิป': 'Snapdragon 8 Gen 3', 
      'กล้อง': 'Leica 50MP Main | 50MP Ultra Wide | 50MP Telephoto', 
      'การชาร์จ': '90W HyperCharge' 
    },
    warranty: 'รับประกันแบบจำกัด 2 ปี (โดย Xiaomi Thailand)'
  },
  {
    id: 7,
    name: "Redmi Note 13 Pro",
    price: 12990,
    rating: 4.6,
    brand: "Xiaomi",
    isFlagship: false,
    imageUrl: "/images/Xiaomi_Redmi_Note_13_Pro.jpg", // (แก้ไข!)
    gallery: [
      "/images/Xiaomi_Redmi_Note_13_Pro.jpg", // (แก้ไข!)
      "/images/Xiaomi_Redmi_Note_13_Pro1.jpg", // (แก้ไข!)
      "/images/Xiaomi_Redmi_Note_13_Pro2.jpg" // (แก้ไข!)
    ],
    specs: { 'จอภาพ': '6.67" AMOLED (120Hz)', 'ชิป': 'Snapdragon 7s Gen 2', 'กล้อง': '200MP Main | 8MP Ultra Wide | 2MP Macro', 'การชาร์จ': '67W Turbo Charge' },
    warranty: 'รับประกันแบบจำกัด 1.5 ปี (โดย Xiaomi Thailand)'
  },
  {
    id: 10,
    name: "Xiaomi 13T",
    price: 15990,
    rating: 4.7,
    brand: "Xiaomi",
    isFlagship: false,
    imageUrl: "/images/Xiaomi_13T.jpg", // (แก้ไข!)
    gallery: [
      "/images/Xiaomi_13T.jpg", // (แก้ไข!)
      "/images/Xiaomi_13T1.jpg", // (แก้ไข!)
      "/images/Xiaomi_13T2.jpg" // (แก้ไข!)
    ],
    specs: { 'จอภาพ': '6.67" AMOLED (144Hz)', 'ชิป': 'Dimensity 8200-Ultra', 'กล้อง': 'Leica 50MP Main | 12MP Ultra Wide | 50MP Telephoto', 'ฟีเจอร์': 'กันน้ำ IP68' },
    warranty: 'รับประกันแบบจำกัด 2 ปี (โดย Xiaomi Thailand)'
  }
];

// ... (ข้อมูล CATEGORIES เหมือนเดิม) ...
const CATEGORIES = [
  { id: 'all', name: 'ทั้งหมด', icon: null },
  { id: 'apple', name: 'Apple', icon: null },
  { id: 'samsung', name: 'Samsung', icon: null },
  { id: 'xiaomi', name: 'Xiaomi', icon: null },
  { id: 'flagship', name: 'เรือธง', icon: 'star' },
];


// ==================================================================
// --- 2. STYLES COMPONENT ---
// ==================================================================
const GlobalStyles = () => {
  return (
    <style>
      {`
        /* (ใหม่!) Import ฟอนต์ Nunito */
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap');
      
        /* (ใหม่!) Keyframe สำหรับ Fade In */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* (ใหม่!) Keyframe สำหรับ Modal Pop-in */
        @keyframes modalPopIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }


        /* --- 1. Global Styles --- */
        :root {
          /* (อัปเดต!) ธีมสีเหลืองน่ารัก (Cute Yellow) */
          --primary: #FBC02D; 
          --primary-hover: #F2A60C; /* (ใหม่!) */
          
          --background-light: #FFFFFF;
          --background-dark: #101922; 
          --text-light: #111418;
          --text-dark: #F0F2F4; 
          --text-secondary: #8E8E93;
          --card-light: #F6F7F8;
          
          /* (อัปเดต!) เปลี่ยนเป็นฟอนต์ 'Nunito' */
          --font-display: 'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          
          --yellow: #FFCC00; 
          
          /* (อัปเดต!) ปรับปรุงเงาและเพิ่ม transition */
          --shadow: 0 4px 12px rgba(0,0,0,0.08); /* (อัปเดต!) */
          --shadow-hover: 0 8px 20px rgba(0,0,0,0.1); /* (อัปเดต!) */
          --transition-fast: all 0.2s ease-in-out;
          --background-light-alpha: rgba(255, 255, 255, 0.85); 

          --green: #34C759;
          --red: #FF3B30; 
        }
        
        body { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
          font-family: var(--font-display); 
          /* (อัปเดต!) เปลี่ยนพื้นหลังหลักเป็นเทาอ่อน */
          background-color: var(--card-light); 
          color: var(--text-light); 
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden; /* (ใหม่!) ป้องกันการเลื่อนแนวนอนทั้งหน้า */
        }
        
        #root { min-height: max(884px, 100dvh); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24 }
        .material-symbols-filled { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20 }
        
        /* --- 2. Layout Styles --- */
        .app-container { 
          position: relative; 
          display: flex; 
          min-height: 100vh; 
          width: 100%; 
          flex-direction: column; 
          overflow-x: hidden; /* (ย้ายมาจาก body) */
        }
        .main-content { 
          flex-grow: 1; 
          padding-bottom: 80px; 
          /* (ใหม่!) เพิ่ม Animation */
          animation: fadeIn 0.3s ease-in-out;
        }
        
        /* (ใหม่!) สไตล์สำหรับหน้า Placeholder */
        .page-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-grow: 1;
          color: var(--text-secondary);
          animation: fadeIn 0.3s ease-in-out;
        }
        .page-placeholder .material-symbols-outlined {
          font-size: 80px;
          opacity: 0.5;
        }
        .page-placeholder h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-light);
        }

        /* --- 3. Header Styles --- */
        .app-header { 
          position: sticky; top: 0; z-index: 10; 
          /* (อัปเดต!) เอฟเฟกต์กระจกฝ้า */
          background-color: var(--background-light-alpha);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #f0f0f0; 
        }
        .header-container { display: flex; align-items: center; justify-content: space-between; padding: 1rem; padding-bottom: 0.5rem; }
        
        /* (อัปเดต!) เปลี่ยนจาก .header-logo-placeholder */
        .header-logo-wrapper { 
          width: auto; /* ปรับความกว้างอัตโนมัติ */
          flex-shrink: 0; 
          display: block; 
        }

        /* (ใหม่!) คลาสโลโก้ที่ปรับขนาดได้ตามที่คุณขอ */
        .header-logo {
          /* - ขนาดเล็กสุด: 35px (บนจอมือถือที่เล็กมาก)
            - ขนาดที่ชอบ (Scalable): 10vw (10% ของความกว้างจอ)
            - ขนาดใหญ่สุด: 45px (บนจอที่ใหญ่มากๆ)
          */
          height: clamp(35px, 10vw, 45px);
          width: auto;
          display: block;
          margin-top: -5px; /* (ปรับเล็กน้อย) */
        }
        
        .header-action { width: 48px; flex-shrink: 0; display: flex; justify-content: flex-end; }
        
        /* (อัปเดต!) สไตล์หัวเรื่องใหญ่ (iOS) */
        .header-title { 
          font-size: 1.75rem; /* ใหญ่ขึ้น */
          font-weight: 700; 
          color: var(--text-light); 
          text-align: left; /* ชิดซ้าย */
          flex-grow: 1; 
          margin: 0;
          padding-left: 0.5rem; /* ขยับเล็กน้อย */
        }
        
        .icon-button { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 9999px; background-color: transparent; border: none; cursor: pointer; color: var(--text-light); transition: var(--transition-fast); }
        .icon-button:hover { background-color: var(--card-light); }
        .icon-button .material-symbols-outlined { font-size: 24px; }

        /* --- 4. SearchBar & Action Styles (อัปเดต) --- */
        
        /* (ใหม่!) กล่องหุ้ม Search + Notify */
        .search-and-action-wrapper {
          display: flex;
          align-items: center; 
          gap: 0.75rem;
          padding: 0.75rem 0.75rem; /* ย้าย Padding มาไว้ที่นี่ */
        }

        /* (อัปเดต!) ตัว SearchBar เอง */
        .search-bar-padding {
          padding: 0; /* ลบ Padding เดิมออก */
          flex-grow: 1; /* (สำคัญ!) สั่งให้ช่องค้นหายืดจนสุด */
        }
        
        .search-input-wrapper { 
          display: flex; 
          align-items: center; /* (แก้เคอร์เซอร์) */
          height: 48px; 
          width: 100%; 
          border-radius: 1rem; 
          background-color: var(--background-light); 
          overflow: hidden; 
          box-shadow: var(--shadow); 
        }
        .search-icon { 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          padding-left: 1rem; 
          color: var(--text-secondary); 
        }
        .search-input { 
          flex-grow: 1; 
          min-width: 0; 
          /* (แก้เคอร์เซอร์) ลบ 'height: 100%' ออก */
          padding: 0.5rem 1rem 0.5rem 0.5rem; 
          font-family: var(--font-display); 
          font-size: 1rem; 
          color: var(--text-light); 
          background-color: var(--background-light); 
          border: none; 
          outline: none; 
        }
        .search-input::placeholder { color: var(--text-secondary); font-weight: 400; }

        /* (ใหม่!) สไตล์ปุ่ม Notify ที่อยู่ข้างๆ Search */
        .search-action-button {
          flex-shrink: 0; /* ป้องกันปุ่มหด */
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px; /* ทำให้สูงเท่า SearchBar */
          height: 48px; /* ทำให้สูงเท่า SearchBar */
          border-radius: 1rem; /* ทำให้ขอบมนเท่า SearchBar */
          background-color: var(--background-light);
          box-shadow: var(--shadow);
          border: none;
          cursor: pointer;
          color: var(--text-light);
          transition: var(--transition-fast);
        }
        .search-action-button:hover {
          background-color: var(--card-light);
        }
        .search-action-button .material-symbols-outlined {
          font-size: 24px;
        }


        /* --- 5. CategoryChips (Pill Style) --- */
        
        .chip-container-wrapper { 
          padding: 0.5rem 0.75rem; 
          padding-top: 0.25rem; 
          overflow-x: auto; 
          scrollbar-width: none; 
          -ms-overflow-style: none; 
          overscroll-behavior-x: contain;
        }
        .chip-container-wrapper::-webkit-scrollbar { display: none; }
        
        /* (อัปเดต!) กลับไปเป็นสไตล์ Pill ที่น่ารัก */
        .chip-container { 
          display: flex; 
          gap: 0.75rem; 
          padding: 0; 
        }
        .chip { 
          display: flex; height: 40px;
          flex-shrink: 0; cursor: pointer; 
          align-items: center; justify-content: center; 
          gap: 0.5rem; 
          border-radius: 9999px; /* (อัปเดต!) ขอบมนสุด */
          background-color: var(--background-light);
          padding: 0 1rem; 
          border: none; 
          font-family: var(--font-display); 
          transition: var(--transition-fast); 
          border-right: none;
          box-shadow: var(--shadow);
        }
        .chip:last-child {
          border-right: none;
        }
        
        .chip p { 
          font-size: 0.875rem; 
          font-weight: 500; 
          color: var(--text-light); /* (อัปเดต!) */
          margin: 0; 
        }
        .chip .material-symbols-outlined { 
          font-size: 1rem; 
          color: var(--text-secondary); /* (อัปเดต!) */
        }
        .chip.active { 
          background-color: var(--primary); 
          box-shadow: 0 2px 4px rgba(251, 192, 45, 0.4); /* (อัปเดต!) */
        }
        .chip.active p, .chip.active .material-symbols-outlined { 
          color: var(--text-light); /* (อัปเดต!) */
        }
        .chip:not(.active):hover { 
          background-color: #e9e9eb; 
        }


        /* --- 6. PromotionCarousel Styles --- */
        .carousel-container { 
          display: flex; overflow-x: auto; 
          padding: 1rem 0.75rem; padding-top: 0.75rem; 
          gap: 1rem; scrollbar-width: none; 
          -ms-overflow-style: none; 
          overscroll-behavior-x: contain;
        }
        .carousel-container::-webkit-scrollbar { display: none; }
        .promo-card { width: 320px; flex-shrink: 0; display: flex; flex-direction: column; border-radius: 1rem; background-color: var(--background-light); box-shadow: var(--shadow); overflow: hidden; }
        .promo-card-button { border: none; padding: 0; background: none; text-align: left; cursor: pointer; transition: var(--transition-fast); }
        .promo-card-button:hover { 
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }
        .promo-image { width: 100%; height: 180px; background-size: cover; background-position: center; }
        .promo-content { padding: 0.75rem 1rem; }
        .promo-title { font-size: 1rem; font-weight: 700; color: var(--text-light); margin: 0; }
        .promo-subtitle { font-size: 0.875rem; color: var(--text-secondary); margin: 0; margin-top: 0.25rem; }

        /* --- 7. ProductList Styles --- */
        .section-header { display: flex; align-items: center; justify-content: space-between; padding: 1.5rem 0.75rem 0.75rem 0.75rem; }
        .section-title { font-size: 1.25rem; font-weight: 700; color: var(--text-light); margin: 0; }
        .see-all-button { display: flex; align-items: center; gap: 0.25rem; color: var(--primary); font-size: 0.875rem; font-weight: 700; background: none; border: none; cursor: pointer; transition: var(--transition-fast); }
        .see-all-button:hover { opacity: 0.7; }
        .see-all-button .material-symbols-outlined { font-size: 1rem; }
        
        .product-list-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; padding: 0 0.75rem; }
        
        .product-card { 
          display: flex; flex-direction: column; gap: 0.5rem; border-radius: 1rem; 
          background-color: var(--background-light); 
          box-shadow: var(--shadow); 
          overflow: hidden; position: relative; 
          transition: var(--transition-fast); 
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }

        /* (ใหม่!) ปุ่ม Favorite บนการ์ดสินค้า */
        .favorite-button-card {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 2;
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(4px);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }
        .favorite-button-card:hover {
          background-color: rgba(255, 255, 255, 1);
          color: var(--text-light);
        }
        .favorite-button-card.favorited {
          color: var(--red);
        }
        .favorite-button-card .material-symbols-outlined {
          font-size: 22px;
        }

        .product-card-clickable-area { cursor: pointer; display: flex; flex-direction: column; gap: 0.5rem; }
        
        .product-image-container { width: 100%; aspect-ratio: 1 / 1; background-color: var(--card-light); display: flex; align-items: center; justify-content: center; padding: 0.5rem; }
        .product-image { width: 100%; height: 100%; object-fit: contain; }
        .product-info { display: flex; flex-direction: column; padding: 0.75rem; padding-top: 0.25rem; gap: 0.5rem; }
        .product-name { font-size: 0.875rem; font-weight: 500; color: var(--text-light); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .product-details { display: flex; align-items: center; justify-content: space-between; margin-top: 0; }
        .product-price { font-size: 1rem; font-weight: 700; color: var(--text-light); margin: 0; }
        .product-rating { display: flex; align-items: center; gap: 0.125rem; color: var(--yellow); }
        .product-rating .material-symbols-filled { font-size: 0.75rem; }
        .product-rating span { font-size: 0.75rem; font-weight: 500; color: var(--text-secondary); }
        .add-to-cart-button { display: flex; align-items: center; justify-content: center; height: 36px; width: auto; margin: 0 0.75rem 0.75rem; border: none; border-radius: 9999px; background-color: var(--primary); color: var(--text-light); font-family: var(--font-display); font-size: 0.875rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; }
        .add-to-cart-button:hover { background-color: var(--primary-hover); transform: scale(1.02); }
        .add-to-cart-button.adding { background-color: var(--green); color: white; cursor: not-allowed; transform: scale(1); }

        /* --- 8. PromotionDetailPage Styles --- */
        .promo-detail-page { display: flex; flex-direction: column; width: 100%; min-height: 100vh; animation: fadeIn 0.3s ease-in-out; }
        .promo-detail-header { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; padding: 1rem; padding-bottom: 0.5rem; background-color: var(--background-light-alpha); backdrop-filter: blur(8px); border-bottom: 1px solid #f0f0f0; }
        .back-button { color: var(--primary); }
        .promo-detail-title { font-size: 1.25rem; font-weight: 700; text-align: center; flex-grow: 1; margin-right: 40px; }
        .promo-detail-image { width: 100%; height: 240px; background-size: cover; background-position: center; }
        .promo-detail-content { padding: 1rem 0.75rem; background-color: var(--background-light); }
        .detail-section { margin-bottom: 1.5rem; }
        .detail-section h2 { font-size: 1.125rem; font-weight: 700; margin: 0 0 0.5rem 0; }
        .detail-section p { font-size: 1rem; color: var(--text-secondary); line-height: 1.6; margin: 0; }
        .detail-section ul { padding-left: 20px; margin: 0; }
        .detail-section li { font-size: 1rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.5rem; }

        /* --- 9. BottomNav Styles --- */
        .bottom-nav { 
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 10; height: 64px; 
          background-color: var(--background-light-alpha);
          backdrop-filter: blur(8px);
          border-top: 1px solid #f0f0f0; 
          box-shadow: 0 -2px 10px rgba(0,0,0,0.03); 
          display: flex; align-items: center; justify-content: space-around; padding: 0 0.5rem; 
        }
        .nav-item { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.25rem; color: var(--text-secondary); width: 25%; height: 100%; text-decoration: none; background: none; border: none; cursor: pointer; font-family: var(--font-display); transition: var(--transition-fast); }
        .nav-item:hover { color: var(--text-light); }
        .nav-item .material-symbols-outlined { font-size: 24px; transition: var(--transition-fast); }
        .nav-item span { font-size: 0.75rem; transition: var(--transition-fast); }
        .nav-item.active { color: var(--primary); }
        .nav-item.active span { font-weight: 700; }
        .nav-badge { position: absolute; top: 4px; right: 20px; background-color: red; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; }

        /* --- 10. CartPage Styles --- */
        .cart-page { display: flex; flex-direction: column; width: 100%; min-height: 100vh; animation: fadeIn 0.3s ease-in-out; }
        .cart-header { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; padding: 1rem; padding-bottom: 0.5rem; background-color: var(--background-light-alpha); backdrop-filter: blur(8px); border-bottom: 1px solid #f0f0f0; }
        .cart-title { font-size: 1.25rem; font-weight: 700; text-align: center; flex-grow: 1; margin-right: 40px; }
        .empty-cart { flex-grow: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; color: var(--text-secondary); }
        .empty-cart .material-symbols-outlined { font-size: 80px; opacity: 0.5; }
        .empty-cart h2 { font-size: 1.25rem; font-weight: 700; color: var(--text-light); }
        .cart-list { padding: 1rem 0.75rem; display: flex; flex-direction: column; gap: 1rem; }
        .cart-item { display: flex; gap: 1rem; padding: 1rem; border-bottom: none; background-color: var(--background-light); border-radius: 1rem; box-shadow: var(--shadow); }
        .cart-item-image { width: 80px; height: 80px; object-fit: contain; background-color: var(--card-light); border-radius: 0.5rem; padding: 0.25rem; }
        .cart-item-details { flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .cart-item-name { font-size: 1rem; font-weight: 500; color: var(--text-light); margin: 0; }
        .cart-item-price { font-size: 0.875rem; color: var(--text-secondary); margin: 0; }
        .cart-item-actions { display: flex; align-items: center; justify-content: space-between; }
        .quantity-controls { display: flex; align-items: center; gap: 0.5rem; }
        .quantity-button { width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--card-light); background-color: var(--background-light); color: var(--primary); font-size: 1rem; font-weight: 700; cursor: pointer; transition: var(--transition-fast); }
        .quantity-button:hover { background-color: var(--card-light); }
        .quantity-display { font-size: 1rem; font-weight: 700; width: 20px; text-align: center; }
        .remove-button { border: none; background: none; color: red; cursor: pointer; font-size: 0.875rem; transition: var(--transition-fast); }
        .remove-button:hover { opacity: 0.7; }
        .cart-summary { padding: 1rem; border-top: 1px solid #f0f0f0; background-color: var(--background-light-alpha); backdrop-filter: blur(8px); position: sticky; bottom: 0; }
        .summary-row { display: flex; justify-content: space-between; font-size: 1rem; margin-bottom: 0.5rem; }
        .summary-row.total { font-size: 1.25rem; font-weight: 700; color: var(--text-light); margin-top: 1rem; }
        .checkout-button { width: 100%; height: 48px; background-color: var(--primary); color: var(--text-light); border: none; border-radius: 9999px; font-family: var(--font-display); font-size: 1rem; font-weight: 700; cursor: pointer; margin-top: 1rem; transition: var(--transition-fast); }
        .checkout-button:hover { background-color: var(--primary-hover); transform: scale(1.02); }
      
        /* --- 11. ProductDetailPage Styles --- */
        .product-detail-page { display: flex; flex-direction: column; width: 100%; min-height: 100vh; padding-bottom: 80px; animation: fadeIn 0.3s ease-in-out; }
        .product-detail-header { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; padding: 1rem; padding-bottom: 0.5rem; background-color: var(--background-light-alpha); backdrop-filter: blur(8px); border-bottom: 1px solid #f0f0f0; }
        .product-detail-title { font-size: 1.25rem; font-weight: 700; text-align: center; flex-grow: 1; margin-right: 40px; }
        .gallery-container { width: 100%; display: flex; flex-direction: column; }
        .gallery-main-image { width: 100%; aspect-ratio: 1 / 1; background-color: var(--card-light); display: flex; align-items: center; justify-content: center; }
        .gallery-main-image img { width: 100%; height: 100%; object-fit: contain; }
        .gallery-thumbnails { 
          display: flex; gap: 0.5rem; 
          padding: 0.5rem 0.75rem; 
          overflow-x: auto; 
          background-color: var(--background-light); 
          border-bottom: 1px solid #f0f0f0; 
          overscroll-behavior-x: contain; /* (อัปเดต!) ป้องกันการเลื่อนหน้า */
        }
        .thumbnail-button { width: 60px; height: 60px; border: 2px solid transparent; border-radius: 0.5rem; padding: 0; cursor: pointer; flex-shrink: 0; background-color: var(--card-light); transition: var(--transition-fast); }
        .thumbnail-button.active { border-color: var(--primary); }
        .thumbnail-button:not(.active):hover { border-color: #ddd; }
        .thumbnail-button img { width: 100%; height: 100%; object-fit: contain; border-radius: 0.375rem; }
        .product-detail-content { padding: 1rem 0.75rem; display: flex; flex-direction: column; gap: 1.5rem; background-color: var(--background-light); }
        
        .product-detail-info {
          position: relative; /* (ใหม่!) */
        }
        .product-detail-info h1 {
          font-size: 1.5rem; 
          font-weight: 700;
          margin: 0;
          color: var(--text-light);
          padding-right: 40px; /* (ใหม่!) เว้นที่ให้ปุ่ม favorite */
        }
        
        /* (ใหม่!) ปุ่ม Favorite บนหน้ารายละเอียด */
        .favorite-button-detail {
          position: absolute;
          top: 0;
          right: 0;
          /* (ใช้ .icon-button style) */
        }
        .favorite-button-detail.favorited {
          color: var(--red);
        }

        .product-detail-info .product-price { font-size: 1.25rem; font-weight: 700; color: var(--primary); margin-top: 0.5rem; }
        .specs-table { width: 100%; border-collapse: collapse; }
        .specs-table th, .specs-table td { text-align: left; padding: 0.75rem 0.5rem; border-bottom: 1px solid var(--card-light); font-size: 0.875rem; vertical-align: top; }
        .specs-table th { font-weight: 500; color: var(--text-secondary); width: 30%; }
        .specs-table td { font-weight: 500; color: var(--text-light); }
        .product-detail-bottom-bar { position: fixed; bottom: 0; left: 0; right: 0; background-color: var(--background-light-alpha); backdrop-filter: blur(8px); padding: 1rem; border-top: 1px solid #f0f0f0; box-shadow: 0 -2px 10px rgba(0,0,0,0.05); z-index: 5; }

        /* --- 12. Notification Modal Styles --- */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease-in-out;
        }
        .modal-content {
          background-color: var(--background-light);
          border-radius: 1.5rem;
          padding: 1.5rem;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          animation: modalPopIn 0.3s ease-out;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .modal-header h2 {
          margin: 0;
          font-size: 1.25rem;
          color: var(--text-light);
        }
        .modal-close-button { /* ใช้ .icon-button */
          color: var(--text-secondary);
        }
        .notification-item {
          display: flex;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--card-light);
        }
        .notification-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .notification-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--card-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
        }
        .notification-icon.promo {
          color: var(--green);
        }
        .notification-content p {
          margin: 0;
          font-size: 0.875rem;
          color: var(--text-light);
        }
        .notification-content span {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        
        /* --- 13. (อัปเดต!) Favorite & Account Page Styles --- */
        .account-page-content, .favorite-page-content {
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .user-profile-card {
          background-color: var(--background-light);
          border-radius: 1rem;
          box-shadow: var(--shadow);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .user-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: var(--primary);
          color: var(--text-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .user-avatar .material-symbols-outlined {
          font-size: 40px;
          font-variation-settings: 'FILL' 1;
        }
        .user-profile-card h2 {
          margin: 0.5rem 0 0;
          font-size: 1.125rem;
        }
        .user-profile-card p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
        
        .account-menu-list {
          background-color: var(--background-light);
          border-radius: 1rem;
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        .account-menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: 1px solid var(--card-light);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .account-menu-item:last-child {
          border-bottom: none;
        }
        .account-menu-item:hover {
          background-color: #fcfcfc;
        }
        .account-menu-item-icon {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-light);
        }
        .account-menu-item-icon .material-symbols-outlined {
          color: var(--text-secondary);
        }
        .account-menu-item .material-symbols-outlined.arrow {
          color: var(--text-secondary);
        }
        .logout-button {
          margin-top: 1rem;
          width: 100%;
          height: 48px;
          background-color: var(--background-light);
          color: var(--red);
          border: 1px solid var(--red);
          border-radius: 9999px;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .header-logo {
         height: clamp(45px, 10vw, 105px);
         width: auto;
         display: block;

         /* (อัปเดต!) เปลี่ยน 1 บรรทัดนี้ */
         margin: -5px auto 0; 
        }
        .logout-button:hover {
          background-color: var(--red);
          color: white;
        }

        /* (ใหม่!) --- 14. AllProductsPage Styles --- */
        .all-products-page {
          display: flex; 
          flex-direction: column; 
          width: 100%; 
          min-height: 100vh; 
          animation: fadeIn 0.3s ease-in-out;
        }
        .all-products-header {
          position: sticky; 
          top: 0; 
          z-index: 10; 
          display: flex; 
          align-items: center; 
          padding: 1rem; 
          padding-bottom: 0.5rem; 
          background-color: var(--background-light-alpha); 
          backdrop-filter: blur(8px); 
          border-bottom: 1px solid #f0f0f0;
        }
        .all-products-title {
          font-size: 1.25rem; 
          font-weight: 700; 
          text-align: center; 
          flex-grow: 1; 
          margin-right: 40px;
        }
        .all-products-grid {
          padding: 1rem 0.75rem;
        }

      `}
    </style>
  );
};

// ==================================================================
// --- 3. UI COMPONENTS ---
// ==================================================================

// (ไฟล์: 'src/components/Header.jsx')
// (อัปเดต!) รับ onNotificationClick และ isMainPage
// (ไฟล์ Header.js หรือที่ที่คุณนิยาม Header)

// (อัปเดต!) ลบ onNotificationClick ออกจาก props
function Header({ isMainPage = false }) { 
  return (
    <header className={`app-header ${isMainPage ? 'main-header' : ''}`}>
      <div className="header-container">
        
        {/* ตัวซ้าย (ซ่อนไว้ ให้โลโก้อยู่กลาง) */}
        <div className="header-logo-placeholder" style={{ width: '48px' }}></div> 
        
        {/* โลโก้ (อยู่ตรงกลาง) */}
        <h1 className="header-title" style={{ textAlign: 'center' }}>
          <a href="/">
            <img 
              src="/images/logo.jpg" // (แก้ path โลโก้ของคุณ)
              alt="ซิลมีนโมบาย" 
              className="header-logo" // (คุณต้องเพิ่ม CSS .header-logo ที่เคยทำไว้)
            />
          </a>
        </h1>
        
        {/* (อัปเดต!) ซ่อนปุ่มเดิม เพื่อให้โลโก้อยู่กลาง */}
        <div className="header-action" style={{ visibility: 'hidden', pointerEvents: 'none' }}>
          <button className="icon-button" disabled>
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </div>
    </header>
  );
}

// (ไฟล์ SearchBar.js หรือที่ที่คุณนิยาม Component)

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    // ใช้ .search-bar-padding เป็นตัวหุ้มที่จะยืดขยาย
    <div className="search-bar-padding">
      <div className="search-input-wrapper">
        <div className="search-icon">
          <span className="material-symbols-outlined">search</span>
        </div>
        <input 
          type="text" 
          className="search-input" 
          placeholder="ค้นหามือถือ..." 
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
}

// (ไฟล์: 'src/components/CategoryChips.jsx')
// (อัปเดต!) รับ props จาก HomePage
function CategoryChips({ activeChip, onChipChange }) {
  return (
    // (อัปเดต!) เพิ่ม Wrapper
    <div className="chip-container-wrapper">
      <div className="chip-container">
        {CATEGORIES.map((cat) => (
          <button 
            key={cat.id} 
            className={`chip ${activeChip === cat.id ? 'active' : ''}`}
            onClick={() => onChipChange(cat.id)}
          >
            {cat.icon && <span className="material-symbols-outlined">{cat.icon}</span>}
            <p>{cat.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// (ไฟล์: 'src/components/PromotionCarousel.jsx')
function PromotionCarousel({ promotions, onPromoClick }) {
  // ... (โค้ด PromotionCarousel เหมือนเดิม) ...
  return (
    <div className="carousel-container">
      {promotions.map((promo) => (
        <PromotionCard 
          key={promo.id} 
          promo={promo} 
          onPromoClick={onPromoClick}
        />
      ))}
    </div>
  );
}

// (ไฟล์ย่อยของ PromotionCarousel)
function PromotionCard({ promo, onPromoClick }) {
  // ... (โค้ด PromotionCard เหมือนเดิม) ...
  return (
    <button 
      type="button" 
      className="promo-card promo-card-button" 
      onClick={() => onPromoClick(promo.id)} 
    >
      <div 
        className="promo-image"
        style={{ backgroundImage: `url(${promo.imageUrl})` }}
        aria-label={promo.title}
      ></div>
      <div className="promo-content">
        <p className="promo-title">{promo.title}</p>
        <p className="promo-subtitle">{promo.subtitle}</p>
      </div>
    </button>
  );
}

// (ไฟล์: 'src/components/ProductList.jsx')
// (อัปเดต!) รับ onSeeAll
function ProductList({ products, onAddToCart, onProductClick, onToggleFavorite, favorites, onSeeAll }) {
  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">โทรศัพท์ยอดนิยม</h2>
        {/* (อัปเดต!) เพิ่ม onClick */}
        <button className="see-all-button" onClick={onSeeAll}>
          <span>ดูทั้งหมด</span>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      
      <div className="product-list-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
            onProductClick={onProductClick}
            onToggleFavorite={onToggleFavorite} // (ใหม่!) ส่งต่อ
            favorites={favorites} // (ใหม่!) ส่งต่อ
          />
        ))}
      </div>
    </section>
  );
}

// (ไฟล์ย่อยของ ProductList)
// (อัปเดต!) รับ onToggleFavorite, favorites
function ProductCard({ product, onAddToCart, onProductClick, onToggleFavorite, favorites }) {
  const formattedPrice = new Intl.NumberFormat('th-TH').format(product.price);
  const [isAdding, setIsAdding] = React.useState(false);

  // (ใหม่!) เช็คว่าสินค้าถูกใจหรือยัง
  const isFavorited = favorites.some(fav => fav.id === product.id);

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  
  // (ใหม่!) ฟังก์ชันสำหรับปุ่มหัวใจ
  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // ป้องกันการ navigate
    onToggleFavorite(product);
  };

  return (
    <div className="product-card">
      {/* (ใหม่!) ปุ่ม Favorite */}
      <button 
        className={`favorite-button-card ${isFavorited ? 'favorited' : ''}`}
        onClick={handleFavoriteClick}
        aria-label="Add to favorites"
      >
        <span className="material-symbols-outlined" style={isFavorited ? {fontVariationSettings: "'FILL' 1"} : {}}>
          favorite
        </span>
      </button>

      <div 
        className="product-card-clickable-area"
        onClick={() => onProductClick(product.id)}
      >
        <div className="product-image-container">
          <img 
            className="product-image" 
            src={product.imageUrl} 
            alt={product.name} 
          />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-details">
            <p className="product-price">฿{formattedPrice}</p>
            <div className="product-rating">
              <span className="material-symbols-outlined material-symbols-filled">star</span>
              <span>{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        className={`add-to-cart-button ${isAdding ? 'adding' : ''}`}
        onClick={handleAddToCartClick}
        disabled={isAdding}
      >
        {isAdding ? 'เพิ่มแล้ว!' : 'เพิ่มลงตะกร้า'}
      </button>
    </div>
  );
}

// (ไฟล์: 'src/components/BottomNav.jsx')
function BottomNav({ activeTab, onTabChange, cartItemCount }) {
  // ... (โค้ด BottomNav เหมือนเดิม) ...
  const navItems = [
    { id: 'home', icon: 'home', label: 'หน้าแรก' },
    { id: 'favorite', icon: 'favorite', label: 'รายการโปรด' },
    { id: 'cart', icon: 'shopping_cart', label: 'ตะกร้า' },
    { id: 'account', icon: 'person', label: 'บัญชี' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button 
          key={item.id}
          className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => onTabChange(item.id)}
        >
          {item.id === 'cart' && cartItemCount > 0 && (
            <div className="nav-badge">{cartItemCount}</div>
          )}
          <span 
            className="material-symbols-outlined"
            style={activeTab === item.id ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            {item.icon}
          </span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

// --- (ไฟล์: 'src/pages/HomePage.jsx') ---
// (อัปเดต!) รับ props เพิ่ม (activeChip, onChipChange, searchQuery, onSearchChange, filteredProducts, onSeeAll)
function HomePage({ 
  onPromoClick, 
  onAddToCart, 
  onProductClick, 
  onNotificationClick, 
  onToggleFavorite, 
  favorites,
  activeChip,
  onChipChange,
  searchQuery,
  onSearchChange,
  filteredProducts,
  onSeeAll
}) {

  return (
    <>
      {/* (อัปเดต!) ส่ง isMainPage={true} และลบ onNotificationClick */}
      <Header isMainPage={true} />
      <main className="main-content">
        
        {/* (อัปเดต!) สร้าง Wrapper ใหม่สำหรับ Search + Notify */}
        <div className="search-and-action-wrapper">
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
          />
          <button className="search-action-button" onClick={onNotificationClick}>
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
        
        <CategoryChips 
          activeChip={activeChip} // (อัปเดต!) รับจาก prop
          onChipChange={onChipChange} // (อัปเดต!) รับจาก prop
        />
        <PromotionCarousel 
          promotions={PROMOTIONS} 
          onPromoClick={onPromoClick}
        />
        <ProductList 
          products={filteredProducts} // (อัปเดต!) รับจาก prop
          onAddToCart={onAddToCart}
          onProductClick={onProductClick}
          onToggleFavorite={onToggleFavorite} // (ใหม่!) ส่งต่อ
          favorites={favorites} // (ใหม่!) ส่งต่อ
          onSeeAll={onSeeAll} // (ใหม่!) ส่งต่อ
        />
      </main>
    </>
  );
}

// --- (ไฟล์: 'src/pages/PromotionDetailPage.jsx') ---
function PromotionDetailPage({ promoId, onGoBack }) {
  // ... (โค้ด PromotionDetailPage เหมือนเดิม) ...
  const promo = PROMOTIONS.find(p => p.id === promoId);

  if (!promo) {
    return (
      <div className="promo-detail-page">
        <header className="promo-detail-header">
          <button onClick={onGoBack} className="icon-button back-button">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h1 className="promo-detail-title">ไม่พบข้อมูล</h1>
        </header>
        <div className="promo-detail-content">
          <p>ไม่พบข้อมูลโปรโมชั่นที่คุณเลือก</p>
        </div>
      </div>
    );
  }

  return (
    <div className="promo-detail-page">
      <header className="promo-detail-header">
        <button onClick={onGoBack} className="icon-button back-button">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="promo-detail-title">โปรโมชั่น</h1>
      </header>
      <main>
        <div 
          className="promo-detail-image"
          style={{ backgroundImage: `url(${promo.imageUrl})` }}
          aria-label={promo.title}
        ></div>
        <div className="promo-detail-content">
          <div className="detail-section">
            <h2 style={{color: 'var(--primary)'}}>{promo.title}</h2>
            <p>{promo.details}</p>
          </div>
          <div className="detail-section">
            <h2>ขั้นตอนการเข้าร่วม</h2>
            <ul>
              {promo.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- (ไฟล์: 'src/pages/CartPage.jsx') ---
function CartPage({ cart, onUpdateQuantity, onRemoveFromCart, onGoBack }) {
  // ... (โค้ด CartPage เหมือนเดิม) ...
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + shippingFee;
  const formatCurrency = (amount) => new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0 }).format(amount);

  return (
    <div className="cart-page">
      <header className="cart-header">
        <button onClick={onGoBack} className="icon-button back-button">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="cart-title">ตะกร้าสินค้า</h1>
      </header>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <span className="material-symbols-outlined">shopping_cart</span>
          <h2>ตะกร้าของคุณว่างเปล่า</h2>
          <p>ลองไปเลือกซื้อสินค้าที่หน้าแรก</p>
        </div>
      ) : (
        <>
          <main className="main-content">
            <div className="cart-list">
              {cart.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onUpdateQuantity={onUpdateQuantity}
                  onRemoveFromCart={onRemoveFromCart}
                  formatCurrency={formatCurrency}
                />
              ))}
            </div>
          </main>
          <div className="cart-summary">
            <div className="summary-row">
              <span>ยอดรวม (สินค้า)</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>ค่าจัดส่ง</span>
              <span>{formatCurrency(shippingFee)}</span>
            </div>
            <div className="summary-row total">
              <span>ยอดสุทธิ</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <button className="checkout-button">
              ชำระเงิน
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// (ไฟล์ย่อยของ CartPage)
function CartItem({ item, onUpdateQuantity, onRemoveFromCart, formatCurrency }) {
  // ... (โค้ด CartItem เหมือนเดิม) ...
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <div>
          <p className="cart-item-name">{item.name}</p>
          <p className="cart-item-price">{formatCurrency(item.price)}</p>
        </div>
        <div className="cart-item-actions">
          <div className="quantity-controls">
            <button 
              className="quantity-button"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className="quantity-display">{item.quantity}</span>
            <button 
              className="quantity-button"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          <button 
            className="remove-button"
            onClick={() => onRemoveFromCart(item.id)}
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}

// --- (ไฟล์: 'src/pages/ProductDetailPage.jsx') ---
// (อัปเดต!) รับ onToggleFavorite, favorites
function ProductDetailPage({ productId, onGoBack, onAddToCart, onToggleFavorite, favorites }) {
  const product = POPULAR_PRODUCTS.find(p => p.id === productId);
  const [activeImage, setActiveImage] = React.useState(product ? product.gallery[0] : "");
  const [isAdding, setIsAdding] = React.useState(false);
  
  const handleAddToCartClick = () => {
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  
  const formatCurrency = (amount) => new Intl.NumberFormat('th-TH').format(amount);

  if (!product) {
    return (
      <div className="product-detail-page">
        <header className="product-detail-header">
          <button onClick={onGoBack} className="icon-button back-button">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h1 className="product-detail-title">ไม่พบสินค้า</h1>
        </header>
        <div className="promo-detail-content">
          <p>ไม่พบข้อมูลโปรโมชั่นที่คุณเลือก</p>
        </div>
      </div>
    );
  }
  
  // (ใหม่!) เช็คว่าสินค้าถูกใจหรือยัง
  const isFavorited = favorites.some(fav => fav.id === product.id);

  return (
    <div className="product-detail-page">
      <header className="product-detail-header">
        <button onClick={onGoBack} className="icon-button back-button">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="product-detail-title">{product.name}</h1>
      </header>
      <main>
        <div className="gallery-container">
          <div className="gallery-main-image">
            <img src={activeImage} alt={product.name} />
          </div>
          <div className="gallery-thumbnails">
            {product.gallery.map((imgUrl, index) => (
              <button 
                key={index} 
                className={`thumbnail-button ${activeImage === imgUrl ? 'active' : ''}`}
                onClick={() => setActiveImage(imgUrl)}
              >
                <img src={imgUrl} alt={`${product.name} thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="product-detail-content">
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            
            {/* (ใหม่!) ปุ่ม Favorite */}
            <button 
              className={`icon-button favorite-button-detail ${isFavorited ? 'favorited' : ''}`}
              onClick={() => onToggleFavorite(product)}
            >
              <span className="material-symbols-outlined" style={isFavorited ? {fontVariationSettings: "'FILL' 1"} : {}}>
                favorite
              </span>
            </button>
            
            <p className="product-price">฿{formatCurrency(product.price)}</p>
          </div>
          <div className="detail-section">
            <h2>สเป็คสินค้า</h2>
            <table className="specs-table">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="detail-section">
            <h2>ข้อมูลประกัน</h2>
            <p>{product.warranty}</p>
          </div>
        </div>
      </main>
      <div className="product-detail-bottom-bar">
        <button 
          className={`checkout-button ${isAdding ? 'adding' : ''}`}
          onClick={handleAddToCartClick}
          disabled={isAdding}
        >
          {isAdding ? 'เพิ่มลงตะกร้าแล้ว!' : 'เพิ่มลงตะกร้า'}
        </button>
      </div>
    </div>
  );
}

// --- (ใหม่!) (ไฟล์: 'src/pages/FavoritePage.jsx') ---
// (อัปเดต!) หน้า 'รายการโปรด' ให้แสดงสินค้าจริง
function FavoritePage({ favorites, onProductClick, onAddToCart, onToggleFavorite, onNotificationClick }) {
  return (
    <>
      {/* (อัปเดต!) ส่ง isMainPage={true} */}
      <Header onNotificationClick={onNotificationClick} isMainPage={true} />
      {favorites.length === 0 ? (
        <main className="main-content page-placeholder">
          <span className="material-symbols-outlined">favorite</span>
          <h2>รายการโปรดของคุณ</h2>
          <p>สินค้าที่คุณกดถูกใจจะแสดงที่นี่</p>
        </main>
      ) : (
        <main className="main-content favorite-page-content">
          <div className="section-header">
            <h2 className="section-title">รายการโปรด ({favorites.length})</h2>
          </div>
          <div className="product-list-grid">
            {favorites.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
                onProductClick={onProductClick}
                onToggleFavorite={onToggleFavorite}
                favorites={favorites} // ส่งต่อ
              />
            ))}
          </div>
        </main>
      )}
    </>
  );
}

// --- (ใหม่!) (ไฟล์: 'src/pages/AccountPage.jsx') ---
// (อัปเดต!) รับ onNotificationClick และส่งต่อ
function AccountPage({ onNotificationClick }) {
  return (
    <>
      {/* (อัปเดต!) ส่ง isMainPage={true} */}
      <Header onNotificationClick={onNotificationClick} isMainPage={true} />
      <main className="main-content account-page-content">
        <div className="user-profile-card">
          <div className="user-avatar">
            <span className="material-symbols-outlined">person</span>
          </div>
          {/* (อัปเดต!) เปลี่ยนชื่อ */}
          <h2>ผู้ใช้ ซิลมีนโมบาย</h2>
          <p>user.email@silme.com</p>
        </div>
        
        <div className="account-menu-list">
          <div className="account-menu-item">
            <div className="account-menu-item-icon">
              <span className="material-symbols-outlined">history</span>
              <p>ประวัติการสั่งซื้อ</p>
            </div>
            <span className="material-symbols-outlined arrow">arrow_forward_ios</span>
          </div>
          <div className="account-menu-item">
            <div className="account-menu-item-icon">
              <span className="material-symbols-outlined">location_on</span>
              <p>ที่อยู่จัดส่ง</p>
            </div>
            <span className="material-symbols-outlined arrow">arrow_forward_ios</span>
          </div>
          <div className="account-menu-item">
            <div className="account-menu-item-icon">
              <span className="material-symbols-outlined">settings</span>
              <p>ตั้งค่าบัญชี</p>
            </div>
            <span className="material-symbols-outlined arrow">arrow_forward_ios</span>
          </div>
        </div>
        
        <button className="logout-button">
          ออกจากระบบ
        </button>
      </main>
    </>
  );
}

// --- (ใหม่!) (ไฟล์: 'src/components/NotificationModal.jsx') ---
function NotificationModal({ onClose }) {
  // ... (โค้ด NotificationModal เหมือนเดิม) ...
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>การแจ้งเตือน</h2>
          <button className="icon-button modal-close-button" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="notification-item">
            <div className="notification-icon promo">
              <span className="material-symbols-outlined">sell</span>
            </div>
            <div className="notification-content">
              <p><strong>โปรโมชั่น 50%!</strong></p>
              <span>ข้อเสนอสุดพิเศษสำหรับคุณ เริ่มแล้ววันนี้</span>
            </div>
          </div>
          <div className="notification-item">
            <div className="notification-icon">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <div className="notification-content">
              <p><strong>Galaxy S24 Ultra</strong> ของคุณกำลังจัดส่ง</p>
              <span>คาดว่าจะได้รับใน 1-2 วันทำการ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// (ใหม่!) --- (ไฟล์: 'src/pages/AllProductsPage.jsx') ---
// Component ใหม่สำหรับแสดงสินค้าทั้งหมด
function AllProductsPage({ 
  products, 
  activeChip, 
  onGoBack, 
  onProductClick, 
  onAddToCart, 
  onToggleFavorite, 
  favorites 
}) {
  
  // หาชื่อหมวดหมู่จาก activeChip
  const categoryName = CATEGORIES.find(c => c.id === activeChip)?.name || 'สินค้าทั้งหมด';
  const pageTitle = activeChip === 'all' ? 'โทรศัพท์ยอดนิยม' : categoryName;

  return (
    <div className="all-products-page">
      <header className="all-products-header">
        <button onClick={onGoBack} className="icon-button back-button">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="all-products-title">{pageTitle}</h1>
      </header>
      <main className="main-content all-products-grid">
        {products.length === 0 ? (
          <div className="page-placeholder" style={{paddingTop: '5rem'}}>
            <span className="material-symbols-outlined">search_off</span>
            <h2>ไม่พบสินค้า</h2>
            <p>ไม่พบสินค้าที่ตรงกับการค้นหาของคุณ</p>
          </div>
        ) : (
          <div className="product-list-grid">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
                onProductClick={onProductClick}
                onToggleFavorite={onToggleFavorite}
                favorites={favorites}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}


// ==================================================================
// --- 4. MAIN APP COMPONENT ---
// ==================================================================
function App() {
  
  // (อัปเดต!) State 1: View ('home', 'promoDetail', 'cart', 'productDetail', 'favorite', 'account', 'allProducts')
  const [currentView, setCurrentView] = React.useState('home');
  
  // State 2: Active Tab ('home', 'favorite', 'cart', 'account')
  const [activeTab, setActiveTab] = React.useState('home');
  
  // State 3: Selected Promo ID
  const [selectedPromoId, setSelectedPromoId] = React.useState(null);
  
  // State 4: Selected Product ID
  const [selectedProductId, setSelectedProductId] = React.useState(null);

  // State 5: Cart
  const [cart, setCart] = React.useState([]);
  
  // (ใหม่!) State 6: Notification Modal
  const [showNotifications, setShowNotifications] = React.useState(false);
  
  // (ใหม่!) State 7: Favorites
  const [favorites, setFavorites] = React.useState([]);
  
  // (ใหม่!) State 8: ย้าย activeChip จาก HomePage ขึ้นมา
  const [activeChip, setActiveChip] = React.useState('all');
  
  // (ใหม่!) State 9: ย้าย searchQuery จาก HomePage ขึ้นมา
  const [searchQuery, setSearchQuery] = React.useState('');


  // (ใหม่!) --- ฟังก์ชันจัดการ Filter และ Search (ย้ายมาจาก HomePage) ---
  
  const handleChipChange = (chipId) => {
    setActiveChip(chipId);
  };
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // (ใหม่!) ตรรกะการกรองสินค้า (ย้ายมาจาก HomePage)
  const filteredProducts = React.useMemo(() => {
    
    // 1. กรองด้วย Chip (หมวดหมู่)
    let productsByChip;
    if (activeChip === 'all') {
      productsByChip = POPULAR_PRODUCTS;
    } else if (activeChip === 'flagship') {
      productsByChip = POPULAR_PRODUCTS.filter(p => p.isFlagship);
    } else {
      // กรองตามแบรนด์
      productsByChip = POPULAR_PRODUCTS.filter(p => 
        p.brand.toLowerCase() === activeChip
      );
    }
    
    // 2. กรองด้วย Search Query (จากผลลัพธ์ขั้นตอนที่ 1)
    if (!searchQuery) {
      return productsByChip; // ถ้าช่องค้นหาว่าง, ส่งคืนผลลัพธ์ตาม Chip
    }
    
    const lowerCaseQuery = searchQuery.toLowerCase();
    return productsByChip.filter(product =>
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.brand.toLowerCase().includes(lowerCaseQuery)
    );

  }, [activeChip, searchQuery]); // คำนวณใหม่เมื่อ chip หรือ query เปลี่ยน


  // --- ฟังก์ชันจัดการตะกร้า ---
  
  const handleAddToCart = (product) => {
    // ... (โค้ด handleAddToCart เหมือนเดิม) ...
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    // ... (โค้ด handleUpdateQuantity เหมือนเดิม) ...
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemoveFromCart = (productId) => {
    // ... (โค้ด handleRemoveFromCart เหมือนเดิม) ...
    setCart(cart.filter(item => item.id !== productId));
  };
  
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // (ใหม่!) --- ฟังก์ชันจัดการรายการโปรด ---
  const handleToggleFavorite = (product) => {
    const isFavorited = favorites.some(fav => fav.id === product.id);
    if (isFavorited) {
      // ถ้ามีอยู่แล้ว ให้ลบออก
      setFavorites(favorites.filter(fav => fav.id !== product.id));
    } else {
      // ถ้ายังไม่มี ให้เพิ่มเข้าไป
      setFavorites([...favorites, product]);
    }
  };


  // --- ฟังก์ชันจัดการการนำทาง (Navigation) ---

  const handlePromoClick = (promoId) => {
    // ... (โค้ด handlePromoClick เหมือนเดิม) ...
    setSelectedPromoId(promoId);
    setCurrentView('promoDetail');
  };
  
  const handleProductClick = (productId) => {
    // ... (โค้ด handleProductClick เหมือนเดิม) ...
    setSelectedProductId(productId);
    setCurrentView('productDetail');
  };
  
  // (ใหม่!) ฟังก์ชันสำหรับปุ่ม "ดูทั้งหมด"
  const handleSeeAll = () => {
    setCurrentView('allProducts');
  };

  const handleGoBack = () => {
    // (อัปเดต!) กลับไปหน้าล่าสุดที่ผู้ใช้อยู่
    if (activeTab === 'cart') {
      setCurrentView('cart');
    } else if (activeTab === 'favorite') {
      setCurrentView('favorite');
    } else if (activeTab === 'account') {
      setCurrentView('account');
    } else {
      setCurrentView('home');
    }
    // เคลียร์ ID
    setSelectedPromoId(null);
    setSelectedProductId(null);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    
    // (อัปเดต!) เปลี่ยน View ตามแท็บ
    if (tabId === 'home') {
      setCurrentView('home');
    } else if (tabId === 'cart') {
      setCurrentView('cart');
    } else if (tabId === 'favorite') { // (ใหม่!)
      setCurrentView('favorite');
    } else if (tabId === 'account') { // (ใหม่!)
      setCurrentView('account');
    } else {
      setCurrentView('home');
    }
  };
  
  const handleNotificationClick = () => {
    setShowNotifications(true);
  };

  return (
    <div className="app-container">
      
      <GlobalStyles />
      
      {/* (ใหม่!) โมดอลการแจ้งเตือน (จะแสดงทับทุกอย่าง) */}
      {showNotifications && <NotificationModal onClose={() => setShowNotifications(false)} />}
      
      {/* --- การสลับหน้า --- */}
      
      {currentView === 'home' && (
        <HomePage 
          onPromoClick={handlePromoClick} 
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick}
          onNotificationClick={handleNotificationClick}
          favorites={favorites} // (ใหม่!)
          onToggleFavorite={handleToggleFavorite} // (ใหม่!)
          // (ใหม่!) ส่ง state และ handler สำหรับ filter/search
          activeChip={activeChip}
          onChipChange={handleChipChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          filteredProducts={filteredProducts}
          onSeeAll={handleSeeAll} // (ใหม่!)
        />
      )}
      
      {currentView === 'promoDetail' && (
        <PromotionDetailPage 
          promoId={selectedPromoId} 
          onGoBack={handleGoBack} 
        />
      )}
      
      {currentView === 'cart' && (
        <CartPage 
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveFromCart={handleRemoveFromCart}
          onGoBack={handleGoBack}
        />
      )}
      
      {currentView === 'productDetail' && (
        <ProductDetailPage
          productId={selectedProductId}
          onGoBack={handleGoBack}
          onAddToCart={handleAddToCart}
          favorites={favorites} // (ใหม่!)
          onToggleFavorite={handleToggleFavorite} // (ใหม่!)
        />
      )}
      
      {/* (อัปเดต!) หน้า 'รายการโปรด' */}
      {currentView === 'favorite' && (
        <FavoritePage 
          favorites={favorites}
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
          onNotificationClick={handleNotificationClick}
        />
      )}
      
      {/* (อัปเดต!) หน้า 'บัญชี' */}
      {currentView === 'account' && (
        <AccountPage 
          onNotificationClick={handleNotificationClick}
        />
      )}
      
      {/* (ใหม่!) หน้า 'สินค้าทั้งหมด' */}
      {currentView === 'allProducts' && (
        <AllProductsPage
          products={filteredProducts}
          activeChip={activeChip}
          onGoBack={handleGoBack}
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
          favorites={favorites}
        />
      )}
      
      {/* --- จบการสลับหน้า --- */}

      {/* (อัปเดต!) ไม่ต้องแสดง BottomNav ถ้าอยู่ในหน้ารายละเอียด หรือหน้า 'สินค้าทั้งหมด' */}
      {currentView !== 'promoDetail' && currentView !== 'productDetail' && currentView !== 'allProducts' && ( 
        <BottomNav 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
          cartItemCount={totalCartItems}
        />
      )}
      
    </div>
  )
}

// (อัปเดต!) เปลี่ยนเป็น default export
export default App;

