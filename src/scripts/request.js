const headers = { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const request = async (url, requestBody) => {
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
    };
    const response = await fetch(url, requestOptions);
    if (response.ok) {
        return response.status === 200 && await response.json();
    } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
}

export default request;