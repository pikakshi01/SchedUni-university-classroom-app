function postAnnouncement() {
  const input = document.getElementById("announcementInput");
  const postsContainer = document.getElementById("posts");

  if (input.value.trim() === "") {
    alert("Please write something to announce.");
    return;
  }

  const today = new Date();
  const dateString = today.toLocaleString('default', { month: 'short' }) + " " + today.getDate();

  const newPost = document.createElement("div");
  newPost.className = "post";
  newPost.innerHTML = `
    <p class="author">You<br><span class="date">${dateString}</span></p>
    <p class="message">${input.value}</p>
    <div class="comment-box">
      <div class="profile-icon">M</div>
      <input type="text" placeholder="Add class comment...">
    </div>
  `;

  postsContainer.prepend(newPost);
  input.value = "";
}

