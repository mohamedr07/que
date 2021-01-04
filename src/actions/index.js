
// ............... PROCESSES .................

export const addProcess = (name, queues) => {
    return {
        type: 'ADD_PROCESS',
        payload: name,
        data: queues
    }
}

export const editProcess = (id, name, queues) => {
    return {
        type: 'MODIFY_PROCESS',
        id: id,
        payload: name,
        data: queues
    }
}

export const deleteProcess = (processNumber) => {
    return {
        type: 'DELETE_PROCESS',
        data: processNumber
    }
}

// ................. QUEUES .....................

export const addQueue = (q) => {
    return {
        type: 'ADD_QUEUE',
        payload: q
    }
}

export const deleteQueue = (index) => {
    return {
        type: 'DELETE_QUEUE',
        payload: index
    }
}

