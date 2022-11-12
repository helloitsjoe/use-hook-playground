import { use, useMemo, Suspense } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ErrorBoundary from './components/ErrorBoundary';
import styles from '../styles/Home.module.css';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchData() {
  await wait(1000);
  return fetch('https://swapi.dev/api/people').then((res) => {
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    return res.json();
  });
}

const fetchPromise = fetchData();

function StarWars() {
  const data = use(fetchPromise);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default function Home() {
  return (
    <Suspense fallback="Loading...">
      <ErrorBoundary>
        <StarWars />
      </ErrorBoundary>
    </Suspense>
  );
}
