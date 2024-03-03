import React, { useState, useEffect } from 'react';
import Image from './Image';
import fetchData from '../utils/fetchdata';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

function ImageCard({ heading, id, setPhoto }) {
    const [data, setData] = useState([]);


    const [offset, setOffset] = useState(0);
    const handleNextClick = () => {
        setOffset(offset + 20);
    };

    const handlePreviousClick = () => {
        if (offset >= 20) {
            setOffset(offset - 20);
        }
    };

    useEffect(() => {
        fetchData(setData, offset);
    }, [offset]);

    return (
        <>
            <h1 className='text-center my-6 mt-10 sm:my-14 text-3xl md:text-5xl'>{heading}</h1>
            
<form class="max-w-lg mx-auto">
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div class="relative w-full ">
        <div class="relative w-full ">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
        </div>
    </div>
</form>

            <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-20">
                {data.photos && data.photos.map(photo => (
                    <Image key={photo.id} id={photo.id} url={photo.url} title={photo.title} author={photo.author} location={photo.location} category={photo.category} />
                ))}
            </div>

            {/* <div className="fixed bottom-80 top-96 flex justify-between right-1  left-1">
                <button
                    onClick={handlePreviousClick}
                    disabled={offset === 0}
                    className="px-4 text-3xl hover:bg-fuchsia-300 hover:text-2xl rounded-e-3xl mr-2"
                >
                    <AiOutlineDoubleLeft />
                </button>
                <button
                    onClick={handleNextClick}
                    disabled={!data.photos || data.photos.length < 20}
                    className="px-4 text-3xl hover:bg-fuchsia-300 hover:text-2xl rounded-s-3xl"
                >
                    <AiOutlineDoubleRight />
                </button>
            </div> */}
        </>
    );
}

export default ImageCard;