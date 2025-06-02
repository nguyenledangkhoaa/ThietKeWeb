const divs = document.querySelectorAll('div[data-link="truyen.html"]');
divs.forEach(div => {
   div.addEventListener("click", function (e) {
      e.preventDefault();
      const name = this.getAttribute("name");
      localStorage.setItem("message", name);
      window.location.href = this.getAttribute("data-link");
   });
});

const msg = localStorage.getItem("message");


const truyen = [
   {
      id: 1,
      img: "img/t1.jpg",
      vote: "8.6/10",
      tym: "76k",
      comment: "3",
      time: "7 ngày trước",
      ten: "Shachou to Sake to Hoshi",
      tenKhac: "社長と酒と星 Boss, Booze, and Bright Stars",
      tacGia: "Zurikishi / Zurikishi",
      theLoai: "Romance, Comedy, Office Workers, Web Comic, Slice of Life",
      TinhTrang: "2025 - Đang phát hành",
      Tuoi: "16+",
      NgonNgu: "Nhật Bản",
      nguon: "MangaDex, Anilist, AnimePlanet, Kitsu, MangaUpdates, Amazon, MyAnimeList, Raw",
      NoiDung: "Reina Izutsu (24) has just taken over as president of Izutsu Printing after the sudden passing of her father. Kenichi Ishizumi (37), a section chief at the company, worries about Reina, who's been coming down a bit too hard on the staff as she struggles to fill her father's shoes. One night, he runs into her at a park, drunk and frustrated, blurting out, I can't take this anymore! I quit being the president! Too tipsy to even recognize him as her subordinate, Reina lets her guard down, and under the stars, Ishizumi quietly vows to support her however he can.Truyện tranh Shachou to Sake to Hoshi được cập nhật nhanh và đầy đủ nhất tại Truyendex. Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ Truyendex ra các chương mới nhất của truyện Shachou to Sake to Hoshi. ",
      ngayupdate: "30/5/2025",
      dich: "Nguyen Le Dang Khoa",
      url: "doc.html?chap=1",
   },
   {
      id: 2,
      img: "img/t2.jpg",
      vote: "9.2/10",
      tym: "103k",
      comment: "3",
       ten: "Doraemon",
      time: "2 ngày trước",
      tenKhac: "Doraemon ドラえもん",
      tacGia: "Fujiko F. Fujio / Fujiko F. Fujio",
      theLoai: " Award Winning, Sci-Fi, Time Travel, Action, Animals, Comedy, Adventure, Drama, School Life, Fantasy, Delinquents, Slice of Life",
      TinhTrang: "1969 - Đã kết thúc",
      Tuoi: "An Toàn",
      NgonNgu: "Nhật Bản",
      nguon: "MangaDex, Anilist, AnimePlanet, Bookwalker, Kitsu, MangaUpdates, Amazon, CDJapan, EbookJapan, MyAnimeList, Eng Offcial",
      NoiDung: "Doraemon is the masterpiece of Fujiko F. Fujio, one of Japan's most famous mangaka duos. Doraemon, a cat-shaped robot from the future, and his best friend Nobita share a fantastical friendship. The mysterious tools taken out of his 4th dimensional pocket made the whole of Japan laugh. Shizu-chan, Suneo, and Gian are also full of energy. The exciting and wonderful tools that give you big dreams will guide you to the heartwarming world of Doraemon. ",
      ngayupdate: "10/5/2025",
      dich: "NLDK",
      url: "doc.html?chap=2",
   },
   {
      id: 3,
      img: "img/t3.jpg",
      vote: "10/10",
      tym: "233k",
      comment: "3",
      time: "1 ngày trước",
      ten: "Dragon Ball - New Hope (Doujinshi)",
      tenKhac: "Dragon Ball",
      tacGia: "Buri-chan / Buri-chan",
      theLoai: "Action, Superhero, Adventure, Doujinshi",
      TinhTrang: "Đang tiến hành",
      Tuoi: "An toàn",
      NgonNgu: "Nhật Bản",
      nguon: "MangaDex",
      NoiDung: "Truyện tranh Dragon Ball - New Hope (Doujinshi) được cập nhật nhanh và đầy đủ nhất tại Truyendex. Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ Truyendex ra các chương mới nhất của truyện Dragon Ball - New Hope (Doujinshi).",
      ngayupdate: "3/5/2025",
      dich: "Khoa nè",
      url: "doc.html?chap=3",
   }
];

