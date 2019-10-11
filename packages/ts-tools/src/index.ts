interface Observable<T> {
  (observer: Observer<T>): () => void;
}
interface Observer<T> {
  next(val: T): void;
}
interface Ob<T> {
  subscribe(
    observer: Observer<T>
  ): {
    unsubscribe(): void;
  };
}
interface Operator<T> {
  (ob: Observable<T>): Observable<T>;
}
const map = <T>(ob1: Observable<T>, fn: (x: T) => T): Observable<T> => {
  return (ob: Observer<T>) =>
    ob1({
      next(x) {
        return ob.next(fn(x));
      }
    });
};
function create<T>(observable: Observable<T>): Ob<T> {
  return {
    subscribe(obserber: Observer<T>) {
      let unsubscribe = observable(obserber);
      return {
        unsubscribe
      };
    }
  };
}

let subscription = create<number>(
  map(
    (observer: Observer<number>) => {
      let id = setInterval(() => {
        observer.next(10);
      }, 1000);
      return () => {
        clearInterval(id);
      };
    },
    x => x + x
  )
).subscribe({
  next(x) {
    console.log('x:', x);
  }
});

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
