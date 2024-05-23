const ctx = document.getElementById('myChart');
let myChart;
let jsonData;
amount = document.getElementById('totalAmount')

fetch('data.json')
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
    })
    .then(function(data) {
        jsonData = data;
        createChart(data, 'bar');
        total();
    });

function total() {
        let totalAmount = 0;
        jsonData.forEach(row => {
            totalAmount += row.amount;
        });
    document.getElementById('totalAmount').textContent = totalAmount;
}

function setChartType(chartType) {
    myChart.destroy();
    createChart(jsonData, chartType);
}

function createChart(data, type) {
    myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: data.map(row => row.day),
            datasets: [{
                label: '',
                data: data.map(row => row.amount),
                borderWidth: 1,
                backgroundColor: '#ec775f',
                hoverBackgroundColor: "hsl(186, 34%, 60%)",
                borderRadius: 5
            }]
        },
        options: {
            maintainAspectRatio: true,
            responsive: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    display: false // Disable the legend
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black background with opacity
                    titleFont: {
                        size: 16,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 14,
                        weight: 'normal'
                    },
                    padding: 10,
                    displayColors: false, 
                    callbacks: {
                        label: function(context) {
                            return `$${context.raw.toFixed(2)}`; // Format the tooltip text
                        }
                    },
                    borderColor: '#fff',
                    borderWidth: 2,
                    cornerRadius: 4,
                    xAlign: 'center',
                    yAlign: 'bottom'
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}


