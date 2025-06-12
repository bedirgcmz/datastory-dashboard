'use client';
import { Box, Flex, HStack, Radio, RadioGroup, Select } from '@chakra-ui/react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import {  motion } from 'framer-motion'
import { useCountries, useMeasureByCountry } from '@/hooks/useCountryData';

export default function Home() {
    const MeasureChart = dynamic(() => import('@/components/MeasureChart'), { ssr: false });
    const [selectedMeasure, setSelectedMeasure] = useState('life_expectancy');
    const [selectedCountry, setSelectedCountry] = useState('');
    const { loading, error, data } = useCountries();
    const { data: measureData } = useMeasureByCountry(selectedCountry, selectedMeasure);

    
    if (loading) return <p style={{textAlign:"center"}}>Loading...</p>;
    if (error) return <p>Error loading countries: {error.message}</p>;

  return (
    <Box maxW="750px" w="90%" mx="auto" mt={8} mb={4} flexBasis={1} >
        <Flex
         direction={{ base: 'column', md: 'row' }}
         gap={4}
         align="center"
         justify="space-between"
         mb={8}
         w="100%"
         >
            <RadioGroup
                value={selectedMeasure}
                onChange={(value) => setSelectedMeasure(value)}
                w={{ base: "100%", md: "65%" }}
                >
                <HStack spacing={4} justifyContent={"space-between"}  flexDirection={{ base: 'column', sm: 'row' }} alignItems={{ base: 'start', sm: 'center' }} >
                    <Radio value="life_expectancy">Life Expectancy</Radio>
                    <Radio value="population">Population</Radio>
                    <Radio value="net_migration_rate">Net Migration Rate</Radio>
                </HStack>
            </RadioGroup>
            <Select
                placeholder="Select Country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                w={{ base: "100%", md: "35%" }}
                >
                {data.item.map((country: any) => (
                    <option key={country.id} value={country.name.toLowerCase()}>
                    {country.name}
                    </option>
                ))}
            </Select>
        </Flex>


        <Box>
            {measureData && (measureData.cube_cube_M6Lh5is0FtqUhZ.length !== 0) ? (
            <div style={{ marginTop: '2rem', marginLeft: "-40px" }}>
                <MeasureChart data={measureData.cube_cube_M6Lh5is0FtqUhZ} />
            </div>
            ) :
                <motion.div
                key={selectedCountry + selectedMeasure}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    height: '400px',
                    marginTop: '2rem',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    color: '#e53e3e', 
                }}
                >
                No data found for this query
                </motion.div>
            }

        </Box>

    </Box>
  )
}