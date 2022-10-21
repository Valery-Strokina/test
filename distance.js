function distance() {
  let unit = {
    sm: 100,
    m: 1,
    in: 39.37007874016,
    ft: 3.28083989501,
  };
  let value = document.getElementById(`value`);
  let currency1 = document.getElementById(`cur1`);
  let currency2 = document.getElementById(`cur2`);
  let result = document.getElementsByClassName(`convert_result`)[0];

  function summ() {
    if (currency1.value === currency2.value) {
      result.innerHTML = value.value;
    } else {
      if (currency1.value != `m`) {
        result.innerHTML =
          Math.round((value.value / unit[currency1.value]) * 100) / 100;
      } else {
        result.innerHTML =
          Math.round(value.value * unit[currency2.value] * 100) / 100;
      }
    }
  }

  value.oninput = function () {
    summ();
  };
  currency1.onchange = function () {
    summ();
  };
  currency2.onchange = function () {
    summ();
  };
}

distance();
