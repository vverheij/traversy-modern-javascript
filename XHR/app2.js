document.getElementById('button1').addEventListener('click', loadCustomer)
document.getElementById('button2').addEventListener('click', loadCustomers)

function loadCustomer(e) {
  {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'customer.json', true)
   
    xhr.onload = function(){
      if (this.status) {
        // console.log(this.responseText)
        const customer = JSON.parse( this.responseText)
        const output = `
        <ul>
          <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.company}</li>
          <li>${customer.phone}</li>
        </ul>
        `
        document.getElementById('customer').innerHTML = output
      }
    }
    xhr.send()
  }
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true)
  xhr.onload = function() {
    if (this.status === 200) { 
      const customers = JSON.parse(this.responseText)

      let output = '<ul>'
      customers.forEach(customer => {
        output += 
        ` <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.company}</li>
          <li>${customer.phone}</li>
        `
      });
      output += '</ul>'
      document.getElementById('customers').innerHTML = output
    }
  }
  xhr.send()
}