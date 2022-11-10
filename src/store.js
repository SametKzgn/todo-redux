import {createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk'
const store=createStore(rootReducer,applyMiddleware(thunk)); // burada store ı oluşturuyoruz ve thunk ı ekliyoruz ve rootReducer ı combine ediyoruz
//thunk nedir? thunk bir middleware dir ve action ları dispatch etmeden önce işlem yapmamızı sağlar
//middleware nedir? middleware bir ara katmandır ve action ları dispatch etmeden önce işlem yapmamızı sağlar
// bu işlemi aşama aşama anlatacak olursak öncelikle action ları dispatch ediyoruz ve reducerlara gönderiyoruz ve reducerlarda işlem yapıyoruz ve state i güncelliyoruz ve componentlerdeki state i güncelliyoruz
// ve bu işlemleri middleware ile yapabiliyoruz ve thunk ile yapabiliyoruz


export default store;