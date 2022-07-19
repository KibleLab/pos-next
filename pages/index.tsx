import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import styles from '../styles/pages';
import BtnTable from '../components/BtnTable';
import NavBar from '../components/NavBar';

type TableProps = {
  table_no: number;
  table_name: string;
};

export default function Index() {
  const router = useRouter();

  const getTableAPI = async () => {
    const { data } = await axios.get('/api/table-mgnt');
    return data;
  };

  const { data: table, status } = useQuery<TableProps[], Error>('table', getTableAPI);

  return (
    <>
      <NavBar
        btnName={{ first: '메뉴 관리', second: '정 산' }}
        btnAddr={{ first: `/menu-mgnt`, second: `/dailysales` }} />
      <Container css={styles.contents} maxWidth={false} disableGutters>
        <Container css={styles.btnTableList} maxWidth={false} disableGutters>
          {status === 'error' && <p>Error fetching data</p>}
          {status === 'loading' && <p>Fetching data...</p>}
          {status === 'success' && (
            <div>
              {table.map((data, index) => (
                <div key={index}>
                  <BtnTable
                    index={index}
                    table={data.table_no}
                    tableName={data.table_name}
                    onClick={() => router.push(`/ordersheet/${data.table_no}`)} />
                </div>
              ))}
            </div>
          )}
        </Container>
      </Container>
    </>
  );
}
