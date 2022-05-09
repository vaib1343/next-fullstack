export default async function http(url: string, method: string, data?: any) {
    const baseUrl = 'http://localhost:3000/api';
    const response = await fetch(baseUrl + url, {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return await response.json();
}
