var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "6 JUN",
      "7 JUN",
      "8 JUN",
      "9 JUN",
      "10 JUN",
      "11 JUN",
      "12 JUN",
      "13 JUN",
    ],
    datasets: [
      {
        data: [6600, 6399, 5788, 5100, 6400, 6100, 6250, 5790, 5500, 5520],
        label: "REVENUE",
        borderColor: "#28a745",
        lineTension: 0,
        fill: false,
      },
      {
        data: [6330, 6044, 5233, 5100, 6230, 6420, 5999, 5230, 4900, 5300],
        label: "COST",
        borderColor: "#dc3545",
        lineTension: 0,
        fill: false,
      },
      {
        data: [2330, 944, 530, 1230, 830, 1420, 2999, 1930, 1900, 1300],
        label: "INCOME",
        borderColor: "#17a2b8",
        lineTension: 0,
        fill: false,
      },
    ],
  },
});
