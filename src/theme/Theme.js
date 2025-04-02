import '@fontsource/roboto';
import { createTheme } from '@mui/material/styles';

const AppTheme = createTheme({
    breakpoints: {
        values: {
            // xl: 1536,
            // lg: 1200,
            // md: 900,
            // sm: 600,
            // xs: 0,
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1368,
            xxl: 1980
        }
    },
    size: 10,
    spacing: 8,
    palette: {
        mode: 'light',
        background: {
            default: "hsl(0, 0%, 100%)",
        },
        // deep forest
        // success: {
        //     everest: '#18842A',
        //     olive: '#45644A',
        //     sand: '#E4DBC4',
        //     white: '#F3EDE3',
        //     contrastText: '#000',
        // },
        // THE HURRICANES
        // harricanes: {
        //     carrot: '#E66C32',
        //     pine: '#0E3F18',
        //     hunter: '#385A42',
        //     plaster: '#EFEEE6',
        //     contrastText: '#000',
        // },
        // lavender moon
        // levender: {
        //     lavender: '#9985F3',
        //     orchid: '#C7B7FC',
        //     thistle: '#E2D3EF',
        //     pearl: '#F4ECFE',
        //     contrastText: '#000',
        // },
        // olive leaves
        // olive: {
        //     army: '#48513D',
        //     olive: '#4F614E',
        //     sage: '#79A085',
        //     tea: '#CDEFDB',
        //     contrastText: '#000',
        // },
        // clay mezzanine
        // secondary: {
        //     oxblood: '#622021',
        //     crimson: '#991B20',
        //     egypt: '#E1CAA5',
        //     seafqam: '#FEF9DE',
        //     contrastText: '#000',
        // },
        // romantic beige
        // romantic: {
        //     thulian: '#AC7681',
        //     salmon: '#E18D92',
        //     ochre: '#FFAB9A',
        //     terracotta: '#FFC7AB'
        // },
        // // pacific coast
        // pacific: {
        //     denim: '#051C36',
        //     pigeion: '#34617F',
        //     independence: '#5F8FA5',
        //     cream: '#E6DEAB'
        // },
        primary: {
            main: '#18842A',
            dark: '#45644A',
            deep: '#E4DBC4',
            contrastText: '#FFF',
            light: '#E8F9EF',
        },

        info: {
            light: '#FFFFFF',
            main: '#e9e9e9',
            dark: '#616161',
            deep: '#000',
            contrastText: '#FFF',
        },
        // error: {
        //     burgundy: '#75000c',
        //     chili: '#8D261F',
        //     flax: '#D4CFAE',
        //     mushroom: '#F0E5C1',
        //     contrastText: '#FFFFFF',
        // },
    },
    shape: {
        borderRadius: 0
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 25,
        htmlFontSize: 30,
        h1: {
            fontWeight: "900 !important",
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontWeight: 700,
            fontSize: "3.75rem",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em"
        },
        h3: {
            fontWeight: 500,
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: "0em"
        },
        h4: {
            fontWeight: 300,
            fontSize: "1.650rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em"
        },
        h5: {
            fontWeight: 400,
            fontSize: "1.2rem",
            lineHeight: 1.334,
            letterSpacing: "0em"
        },
        h6: {
            fontWeight: 200,
            fontSize: "1.25rem",
            lineHeight: 1.2,
            letterSpacing: "0.0075em",
            textAlign: 'left'
        },
        body1: {
            fontWeight: 500,
            fontSize: "0.978rem",
            lineHeight: 1.2,
            letterSpacing: "0.01038em",
            textAlign: 'left'
        },
        body2: {
            fontWeight: 400,
            fontSize: "0.816rem",
            lineHeight: 1.43,
            letterSpacing: "0.01971em",
            textAlign: 'left'

        },
        subtitle1: {
            // fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
            textAlign: 'left'
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em",
            textAlign: 'left'
        },
        button: {
            fontWeight: 100,
            fontSize: "0.775rem",
            lineHeight: 1.45,
            letterSpacing: "0.02857em",
            textTransform: "capitalize",
        },
        caption: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em",
            textAlign: 'left'

        },
        overline: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.08333em",
            textTransform: "uppercase",
            textAlign: 'left'
        }
    },
    mixins: {
        toolbar: {
            minHeight: 25
        }
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0px",
                    padding: "8px 10px",
                    fontSize: "0.796rem",
                    transition: "all 0.3s ease-in-out",
                    outline: "none", // Prevent focus outline
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                    "&:focus": {
                        outline: "none",
                        boxShadow: "none", // Remove focus border
                    },
                    "&:focus-visible": {
                        outline: "none",
                        boxShadow: "none", // Ensures no focus outline in any scenario
                    },
                    "&:active": {
                        outline: "none",
                        boxShadow: "none", // Prevents outline on click
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0px",
                    padding: "8px 10px",
                    fontSize: "0.796rem",
                    transition: "all 0.3s ease-in-out",
                    outline: "none", // Prevent focus outline
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                    "&:focus": {
                        outline: "none",
                        boxShadow: "none", // Remove focus border
                    },
                    "&:focus-visible": {
                        outline: "none",
                        boxShadow: "none", // Ensures no focus outline in any scenario
                    },
                    "&:active": {
                        outline: "none",
                        boxShadow: "none", // Prevents outline on click
                    },
                },
            },
        },

        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '0px 12px',
                    height: 32,
                    lineHeight: '10px',
                    borderBottom: '1px solid #FEFEFE',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:nth-of-type(even)': {
                        fontSize: '10px',
                        backgroundColor: '#F0F1F5'
                    },
                    '&:last-child td, &:last-child th': {
                        fontSize: '10px',
                        border: 0,
                    },
                    borderBottom: '1px solid #FEFEFE',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    height: 30,
                },
            },
        },
        MuiTableFooter: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F0F1F5',
                    height: 20,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    fontSize: '12px',
                    minHeight: '10px',
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    minHeight: '10px',
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    background: '#FFF',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                        background: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                    },
                },
                input: {
                    padding: '8px 12px',
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: '3px',
                    '& svg': {
                        fontSize: '15px',
                    },
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    my: 1,
                    height: 27,
                    background: 'none',
                    '& svg': {
                        fontSize: '13px',
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f0f0f0',
                    margin: '10px 0',
                    '&:hover': {
                        backgroundColor: '#d0d0d0',
                    },
                },
            },
        },
    },

});



export default AppTheme


