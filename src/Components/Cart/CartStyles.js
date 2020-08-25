import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  emptyContainer: {
    margin: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shoppingCartIcon: {
    fontSize: 60,
    marginBottom: 20,
  },
  tableContainer: {
    maxWidth: 800,
    margin: '20px auto',
  },
  table: {
    minWidth: 500,
  },
  cartBottom: {
    maxWidth: 850,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
