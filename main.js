let companyInfo = document.querySelectorAll(".company-info");
let details = document.querySelectorAll(".details");

companyInfo.forEach((info) =>{
  
  info.addEventListener("click", (e)=>{
    hideActiveTabs();
    
    e.target.classList.add("btn-active");
    
    
    let currentInfo = document.querySelector(e.target.getAttribute("target"));
    currentInfo.classList.add("active")
  })
})

function hideActiveTabs() {
  details.forEach(detail => {
    detail.classList.remove("active");
  })
  
  companyInfo.forEach(info =>{
    info.classList.remove("btn-active");
  })
  
  
}