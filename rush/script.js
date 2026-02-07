// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {                       
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));              
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;     /*เป็นโค้ดสำหรับ smooth scrolling ของเมนูในหน้าเดียว */
            const targetPosition = target.offsetTop - navbarHeight;                 /*ช่วยให้ UX ดีขึ้นและป้องกัน navbar บัง section*/
            
            window.scrollTo({                                                       /*เลื่อนหน้าเว็บไปยังตำแหน่งของ section ที่คลิก */
                top: targetPosition,
                behavior: 'smooth' 
            });
        } 
    });
});

// Navbar background change on scroll  
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';   /*เป็นโค้ดที่เปลี่ยนเงา navbar ตามการ scroll เพื่อเพิ่ม visual feedback และ UX*/
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Active navigation link highlight
const sections = document.querySelectorAll('section[id]');              
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;                 /*โค้ดส่วนนี้ใช้ตรวจสอบตำแหน่งการ scroll ของหน้าเว็บ */
        if (pageYOffset >= (sectionTop - 200)) {                    /*เปลี่ยนสถานะเมนู navigation ให้เป็น active ตาม section ที่ผู้ใช้กำลังดูอยู่ */
            current = section.getAttribute('id');                   /*เพื่อให้ผู้ใช้รู้ว่าตอนนี้อยู่ส่วนไหนของหน้าเว็บ */
        }
    });

    navLinks.forEach(link => {                                      // อัปเดตสถานะ active ของลิงก์ในเมนู
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {                                       /*ตั้งค่า options สำหรับ Intersection Observer */
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'                             /*เวลาเลื่อนลงแล้วจะเห็น element ต่างๆเลื่อนแบบเฟดขึ้นมา animation ช่วยให้เว็ปดูลื่น */
};

const observer = new IntersectionObserver((entries) => {        
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and skill elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .skill-card, .project-card, .experience-card, .achievement-card');
    animatedElements.forEach(el => {                                    // ตั้งค่าเริ่มต้นของ element ที่จะ animate
        el.style.opacity = '0';                                         // ซ่อน element ก่อนที่จะเข้ามาใน viewport
        el.style.transform = 'translateY(30px)';                        // เลื่อน element ลงเล็กน้อย
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';    // กำหนด transition สำหรับ animation
        observer.observe(el);                                           // เริ่มสังเกต element
    });
});

// Mobile menu close on link click
const navbarCollapse = document.querySelector('.navbar-collapse');  // ตรวจสอบว่ามีเมนูแบบพับได้ (collapsible menu) อยู่หรือไม่
const navbarToggler = document.querySelector('.navbar-toggler');    // ตรวจสอบปุ่มที่ใช้เปิด/ปิดเมนูแบบพับได้

if (navbarCollapse && navbarToggler) {                              // ถ้ามีเมนูแบบพับได้และปุ่ม toggler
    document.querySelectorAll('.nav-link').forEach(link => {        // เพิ่ม event listener ให้กับลิงก์ในเมนู
        link.addEventListener('click', () => {                      // เมื่อคลิกที่ลิงก์
            if (navbarCollapse.classList.contains('show')) {        // ถ้าเมนูแบบพับได้กำลังแสดงอยู่
                navbarToggler.click();                              // ให้คลิกปุ่ม toggler เพื่อปิดเมนู 
            }
        });
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';                              //เป็นโค้ดสำหรับเพิ่มเอฟเฟกต์ fade-in ตอนหน้าเว็บโหลดเสร็จ
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
