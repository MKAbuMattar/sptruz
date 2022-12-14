import type { NextPage } from 'next';

import DeviconsReactOriginal from 'devicons-react/lib/icons/DeviconsReactOriginal';

import Installation from '@/components/installation';
import BasicUsage from '@/components/basicusage';

const Home: NextPage = () => {
  return (
    <>
      <header>
        <section className={'section-header'}>
          <DeviconsReactOriginal size={'3rem'} />
          <h1>Sptruz</h1>
        </section>
      </header>

      <section>
        <h2>Installation</h2>
        <Installation />

        <h2>Basic usage</h2>
        <BasicUsage />
      </section>
    </>
  );
};

export default Home;
