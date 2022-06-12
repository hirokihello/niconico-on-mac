// console.log(window.customRenderMethod)
// window.customRenderMethod();
// window.close()

console.log("initialize window renderer loaded")
console.log(window.genBrowserPoco)
console.log(window.genBrowserNiconico)
console.log(window)

document.getElementById("submit_button").addEventListener("click", () => {
  url = document.getElementById("url").value;
  ui_type = document.getElementById("ui_type").value;
  console.log({url, ui_type})
  switch (ui_type) {
    case "nico": {
      window.genBrowserNiconico();
    }
    case "poco": {
      window.genBrowserPoco();
    }
  }
  console.log("submit!!!!")
})
