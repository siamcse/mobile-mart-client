import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Mobile Mart`
    }, [title]);
};

export default useTitle;