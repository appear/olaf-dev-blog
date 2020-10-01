---
slug: "/blog/react/cook-use-effect"
date: "2020-10-01"
title: "React Hooks — UseEffect 의 다양한 조리법"
category: react
tags: react
---

# React Hooks — UseEffect 의 다양한 조리법

> React 16.8 부터 추가된 Hook 중 하나인 useEffect 의 다양한 사용법에 대해 알아보겠습니다.

## useEffect 의 특징

1. useEffect 는 컴포넌트가 렌더링 된 후 동작합니다. 이를 이용하여 라이프 사이클처럼 동작을 제어 할 수 있습니다. (최초에 한 번은 무조건 동작합니다)  
2. 함수 컴포넌트 내부에서만 동작합니다. 클래스 컴포넌트 내부에서는 이용할 수 없습니다.
3. useEffect 는 첫 번째인자로 async function 을 지원하지 않습니다. (하지만 사용 할 수 있습니다 예제로 알아보겠습니다)
4. useEffect 는 컴포넌트가 사라지기전에 동작을 제어 할 수 있는데, 이를 이용하여 메모리 누수를 방지 할 수 있습니다.

## 조리법 1: 상태 감지

useEffect 는 상태의 변화를 감지합니다.  
useEffect 는 첫 번째 인자로 값이 변경되었을 때 실행할 함수, 두 번째 인자로는 상태 변경을 감지하기 원하는 상태 값들을 받습니다. 만약 두 번째 인자가 빈 배열이라면 최초에 한 번만 실행됩니다.

### 예제)
1. useEffec에게 count 라는 상태 값을 바라보도록 합니다.
2. handleIncrementCount 는 count 상태 값을 1 씩 증가시킵니다.
3. count 값이 변하면 useEffect 가 동작합니다.
4. 0 이라는 값이 처음에 찍혔는데 useEffect 의 특징 1번에 해당합니다.

![예제](/images/useEffect01.png)


## 조리법 2: 라이프사이클 흉내내기

함수형 컴포넌트는 라이프사이클을 가질 수 없습니다.  
useEffect 을 이용하면 함수형 컴포넌트에서도 클래스 컴포넌트의 라이프사이클과 같이 흉내를 낼 수 있습니다.  

위에서 살펴본 useEffect 의 특징 1, 4번에 해당하는 내용입니다.   
useEffect 의 두번째 인자가 빈 배열이면 렌더링 후 최초 1번만 실행됩니다
