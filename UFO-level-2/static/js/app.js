const dateInput = d3.select("input #datetime")
const cityInput = d3.select("input #city")
const stateInput = d3.select("input #state")
const countryInput = d3.select("input #country")
const shapeInput = d3.select("input #shape")

const button = d3.select("button")

const handler = function(){

    let dateCond = dateInput.property("value")
    let cityCond = cityInput.property("value")
    let stateCond = stateInput.property("value")
    let countryCond = countryInput.property("value")
    let shapeCond = shapeInput.property("value")

    const table = d3.select("table")
    
    d3.select("tbody").remove()
    const tbody = table.append('tbody')
  
    data.filter(dataRow => dataRow.datetime === dateCond { !dateInput.empty() })\
        .filter(dataRow => dataRow.city === cityCond { !cityInput.empty() })\
        .filter(dataRow => dataRow.state === stateCond { !stateInput.empty() })\
        .filter(dataRow => dataRow.country === countryCond { !countryInput.empty() })\
        .filter(dataRow => dataRow.shape === shapeCond { !shapeInput.empty() })
        .forEach(dataRow => {
            let row = tbody.append("tr")
            row.append("td").text(dataRow.datetime)
            row.append("td").text(dataRow.city)
            row.append("td").text(dataRow.state)
            row.append("td").text(dataRow.country)
            row.append("td").text(dataRow.shape)
            row.append("td").text(dataRow.durationMinutes)
            row.append("td").text(dataRow.comments)
        })
  }

  button.on("click", handler)
