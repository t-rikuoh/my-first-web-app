export function setupTabs() {
  // ① 「Home」と書かれたリンク要素を取得する
  const homeLink = document.querySelector('[data-tab="home"]');

  // ② 「Unit Converter」と書かれた項目要素を取得する
  const converterTab = document.querySelector('[data-tab="converter"]');

  // ③ Homeの内容が表示されるセクション要素を取得する
  const homeSection = document.getElementById("home");

  // ④ Converterの内容が表示されるセクション要素を取得する
  const converterSection = document.getElementById("converter");

  // ここからイベントリスナーを追加していく
  homeLink.addEventListener("click", () => {
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });
  converterTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });
}
