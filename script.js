function openModal(newsId) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  let content = "";

  if (newsId === "bineqedi") {
    content = `
      <h2>📍 Binəqədi xəbəri</h2>
      <img src="images/bineqedi.jpg" alt="Binəqədi" style="width:100%; border-radius:8px; margin-bottom:20px;">
      <p>Hüseynin XeberHub vebsaytı Binəqədidə sevinc dalğası yaratdı. Yerli sakinlər saytın dizaynını yüksək qiymətləndirir.</p>
      <div class="comment-section">
        <h3>💬 Şərh yaz</h3>
        <form><textarea placeholder="Fikirlərini yaz..." rows="4"></textarea><br><button type="submit">Göndər</button></form>
      </div>
    `;
  }

  if (newsId === "ronaldo") {
    content = `
      <h2>⚽ Ronaldo seçmə mərhələdə parladı</h2>
      <img src="images/ronaldo.jpg" alt="Ronaldo" style="width:100%; border-radius:8px; margin-bottom:20px;">
      <p>DÇ-2026 seçmə mərhələsində Portuqaliya 3:1 qalib gəldi. Ronaldo 2 qol vuraraq liderliyini bir daha sübut etdi.</p>
      <div class="comment-section">
        <h3>💬 Şərh yaz</h3>
        <form><textarea placeholder="Fikirlərini yaz..." rows="4"></textarea><br><button type="submit">Göndər</button></form>
      </div>
    `;
  }

  body.innerHTML = content;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}