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
        nameArr={['메뉴 관리', '정 산']}
        addrArr={[`/menu-mgnt`, `/dailysales`]}
      />
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
