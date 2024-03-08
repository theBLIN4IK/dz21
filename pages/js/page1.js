function redirect0() {
    if(confirm("Move to main?")) {
    location.href = "http://localhost:3000/main" 
    console.log("moved to main")
    } else{
        console.log("move diclined")
    }
  }

  function redirect1() {
    if(confirm("Move to page 1?")) {
    location.href = "http://localhost:3000/page1" 
    console.log("moved to page1")
    } else{
        console.log("move diclined")
    }
  }

  function redirect2() {
    if(confirm("Move to page 2?")) {
    location.href = "http://localhost:3000/page2" 
    console.log("moved to page1")
    } else{
        console.log("move diclined")
    }
  }



  function redirect4() {
    if(confirm("Move to page 4?")) {
    location.href = "http://localhost:3000/page4" 
    console.log("moved to page4")
    } else{
        console.log("move diclined")
    }
  }

  function redirect5() {
    if(confirm("Move to page 404?")) {
    location.href = "http://localhost:3000/404" 
    console.log("moved to page 404")
    } else{
        console.log("move diclined")
    }
  }