import User from './User';
import Ad from './Ad';

export default interface UserResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    ad: Ad;
}
