import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const useOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(
    Dimensions.get('window').height > Dimensions.get('window').width,
  );

  useEffect(() => {
    const onChange = ({window: {width, height}}) => {
      setIsPortrait(height > width);
    };

    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return isPortrait;
};

export default useOrientation;
