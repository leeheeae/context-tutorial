# REACT Context API 사용해보기

### 새 Context 만들기

-   프로젝트 생성 후 `src/contexts` 디렉토리 생성, 그 후에 파일 생성
    -   `Context` 디렉토리를 반드시 만들 필요는 없지만 다른 파일과 구분하기 위해 생성

### Consumer를 통해 조회하기

-   생성한 `Context` 컴포넌트를 import 하고 그 안에 들어있는 `Consumer`를 통해 조회

    -   Consumer 사이에 중괄호를 열어 함수를 넣어줌

        -   `Function as a Child` 또는 `Render Props`라고 부름

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

-   CreateContext 함수에 파라미터로 Context의 기본값 설정은 Provider를 사용하지 않았을 때만 사용됨
-   Provider를 사용할 때는 꼭 value를 명시해주어야함
