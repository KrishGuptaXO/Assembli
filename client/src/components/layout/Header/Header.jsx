import { Search, Bell, ShoppingCart, CircleUser } from 'lucide-react';
import Button from '../../common/Button';
import SearchBar from './SearchBar';
import Greetings from '../../common/Greetings';

export default function Header(){
    return (
        <header className='flex flex-col gap-6 bg-[#0D1117] px-8 py-6'>

            {/* Search Row */}
            <div className='flex items-center justify-between'>

                <SearchBar />

                <div className='flex items-center gap-3'>

                    <div className='relative'>
                        <button className="rounded-xl bg-[#161B22] p-3 text-zinc-400 transition-all duration-300 hover:bg-[#1F2937] hover:text-cyan-400 cursor-pointer">
                            <Bell size={20} />
                        </button>
                        <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-[11px] font-bold text-black'>
                            2
                        </span>
                    </div>
                    
                    <div className='relative'>
                        <button className="rounded-xl bg-[#161B22] p-3 text-zinc-400 transition-all duration-300 hover:bg-[#1F2937] hover:text-cyan-400 cursor-pointer">
                            <ShoppingCart size={20} />
                        </button>
                        <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-[11px] font-bold text-black'>
                            1
                        </span>
                    </div>
                    
                    <button className="rounded-xl bg-[#161B22] p-3 mr-3 text-zinc-400 transition-all hover:bg-[#1F2937] hover:text-cyan-400 cursor-pointer">
                        <CircleUser size={20} />
                    </button>
                
                </div>
            </div>
            { /* Greetings */}
            <Greetings user="Krish" />

        </header>
    );
}