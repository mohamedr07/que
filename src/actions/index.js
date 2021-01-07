
// ............... PROCESSES .................

export const addProcess = (id, name, queues) => {
    return {
        type: 'ADD_PROCESS',
        payload: {
            id: id + 1,
            name: name,
            queues: queues
        }

    }
}

export const editProcess = (index, name, queues) => {
    return {
        type: 'MODIFY_PROCESS',
        payload: {
            index: index,
            name: name,
            queues: queues
        }
    }
}

export const deleteProcess = (processNumber) => {
    return {
        type: 'DELETE_PROCESS',
        payload: processNumber
    }
}

// ................. QUEUES .....................

export const addQueue = (id, name, estimatedTime) => {
    return {
        type: 'ADD_QUEUE',
        payload: {
            id: id + 1,
            name: name,
            estimatedTime: estimatedTime
        }
    }
}

export const editQueue = (index, name, estimatedTime) => {
    return {
        type: 'MODIFY_QUEUE',
        payload: {
            index: index,
            name: name,
            estimatedTime: estimatedTime
        }
    }
}

export const deleteQueue = (index) => {
    return {
        type: 'DELETE_QUEUE',
        payload: index
    }
}


// ................. STATIONS .....................

export const addStation = (id, location, queue, provider) => {
    return {
        type: 'ADD_STATION',
        payload: {
            id: id + 1,
            location: location,
            queue: queue,
            provider: provider
        }
    }
}

export const editStation = (index, location, queue, provider) => {
    return {
        type: 'MODIFY_STATION',
        payload: {
            index: index,
            location: location,
            queue: queue,
            provider: provider
        }
    }
}

export const deleteStation = (index) => {
    return {
        type: 'DELETE_STATION',
        payload: index
    }
}

// ................. PROVIDERS .....................

export const addProvider = (id, name, station, queue) => {
    return {
        type: 'ADD_PROVIDER',
        payload: {
            id: id + 1,
            name: name,
            station: station,
            queue: queue,
        }
    }
}

export const editProvider = (index, name, station, queue) => {
    return {
        type: 'MODIFY_PROVIDER',
        payload: {
            index: index,
            name: name,
            station: station,
            queue: queue,
        }
    }
}

export const deleteProvider = (index) => {
    return {
        type: 'DELETE_PROVIDER',
        payload: index
    }
}
