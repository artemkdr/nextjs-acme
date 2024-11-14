import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    return <CustomersTable query={searchParams?.query ?? ''} />;
}
