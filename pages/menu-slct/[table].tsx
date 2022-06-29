import { useRouter } from 'next/router';

export default function MenuSlct() {
  const router = useRouter();
  const { table } = router.query;
}
