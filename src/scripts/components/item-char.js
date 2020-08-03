const itemChar = (result) => {
    let bodyChar = document.getElementById("body-char");
    bodyChar.style.display = "block";
    bodyChar.innerHTML = `
    <section>
        <div id="content">
            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 ml-5 ">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <canvas class="chart-area" id="chart-bar"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 ml-5 ">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <canvas class="chart-area" id="chart-pie"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

    let labelCity = []
    let labelValue = []
    let colorBar = []

    result.data.bar.forEach(element => {
        labelCity.push(element.kota);
        labelValue.push(element.value);
        colorBar.push('rgb(52, 152, 219)');
    });

    const bar = document.getElementById('chart-bar').getContext('2d');
    new Chart(bar, {
        type: 'bar',
        data: {
            labels: labelCity,
            datasets: [{
                label: 'persentase',
                data: labelValue,
                backgroundColor: colorBar,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    const pie = document.getElementById('chart-pie').getContext('2d');
    new Chart(pie, {
    type: 'pie',
    data: {
        labels: ['Tinggi', 'Sedang', 'Rendah'],
        datasets: [{
            data: [result.data.pie.tinggi.percentage, 
                result.data.pie.sedang.percentage, 
                result.data.pie.rendah.percentage],
            backgroundColor: [
                'rgb(192, 57, 43)',
                'rgb(243, 156, 18)',
                'rgb(46, 204, 113)',
            ]
        }]
    }
});


}

export default itemChar