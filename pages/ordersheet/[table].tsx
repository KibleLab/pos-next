import { useRouter } from 'next/router';

export default function OrderSheet() {
  const router = useRouter();
  const { table } = router.query;
}
