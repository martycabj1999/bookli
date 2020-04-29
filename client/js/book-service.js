const BASE_URL = '/api/v1';

async function getAll() {
    const resp = await fetch(`${BASE_URL}/books`);
    return await resp.json();
}

async function search(query, status) {
    const searchParams = new URLSearchParams();
    query && searchParams.set('query', query);
    status && searchParams.set('status', status);

    const resp = await fetch(`${BASE_URL}/books?${searchParams}`);
    return await resp.json();
}

async function get(id) {
    const resp = await fetch(`${BASE_URL}/books/${id}`);
    return await resp.json();
}

async function startBook(id) {
    const resp = await fetch(`${BASE_URL}/books/${id}/start`, {
        method: 'PUT',
    });
    return resp;
}

async function makeBookAvailable(id) {
    const resp = await fetch(`${BASE_URL}/books/${id}/available`, {
        method: 'PUT',
    });
    return resp;
}

async function valueBook(id, value) {
    const resp = await fetch(`${BASE_URL}/books/${id}/value/${value}`, {
        method: 'PUT',
    });
    console.log('value', resp);
    return resp;
}

async function finishBook(id) {
    const resp = await fetch(`${BASE_URL}/books/${id}/finish`, {
        method: 'PUT',
    });
    console.log('finish', resp);
    return resp;
}

export default {
    getAll,
    get,
    search,
    startBook,
    finishBook,
    valueBook,
    makeBookAvailable,
};
