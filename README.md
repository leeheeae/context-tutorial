# REACT Context API 사용해보기

> 기존에는 컴포넌트 간에 상태를 교류해야할 경우 무조건 부모 -> 자식 흐름으로 props를 전달하여 사용하였지만, Context API를 통해 더욱 쉽게 상태를 교류할 수 있게 되었다.

### 새 Context 만들기

- 프로젝트 생성 후 `src/contexts` 디렉토리 생성, 그 후에 파일 생성
  - `Context` 디렉토리를 반드시 만들 필요는 없지만 다른 파일과 구분하기 위해 생성

### Consumer를 통해 조회하기

- 생성한 `Context` 컴포넌트를 import 하고 그 안에 들어있는 `Consumer`를 통해 조회

  - Consumer 사이에 중괄호를 열어 함수를 넣어줌

    - `Function as a Child` 또는 `Render Props`라고 부름

    ```javascript
    //예시
    const RenderPropsSample = ({ children }) => {
        return <div>결과 : {children(5)}</div>;
    };

    ---
    <RenderPropsSample>{value => 2 * value}</RenderPropsSample>

    ```

### Provider 를 이용한 Context value 변경하기

```javascript
<ColorContext.Provider value={{ color: 'red' }}></ColorContext>
```

- CreateContext 함수에 파라미터로 Context의 기본값 설정은 Provider를 사용하지 않았을 때만 사용됨
- Provider를 사용할 때는 꼭 value를 명시해주어야함

### 동적 Context 사용하기

- Context의 value에는 무조건 상태 값만 있어야 하는 것은 아님
- 함수를 전달할 수 있음
- ColorProvider 라는 컴포넌트를 새로 작성
  - Provider의 value에는 상태는 state, 업데이트 함수는 actions로 묶어서 전달
  - 반드시 묶어줄 필요는 없지만 각 객체를 따로 분리해주면 나중에 다른 컴포넌트에서 Context의 값을 사용할 때 편리함
- createContext의 기본값은 실제 Provider의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋음
  - Context 코드를 볼 때 내부 값이 어떻게 구성되어 있는지 파악하기도 쉬움
  - 실수로 Provider를 사용하지 않았을 때 리액트 애플리케이션에서 에러가 발생하지 않음

### 색상 선택 컴포넌트 만들기

- 선택한 색상으로 박스 색상 변경하기
- 마우스 왼쪽으로 클릭 시 1번째 박스 색상 변경, 오른쪽 마우스 클릭 시 2번째 박스 색상 변경
- 색상 선택 컴포넌트에 만들어둔 Consumer 함수 불러와서 설정

### Consumer 대신 Hook 또는 Static ContextType 사용하기

#### useContext

- `useContext`라는 Hook을 사용하면 함수형 컴포넌트에서 편하게 사용 가능
- 클래스형 컴포넌트에서는 사용할 수 없음
