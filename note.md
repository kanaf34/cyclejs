
[Cycle.js](https://github.com/cyclejs/core)

- [javascript-reactive-framework](https://rrees.me/2015/06/04/overview-of-javascript-reactive-frameworks/)

- 반응형 사용자 인터페이스를 만들기 위한 작은 프레임워크 (RxJS 에서 탑?)
- React 같은 몇가지 현대적인 기능 제공: virtualDOM / 단방향 데이터흐름
	- a reactive way
	- Observables
	- enormous advantages (거대한 이득? 뭐가?)
	- simpler than other framework

#### 설치

```
npm install browserify
npm install @cycle/core
npm install @cycle/dom
```

`npm install rx @cycle/core`
- rx 없으면 build 시 에러

`browserify index-mvi.js --outfile bundle.js`

#### step1.js

1. Cycle Core / Cycle DOM driver 가 필요해요.
2. main function 은 입구입니다.
`main은 걍 이름이겠죠?`
	- 처음에 쓰는 건 오직 *DOM driver*
	- 반환값: a collection of Observables
	- *CycleDOM.h()* 을 이용해서 *virtual tree* 를 작성
	- DOM driver가 virtual tree를 rendering 한다는 듯.
	- 첫 예제에서는 span element만 반환.
3. DOM driver 를 만듭시다.
4. *Cycle.run()* 을 통해서 main 함수와 DOM driver 을 연결합니다.

#### Cycle.js Driver

- Cyclejs drivers are function
- 함수는 이전에는 사이드 이펙트를 발생시킬 수 있는 존재였죠
- Driver 는 Observable 해졌고 Data 를 방출합니다.
- 그리고는 다른 Observable 을 반환해요. 또다른 사이드이펙트를 발생시킬 수 있는 애죠.. (...?!)
- driver 는 자주 만들지 않습니다. 오직 사이드 이펙트가 필요할 때만에요. (ex DOM 변경, 읽기, 쓰기)

#### index.js

- 이게 뭔가 싶죠? 진정하세요.
- [Virtual Hyperscript](https://github.com/Raynos/virtual-hyperscript)
- Virtual Hyperscript 는 *h*라는 하나의 메소드를 가집니다.
- h 에서 node 를 정의하는 방법은 HTML 의 그것과 비슷하지만, JavaScript 를 이용해요

#### JSX

- browserify, babelify 하려고 해도 안되더랍니다.
- 이 스타일은 일단 본적이 있으니..

#### Revising Our main Function 

- 위의 step1에서 main 에 인자값이 있었어요. (사용을 안 했지만.)
- 이 responses 라는 건 drivers 가 run 함수 내에서 작업 하고 준거에요.
- main 함수의 결과는 drivers의 input 이고 또 drivers 의 결과는 main 함수의 input...cycle..이래요..음..?
- 잊지 말아야할 건 input/output 은 언제나 Observable.
- 