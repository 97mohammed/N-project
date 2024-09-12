function showData() {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += `
      <tr>
        <td>${i + 1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].count}</td>
        <td>${dataPro[i].category}</td>
        <td><button class="update">update</button></td>
        <td><button onclick="deleteData(${i})" class="delete">delete</button></td>
      </tr>`;
    }
    document.getElementById('tbody').innerHTML = table;
    if (dataPro.length > 0)
        ;
}
