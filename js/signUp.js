// Lấy các phần tử input
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password");

// Lấy phần tử button submit
const submitButton = document.querySelector(".form-submit");

// Thêm sự kiện click vào button submit
submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Ngăn chặn hành động mặc định của button

  // Kiểm tra các input
  if (usernameInput.value.trim() === "") {
    alert("Vui lòng nhập tên đăng nhập.");
    return;
  }

  if (emailInput.value.trim() === "") {
    alert("Vui lòng nhập email.");
    return;
  }

  if (passwordInput.value.trim() === "") {
    alert("Vui lòng nhập mật khẩu.");
    return;
  }

  if (confirmPasswordInput.value.trim() === "") {
    alert("Vui lòng nhập lại mật khẩu.");
    return;
  }

  // Nếu tất cả các input đều được nhập, thực hiện đăng ký
  alert("Đăng ký thành công!");
});
