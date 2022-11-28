import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`https://mobile-mart-server-siamcse.vercel.app/jwt?email=${email}`)
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