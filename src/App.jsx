import { useSyncExternalStore } from 'react';

export default function ChatIndicator() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function getSnapshot() {
  // navigator.onLine => 자바스크립트 네트워크 연결 확인
  console.log("navigator.onLine =>", navigator.onLine);
  return navigator.onLine;
}

function subscribe(callback) {
  // window.addEventListener('online', (callback));
  // window.addEventListener('offline', callback);
  // return () => {
  //   window.removeEventListener('online', callback);
  //   window.removeEventListener('offline', callback);
  // };
}
