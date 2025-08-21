// 📁 Fetch data from movies.json and display cards
fetch("data/movies.json")
  .then((res) => res.json())
  .then((data) => {
    const trendingContainer = document.getElementById("trending");
    const recommendedContainer = document.getElementById("recommended");

    data.forEach((item) => {
      let card;

      if (item.isTrending) {
        // 🔥 Create Trending Card with overlay
        card = document.createElement("div");
        card.classList.add("trending-card");
        card.innerHTML = `
          <img src="${item.thumbnail}" alt="${item.title}" />
          <div class="trending-overlay">
            <h3>${item.title}</h3>
            <p>${item.year} • ${item.category} • ${item.rating}</p>
          </div>
        `;
        trendingContainer.appendChild(card);
      } else {
        // 🎯 Create Recommended Card
        card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${item.thumbnail}" alt="${item.title}" />
          <h3>${item.title}</h3>
          <p>${item.year} • ${item.category} • ${item.rating}</p>
        `;
        recommendedContainer.appendChild(card);
      }
    });
  });

// 🔍 Real-time Search Functionality
document.getElementById("search").addEventListener("input", function (e) {
  const term = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card, .trending-card");

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(term) ? "block" : "none";
  });
});
