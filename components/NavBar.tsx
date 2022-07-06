import { AppBar, Button } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/components/NavBar';

interface IProps {
  nameArr: string[];
  addrArr?: string[];
}

export default function NavBar(props: IProps) {
  const router = useRouter();
  const { nameArr, addrArr } = props;
  return (
    <AppBar css={styles.navBarRoot} elevation={1}>
      <Button css={styles.navBarTitle} onClick={() => router.push(`/`)}>
        <Image src='/images/title.svg' width={319} height={58} />
      </Button>
      {(() => {
        if (nameArr[0] !== 'null') {
          return (
            <Button
              css={styles.navBarBtnLeft}
              onClick={() => {
                addrArr !== undefined ? router.push(addrArr[0]) : null;
              }}>
              {nameArr[0]}
            </Button>
          );
        }
        return null;
      })()}
      {(() => {
        if (nameArr[1] !== 'back') {
          return (
            <Button
              css={styles.navBarBtnRight}
              onClick={() => {
                addrArr !== undefined ? router.push(addrArr[1]) : null;
              }}>
              {nameArr[1]}
            </Button>
          );
        }
        return (
          <Button css={styles.navBarBtnRight} onClick={() => router.back()}>
            <Image src='/images/back.svg' width={24} height={24} />
          </Button>
        );
      })()}
    </AppBar>
  );
}
