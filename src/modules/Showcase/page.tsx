'use client';

// import { useGetTheProductsQuery } from '@/lib/services/api';
import { useState } from 'react';
import Product from './components/Product';
import CategoryMenu from './components/CategoryMenu';
import { CloseCircleOutlined, GiftFilled } from '@ant-design/icons';
import { Product as ProductType } from '@/lib/services/types/Product';

const Showcase = ({dataFromServer}:{dataFromServer:ProductType[]}) => {
  // const { data, isLoading, isError } = useGetTheProductsQuery('products');

  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredData = selectedCategory==="" ? dataFromServer : dataFromServer?.filter((product) => product.category === selectedCategory);

  return (
    <main className="min-h-[calc(100vh-114px)] container mx-auto px-4 md:px-10 py-10">
      <CategoryMenu setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} products={dataFromServer} />
      <div className='grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-4'>
        {filteredData?.map((product, index) => (
          <Product key={product.id} product={product} productIndex={index} />
        ))}
      </div>

      {dataFromServer && filteredData?.length === 0 &&
         <div className="text-center flex flex-col gap-4 justify-center items-center h-[calc(100vh-260px)]">
          <GiftFilled style={{fontSize:'60px', color:"#62595929"}} />
          <div className='flex flex-col'>
            <span className='text-lg'>No Items Available</span>
          </div>
        </div>
      }
      {/* {isLoading &&
         <div className="text-center flex flex-col gap-4 justify-center items-center h-[calc(100vh-260px)]">
          <GiftFilled style={{fontSize:'60px', color:"#62595929"}} className='animate-pulse' />
        </div>
      } */}
      {!dataFromServer &&
         <div className="text-center flex flex-col gap-4 justify-center items-center h-[calc(100vh-260px)]">
          <CloseCircleOutlined style={{fontSize:'60px'}} />
          <div className='flex flex-col'>
            <span className='text-lg'>Error fetching data</span>
            <a className='text-sm underline text-gray-500' href='/'>Reload</a>
          </div>
        </div>
      }
    </main>
  );
};

export default Showcase;
