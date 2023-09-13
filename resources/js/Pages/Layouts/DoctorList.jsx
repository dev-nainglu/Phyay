import DoctorItems from '../Components/DoctorItems';
import HorizontalCategoryItems from '../Components/HorizontalCategoryItems';

export default function Wall(props){

    return (
        <>
            <div class="overflow-x-scroll mt-[60px]" style={{scrollWidth: "none"}}>
                <HorizontalCategoryItems />
            </div>
            <DoctorItems />

        </>
    );
}
