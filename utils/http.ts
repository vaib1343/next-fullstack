export default function http(url: string, method: string = 'GET', data: any) {
    return fetch(url, {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}
