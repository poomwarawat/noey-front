async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = {
    username: username,
    password: password,
  };
  /**
   * Send request pattern
   */

  const res = await axios.post("http://localhost:3000/auth/login", user);
  const data = await res.data;
  if (data.status) {
    const userID = data.userID;
    localStorage.setItem("userID", userID);
    localStorage.setItem("logined", true);
    window.location.href = "./home.html";
  } else {
    alert("Please try again");
  }
}
