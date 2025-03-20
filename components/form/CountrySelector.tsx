'use client';
import { ArrowDownCircleIcon } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { COUNTRY_LIST as countries } from '@/utils/constants';

export function CountrySelector() {
  const { countryCode } = useParams();
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(countryCode);

  const handleCountryChange = (e: any) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    router.push(`/trending-videos/${newCountry}`);
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <label htmlFor="country-select" className="mr-2 text-gray-300">
        Select Country:
      </label>
      <div className="relative">
        <select
          id="country-select"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="py-1.5 px-4 pr-8 bg-gray-900 text-white border-2 border-purple-600 border-dotted rounded-full focus:outline-none  focus:border-purple-400 appearance-none cursor-pointer transition-all duration-300"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name} ({country.code})
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <ArrowDownCircleIcon />
        </div>
      </div>
    </div>
  );
}

