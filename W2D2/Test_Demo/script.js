function displayAlert(){
  alert("Loading weather report...")
}

function removeCookieSection(){
  var cookie = document.querySelector(".cookie");
  cookie.remove()
}

function switchTempMeasurements(element){
  
  
  var weathNum1 = document.querySelector(".weather-number-1")
  var weathNum2 = document.querySelector(".weather-number-2")
  var weathNum3 = document.querySelector(".weather-number-3")
  
  var weathNum4 = document.querySelector(".weather-number-4")
  
  var weathNum5 = document.querySelector(".weather-number-5")
  
  var weathNum6 = document.querySelector(".weather-number-6")
  
  var weathNum7 = document.querySelector(".weather-number-7")
  
  var weathNum8 = document.querySelector(".weather-number-8")
  
  if(element.value == "celcius"){
    weathNum1.innerText =("24")
  }
  else {
    weathNum1.innerText =("75")
  }
  
  if(element.value == "celcius"){
    weathNum2.innerText =("18")
  }
  else {
    weathNum2.innerText =("65")
  }
  
  if(element.value == "celcius"){
    weathNum3.innerText =("27")
  }
  else {
    weathNum3.innerText =("80")
  }
  
  if(element.value == "celcius"){
    weathNum4.innerText =("19")
  }
  else {
    weathNum4.innerText =("66")
  }
  
  if(element.value == "celcius"){
    weathNum5.innerText =("21")
  }
  else {
    weathNum5.innerText =("69")
  }
  
  if(element.value == "celcius"){
    weathNum6.innerText =("16")
  }
  else {
    weathNum6.innerText =("61")
  }
  
  if(element.value == "celcius"){
    weathNum7.innerText =("26")
  }
  else {
    weathNum7.innerText =("78")
  }
  
  if(element.value == "celcius"){
    weathNum8.innerText =("21")
  }
  else {
    weathNum8.innerText =("70")
  }

}