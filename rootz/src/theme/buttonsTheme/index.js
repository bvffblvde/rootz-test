import {colors} from "../default/styles";

const theme = {
    primary: {
        default: {
            color: colors.Black,
            backgroundColor: colors.White,
            borderRadius: '40px',
        },
        hover: {
            color: colors.White,
            backgroundColor: colors.CornFlowerBlue,
        },
    },
    primaryOrange: {
        default: {
            color: colors.White,
            backgroundColor: colors.Froly,
            borderRadius: '40px',
            padding: '15px',
            fontSize: '12px',
            textTransform: 'uppercase',
        },
        hover: {
            color: colors.Froly,
            backgroundColor: colors.White,
        },
    },
    text: {
        default: {
            color: colors.Gray,
            backgroundColor: colors.Gray,
            outlineColor: colors.Gray,
        },
        hover: {
            color: colors.Gray,
            backgroundColor: colors.Gray,
            outlineColor: colors.Gray,

        },
    },
};
export { theme };
