import { Search, Bell, ShoppingCart, CircleUser } from 'lucide-react';
import Button from '../../common/Button';
import SearchBar from './SearchBar';
import Greetings from '../../common/Greetings';

export default function Header(){
    return (
        <header className='flex items-center justify-between px-6 py-4 bg-[#0D1117]'>
            { /* Greetings */}
            <Greetings user="Krish" />
            
            {/* Nav */}
            <div className='flex items-center justify-between'>

                <SearchBar />

                <div className='flex items-center gap-4'>
                    <Button>
                        <Bell size={20} />
                    </Button>

                    <Button>
                        <ShoppingCart size={20} />
                    </Button>

                    <Button>
                        <CircleUser size={20} />
                    </Button>
                </div>
            </div>
        </header>
    );
}