var tenTruyen = document.getElementById("name-truyen");
var tenKhac = document.getElementById("tenkhac");
var tinhTrang = document.getElementById("tinhTrang");
var tuoiXem = document.getElementById("tuoixem");
var theLoai = document.getElementById("theLoai");
var ngonNgu = document.getElementById("ngonNgu");
var Nguon = document.getElementById("Nguon-truyen");
var nd = document.getElementById("nd-truyen");
var img = document.getElementById("img-truyen");
var vote = document.getElementById("vote");
var tym = document.getElementById("tym");
var comment = document.getElementById("cmt");
var tload = document.getElementById("time-upload");
var tbchuong = document.getElementById("tb-chuong");
var nutdoc = document.getElementById("nutdoc");

const truyenIndex = truyen.find(t => t.id === parseInt(msg));
tenTruyen.innerHTML = truyenIndex.ten;
tenKhac.innerHTML = truyenIndex.tenKhac;
tinhTrang.innerHTML = truyenIndex.TinhTrang;
tuoiXem.innerHTML = truyenIndex.Tuoi;
theLoai.innerHTML = truyenIndex.theLoai;
ngonNgu.innerHTML = truyenIndex.NgonNgu;
Nguon.innerHTML = truyenIndex.nguon;
nd.innerHTML = truyenIndex.NoiDung;
img.innerHTML = `
         <img src="${truyenIndex.img}" alt="truyen-1" class="rounded-1">
      `;
tym.innerHTML = truyenIndex.tym;
vote.innerHTML = truyenIndex.vote;
comment.innerHTML = truyenIndex.comment;
tload.innerHTML = truyenIndex.time;
tbchuong.innerHTML = `
       <table class="table w-100 m-0">
                           <tr class="p-2 border-bottom">
                              <td class="w-50">Tên chương</td>
                              <td>Cập nhật</td>
                              <td>Nhóm dịch</td>
                           </tr>
                           <tr>
                              <td>Chương 1</td>
                              <td>${truyenIndex.ngayupdate}</td>
                              <td>${truyenIndex.dich}</td>
                           </tr>
                        </table>
   `;
nutdoc.innerHTML = `<a href="${truyenIndex.url}" class="btn btn-primary w-25"><i class="bi bi-book-fill"></i> Đọc ngay</a>`;



function hideAll() {
   document.getElementById("bxh-top").classList.add("d-none");
   document.getElementById("bxh-yeuthich").classList.add("d-none");
   document.getElementById("bxh-moi").classList.add("d-none");
}
function clearStyle() {
   var bxhtop = document.getElementById("top-bxh");
   var love = document.getElementById("love");
   var moi = document.getElementById("moi");
   bxhtop.style.setProperty("background-color", "transparent", "important");
   love.style.backgroundColor = "";
   moi.style.backgroundColor = "";
}

function showTop() {
   hideAll();
   clearStyle();
   var bxhtop = document.getElementById("top-bxh");  // Lấy lại biến tại đây
   bxhtop.style.backgroundColor = "sandybrown";
   document.getElementById("bxh-top").classList.remove("d-none");
}

function showYeuthich() {
   hideAll();
   clearStyle();
   var love = document.getElementById("love");  // Lấy lại biến tại đây
   love.style.backgroundColor = "sandybrown";
   document.getElementById("bxh-yeuthich").classList.remove("d-none");
}

function showMoi() {
   hideAll();
   clearStyle();
   var moi = document.getElementById("moi");  // Lấy lại biến tại đây
   moi.style.backgroundColor = "sandybrown";
   document.getElementById("bxh-moi").classList.remove("d-none");
}


