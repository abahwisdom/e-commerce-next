import fetcher from '@/common/utils/fetcher';
import Showcase from '@/modules/Showcase/page';

export default async function Home() {
  const getData = await fetcher<any, any>({
    path: '/products',
    isExternal: true,
  });

  return <Showcase dataFromServer={getData} />;
}
