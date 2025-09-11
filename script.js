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

// Səhifə yüklənəndə şərhləri göstər
document.addEventListener("DOMContentLoaded", () => {
  const commentBlock = document.querySelector(".comment-list");
  if (commentBlock) {
    const newsId = commentBlock.id.replace("comments-", "");
    loadComments(newsId);
  }
});