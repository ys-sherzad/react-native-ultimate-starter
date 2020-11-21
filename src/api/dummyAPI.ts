import axios from 'axios';
import { baseURL } from '../config';
import { User } from '../types';

export default class DummyService {
    static async getUsers(): Promise<User[]> {
        try {
            const res = await axios.get(baseURL + '/users');
            return res.data;
        } catch (ex) {
            throw ex;
        }
    }
}