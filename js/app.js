fetch("api/news.json", {
  cache: "no-store"
})
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then(data => {
    document.getElementById("news").textContent = data.message;
  })
  .catch(error => {
    document.getElementById("news").textContent = `Load failed: ${error.message}`;
  });