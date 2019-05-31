const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
const row = document.createElement('row');
row.setAttribute('class', 'row');
app.appendChild(row);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/nelth-fr/repos', true);
request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        // Table
        var table = document.createElement('table');
        table.setAttribute('class', 'table')
        app.appendChild(table);
        var thead = document.createElement('thead');
        table.appendChild(thead);
        var tr = document.createElement('tr');
        thead.appendChild(tr);
        var th1 = document.createElement('th');
        th1.setAttribute('div', 'col');
        th1.textContent = 'Name';
        tr.appendChild(th1);
        var th2 = document.createElement('th');
        th2.setAttribute('div', 'col');
        th2.textContent = 'Description';
        tr.appendChild(th2)
        var th3 = document.createElement('th');
        th3.setAttribute('div', 'col');
        th3.textContent = 'Language';
        tr.appendChild(th3)
        var tbody = document.createElement('tbody');
        table.appendChild(tbody);

        // Mapping through data
        data.forEach(project => {
            const tr  = document.createElement('tr');
            tr.setAttribute('scope', 'row');

            const name = document.createElement('td');
            name.innerHTML = '<a href='+ project.html_url + '>' + project.name + '</a>';

            const description = document.createElement('td');
            description.textContent = project.description;

            const language = document.createElement('td');
            language.textContent = project.language;

            tbody.appendChild(tr);
            tr.appendChild(name);
            tr.appendChild(description);
            tr.appendChild(language);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Error during GitHub fetching`;
        app.appendChild(errorMessage);
    }
};
request.send();