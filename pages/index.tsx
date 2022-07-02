import { AppBar, Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/pages';
import table from '../mocks/pages';
import BtnTable from '../components/BtnTable';

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
