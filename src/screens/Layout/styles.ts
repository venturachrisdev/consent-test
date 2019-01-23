const drawerWidth = 300;

const styles = () => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  content: {
    marginTop: 80,
    width: '100%',
    padding: 20,
  },
});

export default styles;
