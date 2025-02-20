# React Native useEffect Cleanup Function Inconsistency

This repository demonstrates a common issue in React Native where the cleanup function within the `useEffect` hook might not consistently execute when dealing with asynchronous operations.  This can lead to unexpected behavior, memory leaks, or other problems if resources aren't properly released.

## The Problem

The `bug.js` file shows an example of an asynchronous operation (fetching data) inside `useEffect`.  If the component unmounts before the `fetch` call completes, the cleanup function might not be executed, leaving resources un-released.  This is demonstrated by the potentially missing `console.log` within the cleanup function.

## The Solution

The `bugSolution.js` file provides a solution using `AbortController` to gracefully handle component unmounting.  This ensures that the asynchronous operation is cancelled and resources are released even if the component is unmounted prematurely.  The `AbortController` allows for a clean shutdown, preventing potential issues.