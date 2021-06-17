import {Iterator} from './Iterator';

export default interface Aggregate {
    iterator(): Iterator;
}