import {Observable, Observer} from "rxjs/Rx";
let numbers = [1,5,10];
//let source =  Observable.from(numbers);

let source = Observable.create(observer => {
    for (let n of numbers){
        if (n === 5){
            observer.error('wrong');
        }
        observer.next(n);
    }

    observer.complete();
});
//easier way
source.subscribe(
    value=>console.log(value),
    e => console.log(e),
    () => console.log('complete')
);

//class way
class MyObserver implements Observer<number> {
    next(value){
        console.log(value);
    }

    error(e){
        console.log(e);
    }

    complete(){
        console.log('done');
    }
}
// source.subscribe(new MyObserver());
// source.subscribe(new MyObserver());