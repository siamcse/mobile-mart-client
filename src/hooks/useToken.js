import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('');
    console.log(email);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.token) {
                        setToken(data.token);
                        localStorage.setItem('accessToken', data.token);
                    }
                })
        }
    }, [email])
    return [token];
}

export default useToken;