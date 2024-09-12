function showData() {
  let table = '';
  for (let i = 0; i < dataPro.length; i++) {
    table += <tr>
      <th>1</th>
      <th>samsung</th>
      <th>2000</th>
      <th>100</th>
      <th>100</th>
      <th>100</th>
      <th>2100</th>
      <th>phone</th>
      <td><button id="update">update</button></td>
      <td><button id="delete">delete</button></td>

    </tr>;





  }
  document.getElementById('tbody').innerHTML = table;

}
