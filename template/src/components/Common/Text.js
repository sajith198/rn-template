import {Text as RNText} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import {globalStyles} from '../../styles/globalStyles';

const Text = ({style, variant, color, ...rest}) => {
  const {colors} = useTheme();

  return (
    <RNText
      style={{
        color: colors.primary_text,
        ...globalStyles.textVariants[variant],
        ...style,
      }}
      {...rest}
    />
  );
};

export default Text;
