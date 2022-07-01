import { AppBar, Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/pages';
import BtnTable from '../components/BtnTable';

// dummy
const table = [
  { table_no: 1, table_name: 'Table1' },
  { table_no: 2, table_name: 'Table2' },
  { table_no: 3, table_name: 'Table3' },
  { table_no: 4, table_name: 'Table4' },
  { table_no: 5, table_name: 'Table5' },
  { table_no: 6, table_name: 'Table6' },
  { table_no: 7, table_name: 'Table7' },
  { table_no: 8, table_name: 'Table8' },
];

export default function Index() {
  const router = useRouter();
  return (
    <>
      <AppBar css={styles.appBar} elevation={1}>
        <Button css={styles.appBarTitle} onClick={() => router.push(`/`)}>
          <Image src='/images/title.svg' width={319} height={58} />
        </Button>
        <Button
          css={styles.appBarBtnMenuMgnt}
          onClick={() => router.push(`/menu-mgnt`)}>
          메뉴 관리
        </Button>
        <Button
          css={styles.appBarBtnDailySales}
          onClick={() => router.push(`/dailysales`)}>
          정 산
        </Button>
      </AppBar>
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Container css={styles.btnTableList} maxWidth={false} disableGutters>
          {table.map((data, index) => (
            <div key={index}>
              <BtnTable
                index={index}
                table={data.table_no}
                tableName={data.table_name}
                onClick={() => router.push(`/ordersheet/${data.table_no}`)}
              />
            </div>
          ))}
        </Container>
      </Container>
    </>
  );
}
