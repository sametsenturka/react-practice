import { useEffect } from 'react'; // Doğru import

const BasicEffect = () => {
    useEffect(() => {
        console.log("First time rendering!");
    }, []);

    return <div>BasicEffect working!</div>;
};

export default BasicEffect;