import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../styles/pages';
import table from '../mocks/pages';
import BtnTable from '../components/BtnTable';
import NavBar from '../components/NavBar';

export default function Index() {
  const router = useRouter();
  return (
    <>
      <NavBar
        btnName={{ first: '메뉴 관리', second: '정 산' }}
        btnAddr={{ first: `/menu-mgnt`, second: `/dailysales` }} />
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Container css={styles.btnTableList} maxWidth={false} disableGutters>
          {table.map((data, index) => (
            <div key={index}>
              <BtnTable
                index={index}
                table={data.table_no}
                tableName={data.table_name}
                onClick={() => router.push(`/ordersheet/${data.table_no}`)} />
            </div>
          ))}
        </Container>
      </Container>
    </>
  );
}
