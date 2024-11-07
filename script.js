const images = [
  "photo-gallery-2.jpg",
  "photo-gallery-5.jpg",
  "photo-gallery-6.jpg",
  "photo-gallery-7.jpg",
  "photo-gallery-10.jpg",
  "photo-gallery-12.jpg",
  "photo-gallery-15.jpg",
  "photo-gallery-16.jpg",
  "photo-gallery-17.jpg",
  "photo-gallery-19.jpg",
  "photo-gallery-20.jpg",
  "photo-gallery-21.jpg",
  "photo-gallery-22.jpg",
  "photo-gallery-23.jpg",
  "photo-gallery-24.jpg",
  "photo-gallery-26.jpg",
  "photo-gallery-27.jpg",
  "photo-gallery-28.jpg",
  "photo-gallery-30.jpg",
  "photo-gallery-31.jpg",
  "photo-gallery-32.jpg",
  "photo-gallery-33.jpg",
  "photo-gallery-34.jpg",
  "photo-gallery-35.jpg",
  "photo-gallery-36.jpg",
  "photo-gallery-2024-11-07-1.jpg",
  "photo-gallery-2024-11-07-2.jpg",
  "certificate.jpg",
  "photo-gallery-43.jpg",
  "photo-gallery-38.jpg",
  "photo-gallery-39.jpg",
  "photo-gallery-40.jpg",
  "photo-gallery-41.jpg",
  "photo-gallery-42.jpg",
  "photo-gallery-44.jpg",
  "photo-gallery-45.jpg",
  "photo-gallery-46.jpg",
];
const image = document.querySelector(".image");
const btnNext = document.querySelector(".btnNext");
const btnBack = document.querySelector(".btnBack");

let i = 0;
btnNext.addEventListener("click", function () {
  i++;
  if (i > images.length - 1) {
    i = 0;
  }
  images.forEach(function (item) {
    image.src = images[i];
  });
});

btnBack.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  images.forEach(function (item) {
    image.src = images[i];
  });
});

const comments = [
  "comments/comment-1.jpg",
  "comments/comment-2.jpg",
  "comments/comment-3.jpg",
  "comments/comment-4.jpg",
  "comments/comment-5.jpg",
  "comments/comment-6.jpg",
  "comments/comment-7.jpg",
  "comments/comment-8.jpg",
  "comments/comment-9.jpg",
  "comments/comment-10.jpg",
  "comments/comment-11.jpg",
  "comments/comment-12.jpg",
  "comments/comment-13.jpg",
  "comments/comment-14.jpg",
  "comments/comment-15.jpg",
  "comments/comment-16.jpg",
  "comments/comment-18.jpg",
  "comments/comment-19.jpg",
];

const commentCurrent = document.querySelector(".img-comment-second");
const commentPrev = document.querySelector(".img-comment-first");
const commentNext = document.querySelector(".img-comment-third");
const btnNextComment = document.querySelector(".btnNext-comments");
const btnBackComment = document.querySelector(".btnBack-comments");

i = 1;
btnNextComment.addEventListener("click", function () {
  i++;
  if (i > comments.length - 1) {
    i = 0;
  }
  comments.forEach(function (item) {
    commentCurrent.src = comments[i];
    if (i != comments.length - 1) {
      commentNext.src = comments[i + 1];
    } else {
      commentNext.src = comments[0];
    }

    if (i != 0) {
      commentPrev.src = comments[i - 1];
    } else {
      commentPrev.src = comments[comments.length - 1];
    }
  });
});

btnBackComment.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = comments.length - 1;
  }
  comments.forEach(function (item) {
    commentCurrent.src = comments[i];
    if (i != 0) {
      commentPrev.src = comments[i - 1];
    } else {
      commentPrev.src = comments[comments.length - 1];
    }

    if (i != comments.length - 1) {
      commentNext.src = comments[i + 1];
    } else {
      commentNext.src = comments[0];
    }
  });
});

function FunctionMobileMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-connection")) {
    Swal.fire({
      width: 350,
      title: "Заповніть заявку",
      showCloseButton: true,
      showConfirmButton: false,
      html: `<form
        class="containerform"
        action="https://formspree.io/f/xrgnjaql"
        method="POST"
      >
        <p class=par-form>Залиште Ваші контактні дані та ми зв'яжемося із Вами у робочий час.</p>
        <input type="hidden" class="input-form" name="_language" value="ru"/>
          <input
            class="input-form"
            type="txt"
            name="name"
            placeholder="Ваше ім'я..."
            required=""
          />
          <input
            class="input-form"
            type="txt"
            name="phone"
            placeholder="Ваш номер телефону..."
            required=""
          />
          <textarea
            class="input-form"
            name="message"
            placeholder="Ваше повідомлення..."
            required=""
          ></textarea>
        </label>
        <button type="submit" class="btn-form">Надіслати</button>
      </form>`,
    });
  }
  if (window.innerWidth <= 700) {
    if (e.target.classList.contains("menu-item")) {
      FunctionMobileMenu();
    }
  }
});
