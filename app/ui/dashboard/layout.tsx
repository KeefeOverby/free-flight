import Nav from '@/app/components/nav';

const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <div className="grid grid-col-1 h-screen w-full p-4">
                <Nav />
                <div>{children}</div>
            </div>
        </>
    );
}

export default DashboardLayout;