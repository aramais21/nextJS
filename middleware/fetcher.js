export const fetcher = async (url, body) => {
    try {
        console.log(url)
        await fetch(url, {method: 'POST'});
    }
    catch(err) {
        console.log('error with fetcher')
    }
}
