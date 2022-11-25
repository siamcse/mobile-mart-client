import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    const [seller, setSeller] = useState({});

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller);
                    setSeller(data.seller);
                    setIsSellerLoading(false);
                })
        }
    }, [email]);
    console.log(seller);
    return [isSeller, isSellerLoading];
}

export default useSeller;