import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 24px",
                backgroundColor: colors.primary.DEFAULT,
                borderBottom: `1px solid ${colors.borderColor}`,
                height: "95px",
            },
            iconBlock: {
                display: 'flex',
                columnGap: '10px',
                alignItems: 'center',
                borderRight: `1px solid ${colors.borderColor}`,
                paddingRight: '20px'
            },
            right: {
                display: 'flex',
                columnGap: '28px',
                alignItems: 'center'
            },
            searchIcon: {
                '&:hover': {
                    background: 'transparent',
                },
            },
            searchInput: {
                padding: "18px 12px",
                boxSizing: "border-box",
                height: "48px"
            },
            searchBlock: {
                display: 'flex',
                borderRadius: '8px',
                backgroundColor: `${colors.primary[600]}`
            }
        }
    )
})