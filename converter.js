// ここからコードを書いてください
export function setupConverter() {
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.03048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];
  // ここからフォームの要素を取得していく
  const converterForm = document.querySelector(".converter-form");
  const inputValue = document.querySelector(".converter-input");
  const fromUnit = document.querySelector(".converter-from");
  const toUnit = document.querySelector(".converter-to");
  const result = document.querySelector(".converter-result");

  //単位選択を空にする
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";
  // 単位の配列から、単位選択リストの項目（<option>）を生成する
  for (const unit of lengthUnit) {
    fromUnit.innerHTML += `<option value="${unit.base}">${unit.name}</optin>`;
    toUnit.innerHTML += `<option value="${unit.base}">${unit.name}</optin>`;
  }

  // 最初のオプションを選択しておく
  if (fromUnit.options.length > 0) {
    fromUnit.selectedIndex = 0;
  }
  if (toUnit.options.length > 0) {
    toUnit.selectedIndex = 1;
  }

  // 変換を実行する関数を定義
  function convert() {
    const value = parseFloat(inputValue.value);

    if (isNaN(value)) {
      result.textContent = "Please enter a valid number";
      return;
    }

    const fromBase = fromUnit.value;
    const toBase = toUnit.value;
    const converted = (value * fromBase) / toBase;

    // 結果を3桁まで丸める
    result.textContent = `${value} ${
      lengthUnit[fromUnit.selectedIndex].name
    } = ${converted.toFixed(3)} ${lengthUnit[toUnit.selectedIndex].name}`;
  }
  // フォームの入力内容が変更されたら、convert関数を実行
  converterForm.addEventListener("input", convert);

  // 画面を開いたときに一度だけ、convert関数を実行
  convert();
}
