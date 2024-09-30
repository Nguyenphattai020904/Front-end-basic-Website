// Định nghĩa hàm toggleMenu để mở hoặc đóng menu
function toggleMenu() {
    var navbar = document.querySelector('.navbar'); // Lấy phần tử có class là 'navbar'
    navbar.classList.toggle('active'); // Thêm hoặc loại bỏ class 'active' cho phần tử 'navbar'
}
// Lắng nghe sự kiện click trên toàn bộ tài liệu
document.addEventListener('click', function(event) {
    var navbar = document.querySelector('.navbar'); // Lấy phần tử có class là 'navbar'
    var menuIcon = document.querySelector('.menu-icon'); // Lấy phần tử có class là 'menu-icon'
    var isClickInsideMenu = navbar.contains(event.target); // Kiểm tra xem click có trong phần 'navbar' không
    var isClickInsideMenuIcon = menuIcon.contains(event.target); // Kiểm tra xem click có trong phần 'menu-icon' không
    // Nếu click không trong 'navbar' và 'menu-icon' và 'navbar' đang có class 'active'
    if (!isClickInsideMenu && !isClickInsideMenuIcon && navbar.classList.contains('active')) {
        toggleMenu(); // Gọi hàm toggleMenu để đóng menu
    }
}); 
