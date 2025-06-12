'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ApolloWrapper({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
