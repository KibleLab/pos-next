import { AppBar, Button } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/components/NavBar';

interface IProps {
  btnName: { first: string; second: string };
  btnAddr?: { first?: string; second?: string };
}

export default function NavBar(props: IProps) {
  const router = useRouter();
  const { btnName, btnAddr } = props;
  return (
    <AppBar css={styles.navBarRoot} elevation={1}>
      <Button css={styles.navBarTitle} onClick={() => router.push(`/`)}>
        <Image src='/images/title.svg' width={319} height={58} />
      </Button>
      {(() => {
        if (btnName.first !== 'null') {
          return (
            <Button
              css={styles.navBarBtnFirst}
              onClick={() => {
                typeof btnAddr?.first !== 'undefined'
                  && router.push(btnAddr?.first);
              }}>
              {btnName.first}
            </Button>
          );
        }
        return null;
      })()}
      {(() => {
        if (btnName.second !== 'back') {
          return (
            <Button
              css={styles.navBarBtnSecond}
              onClick={() => {
                typeof btnAddr?.second !== 'undefined'
                  && router.push(btnAddr?.second);
              }}>
              {btnName.second}
            </Button>
          );
        }
        return (
          <Button css={styles.navBarBtnSecond} onClick={() => router.back()}>
            <Image src='/images/back.svg' width={24} height={24} />
          </Button>
        );
      })()}
    </AppBar>
  );
}
