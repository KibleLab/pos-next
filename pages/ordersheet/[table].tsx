import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Container, Typography } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/ordersheet';
import NavBar from '../../components/NavBar';
import order from '../../mocks/pages/ordersheet';

export default function OrderSheet() {
  const router = useRouter();
  const { table } = router.query;
  const columnDefs = [
    {
      headerName: '메뉴명',
      field: 'menu_name',
      flex: 2,
      cellStyle: { fontSize: '20px' }
    },
    {
      headerName: '수량',
      field: 'order_quantity',
      flex: 1,
      cellStyle: { fontSize: '20px' },
      valueFormatter: currencyFormatter
    },
    {
      headerName: '단가',
      field: 'menu_price',
      flex: 1,
      cellStyle: { fontSize: '20px' },
      valueFormatter: currencyFormatter
    }
  ];
  return (
    <>
      <NavBar
        btnName={{ first: '메뉴 선택', second: 'back' }}
        btnAddr={{ first: `/menu-slct/${table}` }} />
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Typography css={styles.title}>
          주문서 – Table
          {' '}
          {table}
        </Typography>
        <Container css={styles.list} maxWidth={false} disableGutters>
          <Container
            className='ag-theme-alpine'
            css={styles.dataSheet}
            maxWidth={false}
            disableGutters>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={order}
              suppressMovableColumns
              suppressCellSelection />
          </Container>
        </Container>
        <Container css={styles.info} maxWidth={false} disableGutters />
      </Container>
    </>
  );
}

const formatNumber = (number: number): string => Math.floor(number)
  .toString()
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const currencyFormatter
  = (params: { value: number }): string => formatNumber(params.value);
