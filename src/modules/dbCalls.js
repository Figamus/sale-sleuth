export default Object.create(null, {
    get: {
        value: (resource, id) => { 
            return fetch(`http://localhost:5002/${resource}/${id}`)
            .then(r => r.json())
        }
    },
    getAll: {
        value: (resource) => {
            return fetch(`http://localhost:5002/${resource}`)
            .then(r => r.json())
        }
    },
    delete: {
        value: (resource, id) => {
            return fetch(`http://localhost:5002/${resource}/${id}`, {
                method: "DELETE"
            })
            .then(r => r.json())
        }
    },
    post: {
        value: (resource, newObject) => {
            return fetch(`http://localhost:5002/${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObject)
            }).then(e => e.json())
        }
    },
    put: {
        value: (resource, newObject, id) => {
            return fetch(`http://localhost:5002/${resource}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObject)
            }).then(e => e.json())
        }
    },
    patch: {
        value: (resource, newObject, id) => {
            return fetch(`http://localhost:5002/${resource}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObject)
            }).then(e => e.json())
        }
    },
    getProduct: {
        value: (id) => { 
            return fetch(`http://localhost:5003/products/${id}`)
            .then(r => r.json())
        }
    },
    getAllProducts: {
        value: () => { 
            return fetch(`http://localhost:5003/products/`)
            .then(r => r.json())
        }
    },
})