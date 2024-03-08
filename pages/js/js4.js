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

  function checkData() {
    if(confirm("Move to page json data?")) {
    location.href = "http://localhost:3000/api/data" 
    console.log("moved to page json data")
    } else{
        console.log("move diclined")
    }
  }


  // json

 
  function fetchData() {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        document.getElementById('data').innerText = data.text1
        document.getElementById('editableData').value = data.text1
      })
  }

  function updateData() {
    const updatedData = document.getElementById('editableData').value
    fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text1: updatedData, text2: 'изза бага может храниться только 1 параметр'   })
    
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.text1)
        fetchData()
      })
  }
  
