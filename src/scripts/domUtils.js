export function createP(className, text) {
  const p = document.createElement('p')
  p.classList.add(className)
  p.textContent = text
  return p
}

export function createDiv(className) {
  const div = document.createElement('div')
  if (className) div.classList.add(className)
  return div
}

export function createForm(className) {
  const form = document.createElement('form')
  form.classList.add(className)
  return form
}

export function createH1(text) {
  const h1 = document.createElement('h1')
  h1.textContent = text
  return h1
}

export function createH2(text) {
  const h2 = document.createElement('h2')
  h2.textContent = text
  return h2
}

export function createH3(text) {
  const h3 = document.createElement('h3')
  h3.textContent = text
  return h3
}

export function createSelect(name, id, options) {
  const select = document.createElement('select')
  select.name = name
  select.id = id

  for (let key in options) {
    let option = document.createElement('option')
    option.value = key
    option.textContent = options[key]
    select.appendChild(option)
  }

  return select
}

export function createDateInput(name, id) {
  const input = document.createElement('input')
  input.type = 'date'
  input.name = name
  input.id = id
  return input
}

export function createTimeInput(name, id) {
  const input = document.createElement('input')
  input.type = 'time'
  input.name = name
  input.id = id
  return input
}

export function createBtn(type, className, text) {
  const btn = document.createElement('button')
  btn.type = type
  btn.classList.add(className)
  btn.textContent = text
  return btn
}

export function createLi(className) {
  const li = document.createElement('li')
  li.classList.add(className)
  return li
}

export function createSpan(className, text) {
  const span = document.createElement('span')
  span.classList.add(className)
  span.textContent = text
  return span
}

export function createRadioBtn(className, id, name, value) {
  const radioBtn = document.createElement('input')
  radioBtn.type = 'radio'
  radioBtn.classList.add(className)
  radioBtn.id = id
  radioBtn.name = name
  radioBtn.value = value
  return radioBtn
}

export function createCheckBox(className, id, name, value) {
  const radioBtn = document.createElement('input')
  radioBtn.type = 'checkbox'
  radioBtn.classList.add(className)
  radioBtn.id = id
  radioBtn.name = name
  radioBtn.value = value
  return radioBtn
}

export function createTextInput(className, id, name, placeholder) {
  const input = document.createElement('input')
  input.type = 'text'
  input.classList.add(className)
  input.id = id
  input.name = name
  input.placeholder = placeholder
  return input
}

export function deleteChildren(domElement) {
  while (domElement.firstChild) {
    domElement.firstChild.remove()
  }
}