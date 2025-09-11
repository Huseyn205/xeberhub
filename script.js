// Modal açmaq funksiyası
function openModal(newsId) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  let content = "";

  // Binəqədi xəbəri
  if (newsId === "bineqedi") {
    content = `
      <h2>📍 Binəqədi xəbəri</h2>
      <img src="images/bineqedi.jpg" alt="Binəqədi" class="modal-image">
      <p>Hüseynin XeberHub vebsaytı Binəqədidə sevinc dalğası yaratdı. Yerli sakinlər saytın dizaynını yüksək qiymətləndirir.</p>
      <div class="comment-section">
        <h3>💬 Şərh yaz</h3>
        <form onsubmit="submitComment(event)">
          <textarea placeholder="Fikirlərini yaz..." rows="4"></textarea><br>
          <button type="submit">Göndər</button>
        </form>
      </div>
    `;
  }

  // Ronaldo xəbəri
  if (newsId === "ronaldo") {
    content = `
      <h2>⚽ Ronaldo seçmə mərhələdə parladı</h2>
      <img src="images/ronaldo.jpg" alt="Ronaldo" class="modal-image">
      <p>DÇ-2026 seçmə mərhələsində Portuqaliya 3:1 qalib gəldi. Ronaldo 2 qol vuraraq liderliyini bir daha sübut etdi.</p>
      <div class="comment-section">
        <h3>💬 Şərh yaz</h3>
        <form onsubmit="submitComment(event)">
          <textarea placeholder="Fikirlərini yaz..." rows="4"></textarea><br>
          <button type="submit">Göndər</button>
        </form>
      </div>
    `;
  }

  // Modalı göstər
  body.innerHTML = content;
  modal.style.display = "block";
}

// Modalı bağlama funksiyası
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Şərh göndərmə funksiyası (sadə versiya)
function submitComment(event) {
  event.preventDefault();
  const textarea = event.target.querySelector("textarea");
  const comment = textarea.value.trim();

  if (comment) {
    alert("Şərhin göndərildi: " + comment);
    textarea.value = "";
  } else {
    alert("Zəhmət olmasa şərh yaz.");
  }
}