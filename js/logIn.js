document.addEventListener("DOMContentLoaded", function () {
  const eyeButton = document.getElementById("eye");
  const passwordInput = eyeButton.previousElementSibling;

  eyeButton.addEventListener("click", function () {
    this.classList.toggle("open");
    this.children[0].classList.toggle("fa-eye-slash");
    this.children[0].classList.toggle("fa-eye");

    if (this.classList.contains("open")) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginForm = document.getElementById("form-login");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form submit

    let errorMessage = "";

    // Kiểm tra xem người dùng đã nhập tên đăng nhập và mật khẩu hay chưa
    if (usernameInput.value.trim() === "") {
      errorMessage += "Vui lòng nhập tên đăng nhập.\n";
    }

    if (passwordInput.value.trim() === "") {
      errorMessage += "Vui lòng nhập mật khẩu.\n";
    }

    // Nếu có lỗi, hiển thị thông báo
    if (errorMessage !== "") {
      alert(errorMessage.trim());
      return;
    }

    // Thực hiện đăng nhập (ví dụ: gửi dữ liệu lên server)
    // Sau khi đăng nhập thành công, chuyển hướng đến trang index.html
    window.location.href = "main.html";
  });
});
