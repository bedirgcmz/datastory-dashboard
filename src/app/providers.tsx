import { ChakraProvider} from '@chakra-ui/react';
import ApolloWrapper from '@/components/ApolloWrapper';
import { ReactNode } from 'react';


export function Providers({ children }: { children: ReactNode }) {
  return (
    <ApolloWrapper>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </ApolloWrapper>
  );
}
