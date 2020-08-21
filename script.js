// fetch("https://covid19.mathdro.id/api")
//   .then((response) => response.json())
//   .then((cases) => {
//     let table = showGlobal(cases);
//     const global = document.querySelector(".global-statistic");
//     global.innerHTML = table;
//   });

// fetch("https://covid19.mathdro.id/api/countries/Indonesia")
//   .then((response) => response.json())
//   .then((cases) => {
//     let indo = showIndo(cases);
//     const indonesia = document.querySelector(".indo-statistic");
//     indonesia.innerHTML = indo;
//   });

// Async Await
function globalAPI() {
  return fetch("https://covid19.mathdro.id/api").then((response) =>
    response.json()
  );
}

function indoAPI() {
  return fetch(
    "https://covid19.mathdro.id/api/countries/Indonesia"
  ).then((response) => response.json());
}

function displayGlobal(data) {
  let table = showGlobal(data);
  const global = document.querySelector(".global-statistic");
  global.innerHTML = table;
}

function displayIndo(data) {
  let indo = showIndo(data);
  const indonesia = document.querySelector(".indo-statistic");
  indonesia.innerHTML = indo;
}

async function showCards() {
  try {
    const global = await globalAPI();
    displayGlobal(global);
    const indo = await indoAPI();
    displayIndo(indo);
  } catch (error) {
    return `<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>`;
  } finally {
    console.log("Selesai memproses promise");
  }
}

showCards();

function showIndo(cases) {
  return `
        <div class="col-12 mb-2">
          <h2>Indonesia Statistic</h2>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <div class="card bg-warning">
            <div class="card-body">
              <h5 class="card-title text-white">${cases.confirmed.value}</h5>
              <h6 class="card-text">
                TerKonfirmasi
              </h6>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <div class="card">
            <div class="card-body bg-success">
              <h5 class="card-title text-white">${cases.recovered.value}</h5>
              <h6 class="card-text">
                Sembuh
              </h6>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <div class="card bg-danger">
            <div class="card-body">
              <h5 class="card-title text-white">${cases.deaths.value}</h5>
              <h6 class="card-text">
                Meninggal
              </h6>
            </div>
          </div>
        </div>
  `;
}

function showGlobal(cases) {
  return `<div class="col-12 mb-2">
          <h2>Global Statistic</h2>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <div class="card bg-warning">
            <div class="card-body">
              <h5 class="card-title text-white">${cases.confirmed.value}</h5>
              <h6 class="card-text">
                TerKonfirmasi
              </h6>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <div class="card bg-success">
            <div class="card-body">
              <h5 class="card-title text-white">${cases.recovered.value}</h5>
              <h6 class="card-text">
                Sembuh
              </h6>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-3">
          <div class="card bg-danger">
            <div class="card-body">
              <h5 class="card-title text-white">${cases.deaths.value}</h5>
              <h6 class="card-text">
                Meninggal
              </h6>
            </div>
          </div>
        </div>`;
}
