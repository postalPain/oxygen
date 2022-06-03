import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { windowDimensions } from 'utils/window';
import { isRTL } from 'config/rtl';

const xml = () => `
<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M42.1663 14.8924V17.2499H3.83301V14.4516C3.83301 10.0624 7.39801 6.5166 11.7872 6.5166H30.6663V11.4424C30.6663 13.8766 32.123 15.3333 34.5572 15.3333H40.1922C40.9588 15.3333 41.6105 15.1991 42.1663 14.8924Z" fill="#CD5676"/>
<path d="M3.83301 17.25V31.5483C3.83301 35.9375 7.39801 39.4833 11.7872 39.4833H34.2122C38.6013 39.4833 42.1663 35.9375 42.1663 31.5483V17.25H3.83301ZM15.333 33.0625H11.4997C10.7138 33.0625 10.0622 32.4108 10.0622 31.625C10.0622 30.8392 10.7138 30.1875 11.4997 30.1875H15.333C16.1188 30.1875 16.7705 30.8392 16.7705 31.625C16.7705 32.4108 16.1188 33.0625 15.333 33.0625ZM27.7913 33.0625H20.1247C19.3388 33.0625 18.6872 32.4108 18.6872 31.625C18.6872 30.8392 19.3388 30.1875 20.1247 30.1875H27.7913C28.5772 30.1875 29.2288 30.8392 29.2288 31.625C29.2288 32.4108 28.5772 33.0625 27.7913 33.0625Z" fill="#7D59B4"/>
<path d="M40.1928 1.91699H34.5578C32.1237 1.91699 30.667 3.37366 30.667 5.80783V11.4428C30.667 13.877 32.1237 15.3337 34.5578 15.3337H40.1928C42.627 15.3337 44.0837 13.877 44.0837 11.4428V5.80783C44.0837 3.37366 42.627 1.91699 40.1928 1.91699ZM41.9945 9.44949C41.8028 9.64116 41.5153 9.77533 41.2087 9.79449H38.5062L38.5253 12.4587C38.5062 12.7845 38.3912 13.0528 38.1612 13.2828C37.9695 13.4745 37.682 13.6087 37.3753 13.6087C36.7428 13.6087 36.2253 13.0912 36.2253 12.4587V9.77533L33.542 9.79449C32.9095 9.79449 32.392 9.25783 32.392 8.62533C32.392 7.99283 32.9095 7.47533 33.542 7.47533L36.2253 7.49449V4.81116C36.2253 4.17866 36.7428 3.64199 37.3753 3.64199C38.0078 3.64199 38.5253 4.17866 38.5253 4.81116L38.5062 7.47533H41.2087C41.8412 7.47533 42.3587 7.99283 42.3587 8.62533C42.3395 8.95116 42.2053 9.21949 41.9945 9.44949Z" fill="#97DAFF"/>
</svg>
`;

export default ({
  size = 0.11 * windowDimensions.width,
}) => {
  const rotationAngle = isRTL ? '180deg' : '0deg';
  return (
    <SvgXml xml={xml()} width={size} height={size} style={{ transform: [{ rotateY: rotationAngle }] }} />
  );
};
