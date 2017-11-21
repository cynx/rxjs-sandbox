import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

let numbers = [1,5,10];
//let source =  Observable.from(numbers);

let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length){
            setTimeout(produceValue,2000)
        }else{
            observer.complete();
        }
    };

    produceValue();
}).map(n=>n*2)
    .filter(n=>n>4);
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