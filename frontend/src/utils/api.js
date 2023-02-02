const subscribe = async (inputs) => {
    const opts = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: inputs.email
        })
    };

    try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/subscribe`, opts);
        const isJson = resp.headers.get('content-type')?.includes('application/json');
        const data = isJson && await resp.json();
        
        if(!resp.ok) {
            console.log(data);
            throw Error(`${(data && data.message) || resp.status}`)
        }
    }
    catch (e) {
        throw Error(`API subscribe failed: ${e}`);
    }
};

export { subscribe };