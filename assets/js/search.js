const input = document.getElementById("search-input");
const results = document.getElementById("search-results");

input.addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();
  results.innerHTML = "";

  if (query.length < 2) return;

  const matched = window.searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query),
  );

  if (matched.length === 0) {
    results.innerHTML = '<p class="no-result">কিছু পাওয়া যায়নি</p>';
    return;
  }

  matched.forEach((item) => {
    results.innerHTML += `
      <div class="result-item">
        <span class="category">${item.category}</span>
        <a href="${item.url}">${item.title}</a>
        <p>${item.content}</p>
      </div>
    `;
  });
});
