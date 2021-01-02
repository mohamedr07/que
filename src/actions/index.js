export const addProcess = (name, queues) => {
    return {
        type: 'ADD',
        payload: name,
        data: queues
    }
}

export const editProcess = (id, name, queues) => {
    return {
        type: 'MODIFY',
        id: id,
        payload: name,
        data: queues
    }
}

export const selectProcess = (id) => {
    return {
        type: 'SELECT',
        payload: id
    }
}

export const deleteProcess = (processNumber) => {
    return {
        type: 'DELETE',
        data: processNumber
    }
}

