import SkeletonImage from 'antd/es/skeleton/Image';
import React from 'react';
import { Img } from 'react-image';

const MyImageComponent = ({src,className}) => {
    // Placeholder component displayed while the image is loading
    const MyLoader = () => <SkeletonImage active className={className + "h-72"}/>

    // Component displayed if the image fails to load
    const MyErrorComponent = () => <div>Error loading image.</div>;

    return (
        
            <Img
                src={src}
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
                className={className}
                loading= "lazy" 
            />
        
    );
};

export default MyImageComponent;