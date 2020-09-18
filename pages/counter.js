// pages/counter.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { wrapper } from '../store/ configureStore';
import { useDispatch, useSelector } from 'react-redux';

import { selectCount, increment, decrement, setCount } from '../store/counter';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  console.log('render...');

  return (
    <div className={styles.container}>
      <Head>
        <title>Counter App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      </main>
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(setCount(10));
});
