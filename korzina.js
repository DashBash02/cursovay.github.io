const bloki = document.querySelectorAll(".block1")
const bloki2 = document.querySelectorAll(".block2")
const bloki3 = document.querySelectorAll(".block3")

bloki.forEach((el, idx) => {
  console.dir(el)
  const btn = el.childNodes[7]
  const name = el.childNodes[3].innerText
  const price = el.childNodes[5].innerText

  btn.addEventListener("click", () => {
    const korzinaStorage = localStorage.getItem("korzina") || "[]"
    const korzina = JSON.parse(korzinaStorage)
    const block1 = {name, price}
    localStorage.setItem("korzina", JSON.stringify([...korzina , block1]))

  })
})

bloki2.forEach((el, idx) => {
  console.dir(el)
  const btn = el.childNodes[7]
  const name = el.childNodes[3].innerText
  const price = el.childNodes[5].innerText

  btn.addEventListener("click", () => {
    const korzinaStorage = localStorage.getItem("korzina") || "[]"
    const korzina = JSON.parse(korzinaStorage)
    const block2 = {name, price}
    localStorage.setItem("korzina", JSON.stringify([...korzina , block2]))

  })
})

bloki3.forEach((el, idx) => {
  console.dir(el)
  const btn = el.childNodes[7]
  const name = el.childNodes[3].innerText
  const price = el.childNodes[5].innerText

  btn.addEventListener("click", () => {
    const korzinaStorage = localStorage.getItem("korzina") || "[]"
    const korzina = JSON.parse(korzinaStorage)
    const block3 = {name, price}
    localStorage.setItem("korzina", JSON.stringify([...korzina , block3]))

  })
})
