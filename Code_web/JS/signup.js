// Định nghĩa một hàm để mô phỏng việc chuyển đổi hiển thị mật khẩu
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.fa-eye');

    // Toggle trạng thái hiển thị mật khẩu
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
    }
}

// Lắng nghe sự kiện nhấp chuột vào biểu tượng mắt
const eyeIcon = document.querySelector('.fa-eye');
eyeIcon.addEventListener('click', togglePasswordVisibility);
