function openModal(newsId) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  let content = `
    <h2>📍 Binəqədi xəbəri</h2>
    <img src="images/bineqedi.jpg" alt="Binəqədi" class="modal-image">
    <p>Hüseynin XeberHub vebsaytı Binəqədidə sevinc dalğası yaratdı. Yerli sakinlər saytın dizaynını yüksək qiymətləndirir.</p>

    <div class="comment-section">
      <h3>💬 Şərh yaz</h3>
      <form onsubmit="submitComment(event, '${newsId}')">
        <input type="text" placeholder="Adını yaz" required>
        <textarea placeholder="Fikirlərini yaz..." rows="4" required></textarea>
        <button type="submit">Göndər</button>
      </form>
      <div class="comment-list" id="comments-${newsId}"></div>
    </div>
  `;

  body.innerHTML = content;
  modal.style.display = "block";

  loadComments(newsId);
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Şərh göndərmə
function submitComment(event, newsId) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector("input").value.trim();
  const text = form.querySelector("textarea").value.trim();

  if (!name || !text) return;

  const comment = { name, text };
  const comments = JSON.parse(localStorage.getItem(`comments-${newsId}`)) || [];
  comments.push(comment);
  localStorage.setItem(`comments-${newsId}`, JSON.stringify(comments));

  form.reset();
  loadComments(newsId);
}

// Şərhləri yüklə və göstər
function loadComments(newsId) {
  const container = document.getElementById(`comments-${newsId}`);
  const comments = JSON.parse(localStorage.getItem(`comments-${newsId}`)) || [];

  container.innerHTML = comments.map(c => `
    <div class="comment-item">
      <strong>${c.name}</strong><br>
      ${c.text}
    </div>
  `).join('');
}function openModal(newsId) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  let content = `
    <h2>📍 Binəqədi xəbəri</h2>
    <img src="images/bineqedi.jpg" alt="Binəqədi" class="modal-image">
    <p>Hüseynin XeberHub vebsaytı Binəqədidə sevinc dalğası yaratdı. Yerli sakinlər saytın dizaynını yüksək qiymətləndirir.</p>

    <div class="comment-section">
      <h3>💬 Şərh yaz</h3>
      <form onsubmit="submitComment(event, '${newsId}')">
        <input type="text" placeholder="Adını yaz" required>
        <textarea placeholder="Fikirlərini yaz..." rows="4" required></textarea>
        <button type="submit">Göndər</button>
      </form>
      <div class="comment-list" id="comments-${newsId}"></div>
    </div>
  `;

  body.innerHTML = content;
  modal.style.display = "block";

  loadComments(newsId);
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Şərh göndərmə
function submitComment(event, newsId) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector("input").value.trim();
  const text = form.querySelector("textarea").value.trim();

  if (!name || !text) return;

  const comment = { name, text };
  const comments = JSON.parse(localStorage.getItem(`comments-${newsId}`)) || [];
  comments.push(comment);
  localStorage.setItem(`comments-${newsId}`, JSON.stringify(comments));

  form.reset();
  loadComments(newsId);
}

// Şərhləri yüklə və göstər
function loadComments(newsId) {
  const container = document.getElementById(`comments-${newsId}`);
  const comments = JSON.parse(localStorage.getItem(`comments-${newsId}`)) || [];

  container.innerHTML = comments.map(c => `
    <div class="comment-item">
      <strong>${c.name}</strong><br>
      ${c.text}
    </div>
  `).join('');
}