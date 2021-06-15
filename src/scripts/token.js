const headers = { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const getToken = async (url, email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ 
            email: email,
            password: password
        })
    };
    const response = await fetch(url, requestOptions);
    if (response.ok) {
        return await response.json();
    } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
}

export default getToken;