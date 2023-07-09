const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
  console.log("entrei aqui no add")
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  
  if (dayExists) {
    alert("Dia já incluso!")
    return
  }
  
  nlwSetup.addDay(today)
}

function save() {
  console.log("entrei aqui no save")
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
console.log(data)
nlwSetup.setData(data)
nlwSetup.load()