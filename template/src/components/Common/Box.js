import {useContext} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import {View, Dimensions} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import useScreenDimensions from '../../hooks/useScreenDimension';

const Box = ({
  style,
  padding,
  margin,
  backgroundColor,
  flexDirection,
  ...rest
}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        margin: globalStyles.spacing[margin] || 0,
        padding: globalStyles.spacing[padding] || 0,
        backgroundColor: colors.primary_bg,
        flexDirection: flexDirection || 'column',
        ...style,
      }}
      {...rest}
    />
  );
};

export default Box;

// const getBreakpointForScreenSize = ({theme, dimensions}) => {
//   const sortedBreakpoints = Object.entries(theme.breakpoints).sort(
//     (valA, valB) => {
//       return valA[1] - valB[1];
//     },
//   );

//   return sortedBreakpoints.reduce((acc, [breakpoint, minWidth]) => {
//     if (dimensions.width >= minWidth) return breakpoint;
//     return acc;
//   }, null);
// };

// const getResponsiveValue = ({value, dimensions, theme}) => {
//   if (typeof value === 'object') {
//     return value[getBreakpointForScreenSize({theme, dimensions})];
//   }
//   return value;
// };

// const Box = ({
//   style,
//   padding,
//   margin,
//   backgroundColor,
//   flexDirection,
//   ...rest
// }) => {
//   const dimensions = useScreenDimensions();
//   const {colors} = useTheme();

//   return (
//     <View
//       style={{
//         margin:
//           globalStyles.spacing[
//             getResponsiveValue({value: margin, dimensions, globalStyles})
//           ],
//         padding:
//           globalStyles.spacing[
//             getResponsiveValue({value: padding, dimensions, globalStyles})
//           ],
//         flexDirection: flexDirection || 'row',
//         backgroundColor:
//           globalStyles.colors[
//             getResponsiveValue({
//               value: primary_bg,
//               dimensions,
//               globalStyles,
//             })
//           ],
//         ...style,
//       }}
//       {...rest}
//     />
//   );
// };

// export default Box;
