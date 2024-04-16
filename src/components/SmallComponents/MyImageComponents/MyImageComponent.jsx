import { LoadingOutlined } from '@ant-design/icons';
import SkeletonImage from 'antd/es/skeleton/Image';
import React from 'react';
import { Img } from 'react-image';

const MyImageComponent = ({src,className}) => {
    // Placeholder component displayed while the image is loading
    // const MyLoader = () => <SkeletonImage active className={className + "min-h-full"}/>
    const MyLoader = () => <h1 className={className + "min-h-full text-slate-600 bg-slate-100 rounded-lg flex items-center justify-center animate-pulse "} >
        <LoadingOutlined/>
    </h1>

    // Component displayed if the image fails to load
    const MyErrorComponent = () => <div className='text-red-400 flex items-center text-center'>Failed to load image.</div>;

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