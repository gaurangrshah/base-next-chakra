import { Box, Grid } from "@chakra-ui/react";

import { ScaffoldProvider } from "@/chakra/contexts/scaffold-context";
import { useScaffold } from "@/chakra/contexts/scaffold-context";

function Scaffold({ children }) {
  const { showHeader, showFooter, header, footer, scaffold, properties, theme } = useScaffold();

  return (
    <ScaffoldProvider>
      <Scaffold.PageGrid {...{ theme }}>
        <Scaffold.TopBar {...{ theme }}>
          {showHeader && <header.component {...header.props} />}
        </Scaffold.TopBar>
        <Scaffold.Main {...{ theme }}>
          {children}
          {properties?.length
            ? properties.map((key) => {
                const Component = key.Component;
                return <Component key={scaffold[key].id} />;
              })
            : ""}
        </Scaffold.Main>
        <Scaffold.BottomBar {...{ theme }}>
          {showFooter && <footer.component {...footer.props} />}
        </Scaffold.BottomBar>
      </Scaffold.PageGrid>
    </ScaffoldProvider>
  );
}

function PageGrid({ theme = "default", children, ...rest }) {
  return (
    <Grid {...pagegrid[theme]} {...rest}>
      {children}
    </Grid>
  );
}

function TopBar({ theme = "default", children, ...rest }) {
  return (
    <Box {...topbar[theme]} {...rest}>
      {children}
    </Box>
  );
}

function MainContent({ theme = "default", children, ...rest }) {
  return (
    <>
      <Box {...main[theme]} {...rest}>
        {children}
      </Box>
    </>
  );
}

function BottomBar({ theme = "default", children, ...rest }) {
  return (
    <Box {...bottombar[theme]} {...rest}>
      {children}
    </Box>
  );
}

Scaffold.PageGrid = PageGrid;
Scaffold.TopBar = TopBar;
Scaffold.Main = MainContent;
Scaffold.BottomBar = BottomBar;

export default Scaffold;

export const topbar = {
  default: { w: "full", zIndex: "docked" },
  dashboard: { h: "100vh" },
};

export const pagegrid = {
  default: {
    templateRows: "auto 1fr auto",
    templateColumns: "1fr",
    gap: "0 0",
    templateAreas: ". . .",
    h: "100vh",
    zIndex: 0,
  },
  dashboard: {
    display: "flex",
  },
};

export const main = {
  default: {
    as: "main",
    position: "relative",
    display: "flex",
    w: "full",
    maxW: "full",
    h: "full",
    my: "auto",
    overflowX: "hidden",
    h: "100vh",
  },
  dashboard: {
    as: "main",
    position: "relative",
    display: "flex",
    flex: 1,
    overflowX: "hidden",
    h: "100vh",
  },
};

export const bottombar = {
  default: {
    w: "full",
    zIndex: "docked",
  },
  dashboard: {
    display: "none",
    visibility: "hidden",
  },
};
