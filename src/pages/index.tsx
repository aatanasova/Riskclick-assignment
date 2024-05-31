import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query';
import InterventionTable from '../components/InterventionTable/Table'
import Header from '@/components/Header';
import ButtonGroup from '@/components/ButtonGroup';
import RadioButton from '@/components/UI/RadioButton';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import SearchBar from '@/components/SearchBar';
import { InterventionProvider } from '@/context/InterventionContext';

const queryClient = new QueryClient();

const Home: NextPage = () => {
  return (
    <InterventionProvider>
      <div className="min-h-screen h-full overflow-hidden bg-gray-100 items-center justify-center p-[20px]">
        <Header />
        <ButtonGroup />
        <div className='w-[100%] h-[55vh] overflow-auto flex flex-col justify-start items-start shadow-[0_1px_2px_0_rgba(16,24,40,0.06),0_1px_3px_0_rgba(16,24,40,0.1)] bg-white mt-2.5 mb-2 mx-0 rounded-lg border-[solid] border-[#eaecf0] position-fixed'>
          <div className='p-3 w-[100%]'>
            <RadioButtonGroup />
            <hr className='w-[100%] h-[1px] bg-[#f2f4f7] mt-[12.5px] mb-0 mx-0'/>
            <SearchBar />
          </div>
          <QueryClientProvider client={queryClient}>
            <InterventionTable />
          </QueryClientProvider>
        </div>
    </div>

    </InterventionProvider>
    
  )
}

export default Home
