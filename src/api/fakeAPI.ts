import axios from 'axios';
import { User } from '../types';

const url = 'https://jsonplaceholder.typicode.com/users';

export default class FakeService {
    static async getUsers(): Promise<User[]> {
        return axios.get(url);
    }
}