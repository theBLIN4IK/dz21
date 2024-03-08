

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


  //jjj
  function fetchData() {
    fetch('/api/data') 
        .then(response => response.json())
        .then(data => {
          const h1 = document.getElementById('h1').innerText = data.text2
          const image = document.getElementById('image').src = data.text2
        })
        .catch(error => console.error('Error fetching data: ', error))
}

function updateData() {
    
    const updatedData = prompt('Enter the new URL for the image:')
    
    if (updatedData !== null) {  
        fetch('/api/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              text1: 'изза бага может храниться только 1 параметр',
              text2: updatedData })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            fetchData()
        })
        .catch(error => console.error('Error updating data: ', error))
    }
}