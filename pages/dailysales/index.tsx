import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Container, Typography } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import styles from '../../styles/pages/dailysales';
import NavBar from '../../components/NavBar';
import sales from '../../mocks/pages/dailysales';

export default function DailySales() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const columnDefs = [
    {
      headerName: '메뉴명',
      field: 'menu_name',
      flex: 2,
      cellStyle: { fontSize: '20px' }
    },
    {
      headerName: '수량',
      field: 'sales_quantity',
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
        btnName={{ first: '메뉴 관리', second: 'back' }}
        btnAddr={{ first: `/menu-mgnt` }} />
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Typography css={styles.title}>
          당일 매출 –
          {' '}
          {year}
          년
          {' '}
          {month < 10 ? `${0}${month}` : month}
          월
          {' '}
          {day < 10 ? `${0}${day}` : day}
          일
        </Typography>
        <Container css={styles.list} maxWidth={false} disableGutters>
          <Container
            className='ag-theme-alpine'
            css={styles.dataSheet}
            maxWidth={false}
            disableGutters>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={sales}
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
