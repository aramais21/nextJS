export const fetchPromise = (time, data) => {
    return new Promise((res) => {
        const timeout = setTimeout(() => {
            res(data);
            clearTimeout(timeout);
        }, time)
    })
}