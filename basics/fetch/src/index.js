const txtApi = document.getElementById('apiBtn')
const emptyDiv = document.getElementById('resultado')


txtApi.addEventListener('click', cargarAPI)


function cargarAPI() {
  fetch('https://picsum.photos/list')
    .then(res => res.json())
    .then(jsonData => {

      let apiData = ''
      jsonData.forEach(item => {
      apiData += `
          <li>
            <a href="${item.post_url}" target="_blank">Ver imagen</a>
            ${item.author}
          </li>
        `
      })

      emptyDiv.innerHTML = apiData
    })
    .catch(err => console.log(err))
}
