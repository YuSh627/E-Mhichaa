import { Box } from "@mui/material";

interface MainBoxProps {
  children?: React.ReactNode;
  justifyContent?: string;
}

const MainBox = ({ children, justifyContent }: MainBoxProps) => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        width: "80%",
        px: 2,
        py: 2.5,
        display: "flex",
        alignItems: "center",
        gap: 2,
        bgcolor: "primary.main",
        color: "secondary.main",
        justifyContent,
      }}>
      {children}
    </Box>
  );
};

export default MainBox;
