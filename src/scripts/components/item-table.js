const itemTable = (dataHigh, dataMedium, dataLow) =>{

    let bodyTable = document.getElementById("body-table");
    bodyTable.style.display = "block";
    
    let tableBody = `
      <div id="table-item" class = "col-sm-11 col-md-11 ml-5">
              <table class="table table-hover w-auto">
                <thead>
                  <tr>
                    <th>Kota</th>
                    <th>Kecamatan</th>
                    <th>Level</th>
                    <th>Kasus</th>
                    <th>Kematian</th>
                    <th>Sembuh</th>
                    <th>Result</th>
                    <th>Output</th>
                  </tr>
                </thead>
                <tbody>`;
    
    dataHigh.data.forEach(result => {
      if(result.data.length != 0){
        tableBody += `
        <tr>
          <td>${result.kota}</td>
          <td>`;
        
        result.data.forEach(subDistrict => {
          tableBody += `${subDistrict.kecamatan}<br>`;
        });

        tableBody += `</td>
          <td>Tinggi</td>
          <td>${result.kasus_aktif}</td>
          <td>${result.kematian}</td>
          <td>${result.sembuh}</td>
          <td>${result.result}</td>
          <td>${result.output}</td>
        </tr>`;
      }
    });

    dataMedium.data.forEach(result => {
      if(result.data.length != 0){
        tableBody += `
        <tr>
          <td>${result.kota}</td>
          <td>`;
        
        result.data.forEach(subDistrict => {
          tableBody += `${subDistrict.kecamatan}<br>`;
        });

        tableBody += `</td>
          <td>Sedang</td>
          <td>${result.kasus_aktif}</td>
          <td>${result.kematian}</td>
          <td>${result.sembuh}</td>
          <td>${result.result}</td>
          <td>${result.output}</td>
        </tr>`;
      }
    });

    dataLow.data.forEach(result => {
      if(result.data.length != 0){
        tableBody += `
        <tr>
          <td>${result.kota}</td>
          <td>`;
        
        result.data.forEach(subDistrict => {
          tableBody += `${subDistrict.kecamatan}<br>`;
        });

        tableBody += `</td>
          <td>Rendah</td>
          <td>${result.kasus_aktif}</td>
          <td>${result.kematian}</td>
          <td>${result.sembuh}</td>
          <td>${result.result}</td>
          <td>${result.output}</td>
        </tr>`;
      }
    });

    tableBody += `
          </tbody>
        </table>
    </div>`;

    bodyTable.innerHTML = tableBody;
}

export default itemTable