fetch("https://www.loc.gov/search/?q=baseball&fo=json")
    .then(function (response) {

        return response.json()
    })
    .then(function (data) {

        for (let i = 0; i < data.results.length; i++) {


            let titleEl = document.createElement("p")
            titleEl.textContent = data.results[i].title;

            document.body.appendChild(titleEl);


            let urlEl = document.createElement("a");
            urlEl.textContent = data.results[i].url;
            urlEl.href = data.results[i].url;

            document.body.appendChild(titleEl);
            document.body.appendChild(urlEl);

        }

    })

