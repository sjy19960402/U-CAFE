// ice, hot 선택
function checkOnlyOne(element) {
  
    const checkboxes 
        = document.getElementsByName("one");
    
    checkboxes.forEach((cb) => {
      cb.checked = false;
    })
    
    element.checked = true;
  }
// size 선택
  function checkOneSize(element) {
  
    const checkboxes 
        = document.getElementsByName("size");
    
    checkboxes.forEach((cb) => {
      cb.checked = false;
    })
    
    element.checked = true;
  }