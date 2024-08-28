import { useSyncExternalStore } from 'react';
import { todosStore } from './todosStore';
import Test from './component/Test';


// "snapshot" : 컴포넌트의 현재 상태를 포착한 이미지
export default function TodosApp() {
  /*
   * [subscribe]
   * 하나의 callback 인수를 받아 store에 구독하는 함수입니다. 스토어가 변경되면 제공된 callback을 호출해야 합니다. 
   * 그러면 컴포넌트가 리렌더링됩니다. subscribe 함수는 구독을 정리하는 함수를 반환해야 합니다.
   * 
   * [getSnapshot]
   * 컴포넌트에 필요한 store 데이터의 스냅샷을 반환하는 함수입니다. 
   * 스토어가 변경되지 않은 상태에서 getSnapshot을 반복적으로 호출하면 동일한 값을 반환해야 합니다. 
   * 저장소가 변경되어 반환된 값이 다르면 (Object.is와 비교하여) React는 컴포넌트를 리렌더링합니다.
   * 
   * [optional getServerSnapshot]
   * store에 있는 데이터의 초기 스냅샷을 반환하는 함수입니다. 
   * 서버 렌더링 도중과 클라이언트에서 서버 렌더링 된 콘텐츠의 하이드레이션 중에만 사용됩니다. 
   * 서버 스냅샷은 클라이언트와 서버 간에 동일해야 하며 일반적으로 직렬화되어 서버에서 클라이언트로 전달됩니다. 
   * 이 함수가 제공되지 않으면 서버에서 컴포넌트를 렌더링할 때 오류가 발생합니다.
  */

  // useSyncExternalStore 은 즉, 외부의 데이터를 구독하고 해당 데이터가 변경되면 리랜더를 해줌

  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button> {/* [1] 이벤트 실행 */}
      <hr />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <Test />
    </>
  );
}
