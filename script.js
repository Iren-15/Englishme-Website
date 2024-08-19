const images = [
  "photos/photo-gallery-2.jpg",
  "photos/photo-gallery-5.jpg",
  "photos/photo-gallery-6.jpg",
  "photos/photo-gallery-7.jpg",
  "photos/photo-gallery-10.jpg",
  "photos/photo-gallery-12.jpg",
  "photos/photo-gallery-15.jpg",
  "photos/photo-gallery-16.jpg",
  "photos/photo-gallery-17.jpg",
  "photos/photo-gallery-19.jpg",
  "photos/photo-gallery-20.jpg",
  "photos/photo-gallery-21.jpg",
  "photos/photo-gallery-22.jpg",
  "photos/photo-gallery-23.jpg",
  "photos/photo-gallery-24.jpg",
  "photos/photo-gallery-26.jpg",
  "photos/photo-gallery-27.jpg",
  "photos/photo-gallery-28.jpg",
  "photos/photo-gallery-30.jpg",
  "photos/photo-gallery-31.jpg",
  "photos/photo-gallery-32.jpg",
  "photos/photo-gallery-33.jpg",
  "photos/photo-gallery-34.jpg",
  "photos/photo-gallery-35.jpg",
  "photos/photo-gallery-36.jpg",
  "photos/photo-gallery-37.jpg",
  "photos/certificate.jpg",
  "photos/photo-gallery-43.jpg",
  "photos/photo-gallery-38.jpg",
  "photos/photo-gallery-39.jpg",
  "photos/photo-gallery-40.jpg",
  "photos/photo-gallery-41.jpg",
  "photos/photo-gallery-42.jpg",
  "photos/photo-gallery-44.jpg",
  "photos/photo-gallery-45.jpg",
  "photos/photo-gallery-46.jpg",
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
