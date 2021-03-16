const url = 'https://screeching-gem-erigeron.glitch.me/';
// const proxyUrl = 'https://shielded-sea-45679.herokuapp.com/';

export function getCards() {
    return fetch(url + '/api/card')
    .then(res => res.json())
}

export function destroyCard(id) {
    return fetch(`${url}/api/card/${id}`, {method: 'DELETE'})
}

export function saveCard(card) {
    return fetch(url + '/api/card', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(card)
    }).then(res => res.json())
}