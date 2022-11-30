import { useEffect, useState } from "react";

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIssellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://second-set-server.vercel.app/users/sellers/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setIssellerLoading(false);
                });
        }
    }, [email]);
    return [isSeller, isSellerLoading];
};

export default useSeller;
