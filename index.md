<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&amp;display=swap"
      rel="stylesheet"
    />
    <style type="text/css">
* {
  margin: 0;
}

body {
  user-select: none;
  font-family: "Roboto", sans-serif;
  
}
#bdy{
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
z-index: 9999999999999;
}
.bg-left {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  height: 100vh;
}

.bg-left img {
  height: 100%;
}

/* Sidebar */

aside.sidebar {
  position: fixed;
  background: #17183b;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 16px;
}

aside.sidebar .menu-icons {
  display: flex;
  flex-direction: column;
}

aside.sidebar .menu-icons a {
  margin: 16px 0;
}

aside.sidebar .menu-icons a img {
  transition: all 500ms;
}

aside.sidebar .menu-icons a:hover img {
  transform: scale(1.2);
}

.container {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
}

.container .logo {
  font-size: 40px;
  font-weight: 900;
  position: absolute;
  top: 30px;
  color: #17183b;
}

.container .hero-container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
}

.container .hero-container h1 {
  font-size: 60px;
  color: #17183b;
  margin-bottom: 8px;
}

.container .hero-container p.subheading {
  font-size: 16px;
  color: #17183b;
}

/* Buttons */

.container a.btn {
  text-decoration: none;
  padding: 12px 24px;
  display: inline-block;
  margin-top: 32px;
  margin-right: 20px;
  border-radius: 8px;
  font-weight: 900;
  transition: all 500ms;
}

.container a.btn:hover {
  transform: translateY(-3px);
}

.container a.btn.light {
  background: #eae8ff;
  color: #17183b;
}

.container a.btn.dark {
  background: #17183b;
  color: #eae8ff;
}

.container .social {
  position: absolute;
  bottom: 50px;
  border-bottom: 4px solid #17183b;
  padding-bottom: 20px;
}

.container .social a {
  text-decoration: none;
  margin: 0 16px;
  display: inline-block;
  transition: all 500ms;
}

.container .social a:hover {
  transform: scale(1.1);
}

.container .hero-image {
  transform: rotateZ(-3deg);
}

.container .hero-image .image-bg {
  height: 424px;
  width: 350px;
  background: #ff8f7c;
  position: absolute;
  top: 0;
  z-index: -1;
  transform: rotateZ(-5deg);
}

.bg-right {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

.bg-right .circle1,
.bg-right .circle2,
.bg-right .circle3 {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
}

.bg-right .circle1 {
  top: 50px;
  right: 200px;
  background: greenyellow;
  filter: blur(100px);
  mix-blend-mode: multiply;
}

.bg-right .circle2 {
  top: 50px;
  right: 400px;
  background: #6affff;
  filter: blur(100px);
  mix-blend-mode: multiply;
}

.bg-right .circle3 {
  top: 200px;
  right: 250px;
  background: yellow;
  filter: blur(100px);
  mix-blend-mode: multiply;
}

.mobile-menu,
aside.sidebar .menu-icons .close-btn {
  display: none;
}

@media (max-width: 700px) {
  .bg-left,
  .container .logo {
    display: none;
  }

  .mobile-menu {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      180deg,
      rgb(14, 12, 46) 0%,
      rgb(25, 25, 90) 45%,
      rgba(0, 0, 0, 0)
    );
    padding: 16px;
    z-index: 100;
  }

  .mobile-menu .logo {
    font-size: 30px;
    color: #fff;
    font-weight: 900;
  }

  .container {
    width: 100%;
    padding: 0 30px;
  }

  .container .hero-container {
    flex-direction: column;
    text-align: center;
  }

  .container .right {
    order: -1;
    width: 100%;
    flex: 1;
  }

  .container .left {
    flex: 1;
  }

  .container .hero-image {
    width: 100%;
    height: 40vh;
    transform: rotateZ(0deg);
    position: absolute;
    left: 0;
    top: 0;
  }

  .container .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  .container .hero-image .image-bg {
    transform: rotateZ(0deg) translateX(-50%);
    width: 90%;
    height: calc(40vh + 10px);
    left: 50%;
  }

  .container .hero-container h1 {
    font-size: 32px;
    margin-top: 30px;
  }

  .container .social {
    position: static;
    margin-top: 70px;
  }

  aside.sidebar {
    /* display: none; */
    width: 60px;
    justify-content: center;
    box-shadow: -24px 0 16px -12px rgba(0, 0, 0, 0.4);
    z-index: 200;
    right: -100%;
    transition: all 500ms;
  }

  aside.sidebar.active {
    right: 0;
  }

  aside.sidebar .menu-icons .close-btn {
    display: block;
    position: absolute;
    top: 24px;
    text-align: center;
    left: 0;
    right: 0;
  }
}
    </style>
  </head>
  <body id="bdy">
    <div class="bg-left">
      <img src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/bg-left.svg" alt="" />
    </div>

    <div class="container">
      <div class="logo">W.</div>

      <div class="hero-container">
        <div class="left">
          <div class="hero-text">
            <h1>Web Design Course</h1>
            <p class="subheading">
              Learn the basics of HTML, CSS, & JavaScript
            </p>

            <a class="btn light" href="#">Watch Demo</a>
            <a class="btn dark" href="#">Enroll Now</a>
          </div>

          <div class="social">
            <a href="#">
              <img src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/facebook-logo.svg" alt="" />
            </a>

            <a href="#">
              <img src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/twitter-logo.svg" alt="" />
            </a>

            <a href="#">
              <img src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/youtube-logo.svg" alt="" />
            </a>
          </div>
        </div>

        <div class="right">
          <div class="hero-image">
            <img src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/hero-image.png" alt="" />
            <div class="image-bg"></div>
          </div>
        </div>
      </div>

      <div class="bg-right">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
      </div>
    </div>

    <aside class="sidebar">
      <div class="menu-icons">
        <div class="close-btn">
          <img src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/close-icon.svg" alt="" />
        </div>

        <a href="#">
          <img src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/home-icon.svg" alt="" />
        </a>

        <a href="#">
          <img src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/gift-icon.svg" alt="" />
        </a>

        <a href="#">
          <img src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/contact-icon.svg" alt="" />
        </a>

        <a href="#">
          <img src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/code-icon.svg" alt="" />
        </a>
      </div>
    </aside>

    <div class="mobile-menu">
      <div class="logo">W.</div>

      <img class="menu-btn" src="https://raw.githubusercontent.com/livebloggerofficial/Responsive-Homepage/929014a405ced75b734b08ea876fc2662551bef4/images/menu-icon.svg" alt="" />
    </div>

    <script>
const sidebar = document.querySelector("aside.sidebar");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
    </script>
  </body>
</html>
