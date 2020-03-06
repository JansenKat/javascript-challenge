const dateInput = d3.select("input #datetime")
const cityInput = d3.select("input #city")
const stateInput = d3.select("input #state")
const countryInput = d3.select("input #country")
const shapeInput = d3.select("input #shape")

const button = d3.select("button")
const handler = function(){

    const tbody = d3.select("tbody")
  
    data.filter(dataRow => dataRow.datetime === dateInput.property('value'))\
        .filter(dataRow => dataRow.city === cityInput.property('value'))\
        .filter(dataRow => dataRow.state === stateInput.property('value'))\
        .filter(dataRow => dataRow.country === countryInput.property('value'))\
        .filter(dataRow => dataRow.shape === shapeInput.property('value'))
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
