import DoctorItems from '../Components/DoctorItems';
import CategoryItems from '../Components/CategoryItems';
import AppLayout from '../AppLayout';

export default function Wall(props){

    const cards = ['a', 'b', 'c', 'd']

    return (
        <>
        <AppLayout>
            <DoctorItems />
            <CategoryItems />
        </AppLayout>

        </>
    );
}
