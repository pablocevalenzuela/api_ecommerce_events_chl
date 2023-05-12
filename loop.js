fetch('./calendario_ecommerce.json')
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('HTTP error ' + response.status);
        }
    })
    .then(function (data) {
        createList(data);
    })
    .catch(function (error) {
        console.log(error);
    });

function createList(data) {
    const mainUL = document.createElement('ol');
    for (let i = 0; i < data.events.length; i++) {
        const monthLI = document.createElement('li');
        const dateLI = document.createElement('li');
        const eventLI = document.createElement('li');
        monthLI.innerHTML = data.events[i].mes + ':';
        dateLI.innerHTML = data.events[i].date;
        eventLI.innerHTML = data.events[i].event;

        const eventsUL = document.createElement('ul');
        monthLI.appendChild(eventsUL);
        mainUL.appendChild(monthLI);
        monthLI.appendChild(dateLI);
        monthLI.appendChild(eventLI);
    }
    document.body.appendChild(mainUL);
}